import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  body {
    font-family: Noto Sans CJK KR, sans-serif;
    letter-spacing: -0.03px; 
  }

  #root, body {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
  }

  li {
    list-style: none;
  }
`;
