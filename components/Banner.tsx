import React from 'react';
import styled from 'styled-components';

import Container from './common/Container';

const Banner = ({ item }) => {
  return (
    <BannerElement style={{ backgroundImage: item.elements.background_image.value.length > 0 ? `url(${item.elements.background_image.value[0].url})` : 'none' }}>
      <Container>
        Banner component: {item.system.id}
      </Container>
    </BannerElement>
  )
}

const BannerElement = styled.section`
  padding: 2em;
  min-height: 80vh;
  background-size: cover;
  background-position: center center;
  background-color: ${props => props.theme.colours.primary};
`;

export default Banner;
