import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu, X as Close } from 'react-feather';

import Container from './Container';

const Header = ({ logo, items, modularContent }) => {
  const [expanded, setExpanded] = useState(false);

  const map = items.map(item => (
    <li key={modularContent[item].system.id}>
      <HeaderListItemLink
        href={modularContent[item].elements.page_url.value === 'home'
          ? '/'
          : `/${modularContent[item].elements.page_url.value}`}>
          {modularContent[item].elements.title.value}
      </HeaderListItemLink>
    </li>
  ));

  return (
    <HeaderElement>
      <Container>
        <HeaderContainer>
          <HeaderLogoLink href='/'>
            <HeaderLogoImg src={logo.url} alt={logo.description} />
          </HeaderLogoLink>
          <HeaderNavButton type='button' onClick={() => setExpanded(!expanded)}>
            {!expanded
              ? <Menu />
              : <Close />}
            Menu
          </HeaderNavButton> 
          <HeaderNav>
            <HeaderList expanded={expanded}>
              {map}
            </HeaderList>
          </HeaderNav>
        </HeaderContainer>
      </Container>
    </HeaderElement>
  )
}

const HeaderElement = styled.header`
  background-color: ${props => props.theme.colours.white};
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const HeaderLogoLink = styled.a`
  width: 150px;
`;

const HeaderLogoImg = styled.img`
  max-width: 100%;
  display: block;
`;

const HeaderNavButton = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  margin-right: 1em;

  @media(max-width: ${props => props.theme.sizing.mobile}px) {
    display: inline-flex;
  }
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;

  @media(max-width: ${props => props.theme.sizing.mobile}px) {
    flex-direction: column;
    width: 100vw;
  }
`;

const HeaderList = styled.ul<{ expanded }>`
  display: flex;
  list-style-type: none;

  @media(max-width: ${props => props.theme.sizing.mobile}px) {
    ${props => props.expanded
      ? `
          display: flex;
          flex-direction: column;
          width: 100%;
        `
      : `
          display: none;
        `
    }
  }
`;

const HeaderListItemLink = styled.a`
  width: 100%;
  display: inline-flex;
  padding: .75em 1em;
  color: ${props => props.theme.colours.primary};
  text-decoration: none;
  
  &:hover {
    color: ${props => props.theme.colours.secondary};
  }
`;

export default Header;
