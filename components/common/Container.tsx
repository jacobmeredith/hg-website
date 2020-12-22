import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <DivContainer>{children}</DivContainer>
}

const DivContainer = styled.div`
  width: ${props => props.theme.sizing.container}px;
  max-width: 100%;
  margin: 0 auto;
`;

export default Container;
