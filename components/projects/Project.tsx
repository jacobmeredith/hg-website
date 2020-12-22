import React from 'react';
import styled from 'styled-components';

import Container from '../common/Container';

const Project = ({ project }) => {
  const { featured_image, title, information, start_date, images, brand } = project.item.elements;

  return (
    <Container>
      <ProjectContainer>
        <ProjectHeader style={{ backgroundImage: `url(${featured_image.value[0].url})` }}>
          <div className='content'>
            <h1>{title.value}</h1>
          </div>
        </ProjectHeader>
        <div dangerouslySetInnerHTML={{ __html: information.value }} />
        <div>
          <p>Gallery here</p>
        </div>
      </ProjectContainer>
    </Container>
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
  background-position: center center;
  background-position: cover;

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

export default Project;