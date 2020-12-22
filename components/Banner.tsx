import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

import Container from './common/Container';

const Banner = ({ item }) => {
  console.log(item);

  const youtubeVideo = <VideoElement>
      <YouTube
        videoId={item.elements.youtube_id.value}
        opts={{
          playerVars: {
            autoplay: 1,
            loop: 1,
            modestbranding: 1,
            disablekb: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
          }}
        }/>
      </VideoElement>

  return (
    <BannerElement style={{ backgroundImage: item.elements.background_image.value.length > 0 ? `url(${item.elements.background_image.value[0].url})` : 'none' }}>
      {item.elements.youtube_id.value && youtubeVideo}
      <Container>
        <h1>{item.elements.title.value}</h1>
        <div dangerouslySetInnerHTML={{ __html: item.elements.content.value }} />
      </Container>
    </BannerElement>
  )
}

const BannerElement = styled.section`
  position: relative;
  padding: 2em;
  min-height: 80vh;
  background-size: cover;
  background-position: center center;
  background-color: ${props => props.theme.colours.primary};
  overflow: hidden;
`;

const VideoElement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-bottom: 56.25%;


  iframe {
    position: absolute;
    top: -15%;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default Banner;
