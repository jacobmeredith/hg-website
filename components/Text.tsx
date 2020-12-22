import React from 'react';
import styled from 'styled-components';

import Component from './common/Component';

const Text = ({ item }) => {
  return (
    <Component backgroundColour={item.elements.component__background_color.value[0].codename} size={item.elements.component__size.value[0].codename}>
      <TextContainer>
        {item.elements.title.value && <h2>{item.elements.title.value}</h2>}
        {item.elements.content.value && <div dangerouslySetInnerHTML={{ __html: item.elements.content.value }} />}
      </TextContainer>
    </Component>
  )
}

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default Text;
