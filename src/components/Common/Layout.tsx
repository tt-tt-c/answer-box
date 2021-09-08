import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import {bg_01} from '../../assets/img';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: url(${bg_01});
  color: #FFF;
`;
