import DefaultErrorPage from 'next/error';

import { cache } from './../../helpers/cache';
import { getContentItem, getContentItems } from './../../kontent/client';

import PageWrapper from '../../components/common/PageWrapper';
import ProjectsListing from '../../components/projects/ProjectsListing';

const Projects = ({ projects, settings }) => {
  if (!projects) return <DefaultErrorPage statusCode={404} />

  const settingsData = JSON.parse(settings);
  const { items } = JSON.parse(projects);

  return (
    <PageWrapper title={'Projects'} description={'Projects page description'} settings={settingsData}>
      <ProjectsListing projects={items} />
    </PageWrapper>
  )
}

export async function getServerSideProps({ res }) {
  const settings = await cache(`site.settings`, async () => await getContentItem(`/items?system.type=settings&depth=3&limit=1`));
  const projects = await cache(`projects`, async () => await getContentItems(`/items?system.type=project&depth=5&order=system.last_modified[desc]`));

  if (!projects) {
    res.statusCode = 404;

    return {
      props: {
        errorCode: 404,
        settings
      }
    }
  }

  return {
    props: {
      settings,
      projects
    }
  }
}

export default Projects;
