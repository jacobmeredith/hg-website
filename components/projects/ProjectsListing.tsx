import React from 'react';
import styled from 'styled-components';

import Component from '../common/Component';

import Card from './Card';

const ProjectsListing = ({ projects }) => {
  const map = projects.map(project => (
    <Card key={project.system.id} type='vertical' {...project.elements} />
  ));

  return (
    <Component backgroundColour='grey' size='default'>
      <ProjectListContainer>
        {map}
      </ProjectListContainer>
    </Component>
  )
}

const ProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ProjectsListing;
