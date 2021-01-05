import React from 'react';
import styled from 'styled-components';

import { Search } from 'react-feather';

import Component from './common/Component';
import GalleryItem from './GalleryItem';

const Gallery = ({ title, items }) => {
  const map = items.map(item => <GalleryItem key={item.src} image={item.src} description={item.alt} />);

  if (map.length === 0) return null;

  return (
    <Component>
      {title && <h2>{title}</h2>}
      <GalleryContentContainer>
        {map} 
      </GalleryContentContainer>
    </Component>
  )
}

const GalleryContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media(max-width: ${props => props.theme.sizing.mobile}px) {
    flex-direction: column;
  }
`;

export default Gallery;
