import React from 'react';
import styled from 'styled-components';
import Card from './Card';

import Component from './common/Component';

const Cards = ({ item, modularContent }) => {
  const map = item.elements.components.value.map(card => (
    <Card
      key={modularContent[card].system.id}
      id={modularContent[card].system.id}
      backgroundColour={item.elements.component__background_color.value[0].codename}
      {...modularContent[card].elements} />
  ));

  return (
    <Component backgroundColour={item.elements.component__background_color.value[0].codename}>
      <ContentContainer>
        {item.elements.title.value && <h2>{item.elements.title.value}</h2>}
        {item.elements.content.value && <div dangerouslySetInnerHTML={{ __html: item.elements.content.value }} />}
      </ContentContainer>
      <CardContainer>
        {map}
      </CardContainer>
    </Component>
  )
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; 
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1em;

  @media(max-width: ${props => props.theme.sizing.mobile}px) {
    flex-direction: column;
  }
`;

export default Cards;
