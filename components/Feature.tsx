import React from 'react';
import styled from 'styled-components';

import Component from './common/Component';

const Feature = ({ item }) => {
  return (
    <Component backgroundColour={item.elements.component__background_color.value[0].codename}>
      <FeatureContainer>
        {item.elements.image.value.length > 0 && <div>
          <img src={item.elements.image.value[0].url} alt={item.elements.image.value[0].description} />
        </div>}
        <div>
          {item.elements.title.value && <h2>{item.elements.title.value}</h2>}
          {item.elements.content.value && <div dangerouslySetInnerHTML={{ __html: item.elements.content.value }} />}
        </div>
      </FeatureContainer>
    </Component>
  )
}

const FeatureContainer = styled.div`
  display: flex;

  @media(max-width: ${props => props.theme.sizing.mobile}px) {
    flex-direction: column;
  }

  > div:first-child {
    flex-basis: 30%;
    margin-right: .5em;
    border-radius: .5em;
    overflow: hidden;

    @media(max-width: ${props => props.theme.sizing.mobile}px) {
      margin-right: 0;
      margin-bottom: 1em;
    }

    img {
      max-width: 100%;
      display: block;
    }
  }

  > div:last-child {
    flex-basis: 70%;
    margin-left: .5em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: ${props => props.theme.sizing.mobile}px) {
      margin-left: 0;
    }
  }
`;

export default Feature;
