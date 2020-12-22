import React from 'react';
import styled from 'styled-components';

import Component from './common/Component';

const Heading = ({ item }) => {
  return (
    <Component backgroundColour='secondary' size='default'>
      <HeadingContainer>
        {item.elements.title.value && <h1>{item.elements.title.value}</h1>}
        {item.elements.content.value && <div dangerouslySetInnerHTML={{ __html: item.elements.content.value }} />}
      </HeadingContainer>
    </Component>
  )
}

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colours.white};
`;

export default Heading;
