import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  },
    *::before,
    *::after {
    box-sizing: border-box;
  }
  html, body {
    min-width: 280px;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    height: 100%;
    background: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.white}
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    margin: 0 auto;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

export { GlobalStyle };
