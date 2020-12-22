import DefaultErrorPage from 'next/error';

import { cache } from './../helpers/cache';
import { getContentItem, getContentItems } from './../kontent/client';

import PageWrapper from '../components/common/PageWrapper';

import Mapper from './../components/Mapper';


const Home = ({ page, settings, projects }) => {
  if (!page) return <DefaultErrorPage statusCode={404} />

  const pageData = JSON.parse(page);
  const settingsData = JSON.parse(settings);
  const projectsData = JSON.parse(projects);

  return (
    <PageWrapper title={pageData.item.elements.title.value} description={pageData.item.elements.description.value} settings={settingsData}>
      <Mapper
        components={pageData.item.elements.components.value}
        modularContent={pageData.modular_content}
        projects={projectsData} />
    </PageWrapper>
  )
}

export async function getServerSideProps({ res }) {
  const settings = await cache(`site.settings`, async () => await getContentItem(`/items?system.type=settings&depth=3&limit=1`));
  const page = await cache(`page.home`, async () => await getContentItem(`/items?system.type=page&depth=5&elements.page_url=home&limit=1`));
  const projects = await cache(`projects`, async () => await getContentItems(`/items?system.type=project&depth=5&order=system.last_modified[desc]`));

  if (!page) {
    res.statusCode = 404;

    return {
      props: {
        statusCode: 404,
        settings
      }
    }
  }

  return {
    props: {
      page,
      settings,
      projects
    }
  }
}

export default Home;
