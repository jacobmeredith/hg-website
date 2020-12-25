import React from 'react';
import styled from 'styled-components';

import { MapPin, Phone, Mail } from 'react-feather';

import Container from './Container';

const Footer = ({ phoneNumber, emailAddress, address }) => {
  return (
    <FooterElement>
      <Container>
        <FooterContainer>
          {address && <div>
            <MapPin color='white' />
            <FooterAddress dangerouslySetInnerHTML={{ __html: address }} />
          </div>}
          {(phoneNumber || emailAddress) && <div>
            {phoneNumber && <FooterParagraph>
              <Phone color='white' />
              <FooterLink href={`tel:${phoneNumber}`}>{phoneNumber}</FooterLink>
            </FooterParagraph>}
            {emailAddress && <FooterParagraph>
              <Mail color='white' />  
              <FooterLink href={`mailto:${emailAddress}`}>{emailAddress}</FooterLink>
            </FooterParagraph>}
          </div>}
        </FooterContainer>
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

const FooterContainer = styled.div`
  display: flex;

  > * {
    flex: 1;
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
