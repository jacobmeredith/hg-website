import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

import Container from './common/Container';

const Banner = ({ item }) => {
  const youtubeVideo = <VideoElement>
      <YouTube
        videoId={item.elements.youtube_id.value}
        opts={{
          playerVars: {
            playlist: item.elements.youtube_id.value,
            autoplay: 1,
            loop: 1,
            modestbranding: 1,
            disablekb: 1,
            mute: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
          }}
        }/>
      </VideoElement>

  return (
    <BannerElement hasVideo={!!item.elements.youtube_id.value} style={{ backgroundImage: item.elements.background_image.value.length > 0 ? `url(${item.elements.background_image.value[0].url})` : 'none' }}>
      {item.elements.youtube_id.value && youtubeVideo}
      {(item.elements.title.value && item.elements.content.value) && <BannerContentContainer>
        <Container>
          <BannerContent>
            <h1>{item.elements.title.value}</h1>
            <div dangerouslySetInnerHTML={{ __html: item.elements.content.value }} />
          </BannerContent>
        </Container>
      </BannerContentContainer>}
    </BannerElement>
  )
}

const BannerElement = styled.section<{ hasVideo }>`
  position: relative;
  overflow: hidden;
  min-height: ${props => props.hasVideo
    ? '0'
    : `
        80vh;
        padding: 2em;
      `};
  background-size: cover;
  background-position: center center;
  background-color: ${props => props.theme.colours.primary};
`;

const VideoElement = styled.div`
  > div {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    background-color: rgba(0, 0, 0, .1);
  }

  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    transform: translate(-50%, -50%);
    
    @media (min-aspect-ratio: 16/9) {
      height: 56.25vw;
    }
    
    @media (max-aspect-ratio: 16/9) {
      width: 177.78vh;
    }
  }
`;

const BannerContentContainer = styled.div`
  width: 100%;
  position: absolute; 
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 40;
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    background-color: ${props => props.theme.colours.secondary};
    color: white;
    padding: .25em 1em;
  }

  div { 
    background-color: ${props => props.theme.colours.primary};
    color: white;
    padding: .25em 1em;
    margin-top: .5em;
  }
`;

export default Banner;
