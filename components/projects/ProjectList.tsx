import React from 'react';
import styled from 'styled-components';

import Component from './../common/Component';
import Card from './Card';

const ProjectList = ({ item, modularContent, projects }) => {
  const projectsListMap = item.elements.projects.value.length > 0
    ? item.elements.projects.value.map(project => <Card key={modularContent[project].system.id} type='horizontal' {...modularContent[project].elements} />)
    : projects.items.slice(0, 3).map(project => <Card key={project.system.id} type='horizontal' {...project.elements} />);

  return (
    <Component backgroundColour={item.elements.component__background_color.value[0].codename} size={item.elements.component__size.value[0].codename}>
      <ProjectListContentContainer>
        {item.elements.title.value && <h2>{item.elements.title.value}</h2>}
        {item.elements.content.value && <div dangerouslySetInnerHTML={{ __html: item.elements.content.value }} />}
      </ProjectListContentContainer>
      {projectsListMap.length > 0 && <ProjectListContainer>
        {projectsListMap}
      </ProjectListContainer>}
    </Component>
  )
}

const ProjectListContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ProjectListContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media(max-width: ${props => props.theme.sizing.mobile}px) {
    flex-direction: column;
  }
`;

export default ProjectList;
