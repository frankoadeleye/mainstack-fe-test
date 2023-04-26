import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *::before,
  *::after,
  * {
    box-sizing: border-box;
    font-family: 'Outfit';
  }

  html,
  body {
    margin: 0;
    padding: 0; 
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }

  a:link{
    text-decoration: none;
    color: #777777;
  }

`;

export default GlobalStyles;
