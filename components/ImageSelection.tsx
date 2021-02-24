import React from 'react';
import styled from 'styled-components';

import Component from './common/Component';

const ImageSelection = ({ item }) => {
  const images = item.elements.images.value.map((image, index) => (
    <ImageContainer key={`${image.name}_${index}`}>
      <Image src={image.url} />
    </ImageContainer>
  ));

  return (
    <Component backgroundColour={item.elements.component__background_color.value[0].codename} size={item.elements.component__size.value[0].codename}>
      <ContentContainer>
        {item.elements.title.value && <h2>{item.elements.title.value}</h2>}
        {item.elements.content.value && <div dangerouslySetInnerHTML={{ __html: item.elements.content.value }} />}
      </ContentContainer>
      <ImageSelectionContainer>
        {images}
      </ImageSelectionContainer>
    </Component>
  )
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1em;
`;

const ImageSelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;

  @media(max-width: ${props => props.theme.sizing.mobile}px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  margin: 0 1em;

  @media(max-width: ${props => props.theme.sizing.mobile}px) {
    margin: 0 0 1em 0;
  
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Image = styled.img`
  max-width: 100%;
  display: block;
`;

export default ImageSelection;
