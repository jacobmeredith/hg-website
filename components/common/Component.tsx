import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const Component = ({ backgroundColour = 'white', size = 'default', children }) => {
  return (
    <ComponentSection backgroundColour={backgroundColour} size={size}>
      <Container>
        {children}
      </Container>
    </ComponentSection>
  )
}

const ComponentSection = styled.section<{ backgroundColour, size }>`
  padding: ${props => {
    switch(props.size) {
      case 'small': {
        return '1em';
      }
      case 'large': {
        return '3em';
      }
      case 'default':
      default: {
        return '2em';
      }
    }
  }} 0;
  background-color: ${props => props.theme.colours[props.backgroundColour]};

  @media(max-width: ${props => props.theme.sizing.mobile}px) {
    padding-left: 1em;
    padding-right: 1em;
  }

  h2:first-of-type {
    margin-bottom: 1em;
  }
`;

export default Component;
