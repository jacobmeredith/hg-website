import React from 'react';

import Banner from './Banner';
import Heading from './Heading';
import Text from './Text';
import LongText from './LongText';
import Feature from './Feature';
import Cards from './Cards';
import ProjectList from './projects/ProjectList';

const Mapper: React.FC<{ components: any, modularContent: any, projects: any }> = ({ components, modularContent, projects }) => {
  const map = components.map(component => {
    switch(modularContent[component].system.type) {
      case 'banner': {
        return <Banner key={modularContent[component].system.id} item={modularContent[component]} />
      }
      case 'heading': {
        return <Heading key={modularContent[component].system.id} item={modularContent[component]} />
      }
      case 'text': {
        return <Text key={modularContent[component].system.id} item={modularContent[component]} />
      }
      case 'feature': {
        return <Feature key={modularContent[component].system.id} item={modularContent[component]} />
      }
      case 'cards': {
        return <Cards key={modularContent[component].system.id} item={modularContent[component]} modularContent={modularContent} />
      }
      case 'long_text': {
        return <LongText key={modularContent[component].system.id} item={modularContent[component]} />
      }
      case 'project_list': {
        return <ProjectList key={modularContent[component].system.id} item={modularContent[component]} modularContent={modularContent} projects={projects} />
      }
      default: {
        return <section key={modularContent[component].system.id}>Could not find component {modularContent[component].system.type}</section>
      }
    }
  });

  return (
    <>
      {map}
    </>
  );
}

export default Mapper;
