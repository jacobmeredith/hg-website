import React from 'react';
import styled from 'styled-components';

const Card = ({ id, content, image, title }) => {
  return (
    <CardElement>
      <CardImage style={{ backgroundImage: `url(${image.value[0].url})` }} />
      <CardContent>
        <h3>{title.value}</h3>
        <div dangerouslySetInnerHTML={{ __html: content.value }} />
      </CardContent>
    </CardElement>
  )
}

const CardElement = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  overflow: hidden;
  margin: 0 .5em;

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

const CardImage = styled.div`
  width: 100%;
  min-height: 10em;
  background-size: cover;
  background-position: center center;
`;

const CardContent = styled.div`
  padding: 1em;

  h3 {
    margin-bottom: 1em;
  }
`;

export default Card;
