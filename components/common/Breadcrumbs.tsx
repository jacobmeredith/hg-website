import React from 'react';
import { useRouter } from 'next/router'
import styled from 'styled-components';

import Container from './Container';

const Breadcrumbs = () => {
  const router = useRouter();
  const pages = router.asPath.split(/\//g).filter(part => part !== '');

  const map = pages.map((page, index) => {
    if (index + 1 !== pages.length) {
      return(
        <li key={page}>
          <span>
            <a href={'/' + page}>{page.charAt(0).toUpperCase() + page.slice(1).replace(/-/g, ' ')}</a>
            &gt;
          </span>
        </li>
      )
    } else {
      return(
        <li key={page}> 
          <span>{page.charAt(0).toUpperCase() + page.slice(1).replace(/-/g, ' ')}</span>
        </li>
      )
    }
  });

  if (pages.length < 1) {
    return null;
  }

  return (
    <Container>
      <BreadcrumbsList>
        <li>
          <span>
            <a href='/'>Home</a>
            &gt;    
          </span>
        </li>
        {map}
      </BreadcrumbsList>
    </Container>
  )
}

const BreadcrumbsList = styled.ul`
  padding: .5em 0;
  display: flex;
  flex-direction: row;
  list-style-type: none;

  li {
    margin-left: .5em;

    &:first-of-type {
      margin-left: 0;
    }

    a {
      margin-right: .5em;
    }
  }
`;

export default Breadcrumbs;
