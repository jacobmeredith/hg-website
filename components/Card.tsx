import React from 'react';
import styled from 'styled-components';

const Card = ({ id, content, image, title, backgroundColour }) => {
  const hasContent = (title.value || content.value != '<p><br></p>');

  return (
    <CardElement backgroundColour={hasContent ? backgroundColour : 'grey'}>
      {image.value.length > 0 && <CardImage src={image.value[0].url} alt={image.value[0].description} />}
      {hasContent && <CardContent>
        <h3>{title.value}</h3>
        <div dangerouslySetInnerHTML={{ __html: content.value }} />
      </CardContent>}
    </CardElement>
  )
}

const CardElement = styled.div<{ backgroundColour: string }>`
  flex: 1;
  overflow: hidden;
  margin: 0 .5em;

  ${props => props.backgroundColour === 'white'
    ? `background-color: ${props.theme.colours.grey}`
    : `background-color: ${props.theme.colours.white}`};

  @media(max-width: ${props => props.theme.sizing.mobile}px) {
    width: 100%;
    margin: 1em 0;
  }

  &:first-of-type {
    margin-left: 0;

    @media(max-width: ${props => props.theme.sizing.mobile}px) {
      margin-top: 0;
    }
  }

  &:last-of-type {
    margin-right: 0;

    @media(max-width: ${props => props.theme.sizing.mobile}px) {
      margin-bottom: 0;
    }
  }
`;

const CardImage = styled.img`
  object-fit: cover;
  max-height: 30em;
  width: 100%;
`;

const CardContent = styled.div`
  padding: 1em;

  h3 {
    margin-bottom: 1em;
  }
`;

export default Card;
