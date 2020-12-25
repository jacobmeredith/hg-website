import React from 'react';
import styled from 'styled-components';

import { Search } from 'react-feather';

import Container from './common/Container';
import GalleryItem from './GalleryItem';

const Gallery = ({ items }) => {
  const map = items.map(item => <GalleryItem key={item.src} image={item.src} description={item.alt} />);

  return (
    <GalleryContainer>
      <Container>
        <GalleryContentContainer>
          {map} 
        </GalleryContentContainer>
      </Container>
    </GalleryContainer>
  )
}

const GalleryContainer = styled.div`
  padding: 2em;
`;

const GalleryContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Gallery;
