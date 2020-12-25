import React from 'react';
import styled from 'styled-components';

import Button from './../common/Button';

const Card = ({ type, title, page_url, featured_image, excerpt }) => {
  return (
    <ArticleElement type={type}>
      <div style={{ backgroundImage: `url(${featured_image.value[0].url})` }} />
      <div>
        <h3>{title.value}</h3>
        <div dangerouslySetInnerHTML={{ __html: excerpt.value }} />
        <Button href={`/projects/${page_url.value}`}>View project</Button>
      </div>
    </ArticleElement>
  )
}

const ArticleElement = styled.article<{ type: string }>`
  display: flex;
  ${props => props.type === 'vertical'
    ? `
        flex-direction: row;
        max-height: 250px;
        min-height: 250px;
        margin-bottom: 1em;
      `
    : `
        flex-direction: column;
        flex-basis: calc(33% - 1em);
      `}

  @media(max-width: ${props => props.theme.sizing.mobile}px) {
    width: 100%;
    margin-bottom: 1em;
  }

  background-color: ${props => props.theme.colours.white};
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
  }

  a {
    display: inline-flex;
    margin-top: auto;
    justify-self: center;
    align-self: flex-start;
  }

  > div:first-of-type {
    background-size: cover;
    background-position: center center;

    ${props => props.type === 'vertical'
      ? `
          flex-basis: 30%;
          margin-right: .5em;
        `
      : `
          flex-basis: 100%;
          min-height: 10em;
          max-height: 10em;
        `}
  }

  > div:last-of-type {
    flex-basis: 70%;
    padding: 1em;
    display: flex;
    flex-direction: column;

    > div {
      margin-bottom: .5em;
    }

    ${props => props.type === 'vertical'
      ? `margin-left: .5em;`
      : `margin-left: 0;`}
  }
`;

export default Card;
