import React from 'react';
import styled from 'styled-components';

import Component from './common/Component';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Social = ({ item }) => {
  return (
    <Component backgroundColour={item.elements.component__background_color.value[0].codename} size={item.elements.component__size.value[0].codename}>
      <ContentContainer>
        {item.elements.title.value && <h2>{item.elements.title.value}</h2>}
        {item.elements.content.value && <div dangerouslySetInnerHTML={{ __html: item.elements.content.value }} />}
      </ContentContainer>
      <SocialContainer>
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='hgfairhurst'
          options={{ height: 400 }}
          borderColor='#ddd' />
      </SocialContainer>
    </Component>
  );
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; 
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Social;