import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const Header = ({ logo, items, modularContent }) => {
  const map = items.map(item => (
    <HeaderListItem key={modularContent[item].system.id}>
      <HeaderListItemLink
        href={modularContent[item].elements.page_url.value === 'home'
          ? '/'
          : `/${modularContent[item].elements.page_url.value}`}>
          {modularContent[item].elements.title.value}
      </HeaderListItemLink>
    </HeaderListItem>
  ));

  return (
    <HeaderElement>
      <Container>
        <HeaderContainer>
          <HeaderLogoLink href='/'>
            <HeaderLogoImg src={logo.url} alt={logo.description} />
          </HeaderLogoLink>
          <HeaderNav>
            <HeaderList>
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
  justify-content: space-between;
`;

const HeaderLogoLink = styled.a`
  width: 150px;
`;

const HeaderLogoImg = styled.img`
  max-width: 100%;
  display: block;
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
`;

const HeaderList = styled.ul`
  display: flex;
  list-style-type: none;
`;

const HeaderListItem = styled.li`
  padding: .75em 1em;
`;

const HeaderListItemLink = styled.a`
  color: ${props => props.theme.colours.primary};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colours.secondary};
  }
`;

export default Header;
