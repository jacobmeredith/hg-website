import React from 'react';
import styled from 'styled-components';

import { Phone, Mail } from 'react-feather';

import Container from './Container';

const Footer = ({ phoneNumber, emailAddress, address }) => {
  return (
    <FooterElement>
      <Container>
        {phoneNumber && <FooterParagraph>
          <Phone color='white' />
          <FooterLink href={`tel:${phoneNumber}`}>{phoneNumber}</FooterLink>
        </FooterParagraph>}
        {emailAddress && <FooterParagraph>
          <Mail color='white' />  
          <FooterLink href={`mailto:${emailAddress}`}>{emailAddress}</FooterLink>
        </FooterParagraph>}
        {address && <FooterAddress dangerouslySetInnerHTML={{ __html: address }} />}
      </Container>
    </FooterElement>
  )
}

const FooterElement = styled.footer`
  padding: 2em 0;
  background-color: ${props => props.theme.colours.primary};

  @media(max-width: ${props => props.theme.sizing.mobile}px) {
    padding: 2em;
  }
`;

const FooterParagraph = styled.p`
  margin-bottom: .5em;
  display: flex;
`;

const FooterLink = styled.a`
  margin-left: .5em;
  color: ${props => props.theme.colours.white};
`;

const FooterAddress = styled.div`
  color: ${props => props.theme.colours.white};
`;

export default Footer;
