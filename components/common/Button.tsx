import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const Button = ({ type = 'primary', href = '#', children }) => {
  return (
    <ButtonElement type={type} href={href}>{children}</ButtonElement>
  )
}

const ButtonElement = styled.a<{ type: string }>`
  padding: .75em 1em;
  display: inline-block;
  background-color: ${props => props.theme.colours[props.type]};
  color: ${props => props.theme.colours.white};
  text-decoration: none;

  &:hover {
    background-color: ${props => darken(0.1, props.theme.colours[props.type])};
  }
`;

export default Button;
