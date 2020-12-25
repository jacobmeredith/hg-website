import React, { useState } from 'react';
import styled from 'styled-components';

import { Search, X } from 'react-feather';

const GalleryItem = ({ image, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <GalleryItemContainer>
      {expanded && <GalleryItemOverlay onClick={() => setExpanded(false)} />}
      <GalleryItemThumbnail style={{ backgroundImage: `url(${image})` }} onClick={() => setExpanded(!expanded)}>
        <GalleryItemThubnailOverlay expanded={expanded}>
          <Search color='white' />
          {description && <p>{description}</p>}
        </GalleryItemThubnailOverlay>
      </GalleryItemThumbnail>
      {expanded && <GalleryItemExpanded>
        <GalleryItemExpandedMenu>
          <GalleryItemExpandedButton type='button' onClick={() => setExpanded(false)}>
            <X color='white' />
          </GalleryItemExpandedButton>
        </GalleryItemExpandedMenu>
        <GalleryItemExpandedImage src={image} alt={description} />
        {description && <p>{description}</p>}
      </GalleryItemExpanded>}
    </GalleryItemContainer>
  )
}

const GalleryItemContainer = styled.div`
  flex-basis: 33.33%;
  height: 20em;
  overflow: hidden;
`;

const GalleryItemOverlay = styled.div`
  content: '';                                                                                        
  position: fixed;                                                    
  top: 0;                                                             
  left: 0;                                                            
  width: 100%;                                                        
  height: 100vh;                                                      
  background-color: rgba(0, 0, 0, .6);
  z-index: 50;
`;

const GalleryItemThumbnail = styled.div`
  height: 20em;
  background-size: cover;
  background-position: center center;
  position: relative;

  > div:hover {
    cursor: pointer;
    opacity: 1;
    transition: ease all .5s;
  }
`;

const GalleryItemThubnailOverlay = styled.div<{ expanded }>`
  opacity: ${props => props.expanded ? '1' : '0'};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colours.primary};
  color: ${props => props.theme.colours.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GalleryItemExpanded = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: ${props => props.theme.sizing.mobile}px) {
    width: 90%;
  }

  p {
    color: white;
    margin-top: 1em;
  }
`;

const GalleryItemExpandedMenu = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: .5em;
`;

const GalleryItemExpandedButton = styled.button`
  display: flex;
  background: none;
  border: none;
  margin-left: auto;
`;

const GalleryItemExpandedImage = styled.img`
  max-width: 100%;
  display: block;
`;

export default GalleryItem;
