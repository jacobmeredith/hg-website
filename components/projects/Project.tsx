import React from 'react';
import styled from 'styled-components';

import Component from './../common/Component';
import Gallery from './../Gallery';

const Project = ({ project }) => {
  const { featured_image, title, information, start_date, images, brand } = project.item.elements;
  const gallery = images.value.map(image => {
    return { src: image.url, alt: image.description }
  });

  return (
    <>
      <Component>
        <ProjectContainer>
          <ProjectHeader style={{ backgroundImage: `url(${featured_image.value[0].url})` }}>
            <div className='content'>
              <h1>{title.value}</h1>
            </div>
          </ProjectHeader>
          <ProjectContent dangerouslySetInnerHTML={{ __html: information.value }} />
          <div>
            <h2>Completed on behalf of</h2>
            <img
              style={{ width: '300px', maxWidth: '100%' }}
              src={project.modular_content[project.item.elements.brand.value[0]].elements.logo.value[0].url} 
              alt={project.modular_content[project.item.elements.brand.value[0]].elements.logo.value[0].description} />
          </div>
        </ProjectContainer>
      </Component>
      <Gallery title='Gallery' items={gallery} />    
    </>
  )
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 40vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-position: cover;
  margin-bottom: 1.5em;

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.colours.secondary};
    color: ${props => props.theme.colours.white};
    padding: .5em 1.5em;
    max-width: 70%;
    text-align: center;
  }
`;

const ProjectContent = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: .5em;
  }

  p {
    margin-bottom: 1em;
  }
`;

export default Project;
