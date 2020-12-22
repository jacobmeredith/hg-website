import DefaultErrorPage from 'next/error';

import { cache } from './../../helpers/cache';
import { getContentItem } from './../../kontent/client';

import PageWrapper from '../../components/common/PageWrapper';
import ProjectView from '../../components/projects/Project';

const Project = ({ project, settings }) => {
  if (!project) return <DefaultErrorPage statusCode={404} />

  const projectData = JSON.parse(project);
  const settingsData = JSON.parse(settings);

  return (
    <PageWrapper title={projectData.item.elements.title.value} description={projectData.item.elements.description.value} settings={settingsData}>
      <ProjectView project={projectData} />
    </PageWrapper>
  )
}

export async function getServerSideProps({ params, res }) {
  const settings = await cache(`site.settings`, async () => await getContentItem(`/items?system.type=settings&depth=3&limit=1`));
  const project = await cache(`project.${params.project}`, async () => await getContentItem(`/items?system.type=project&depth=5&elements.page_url=${params.project}&limit=1`));

  if (!project) {
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
      project,
      settings
    }
  }
}

export default Project;
