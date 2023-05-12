import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body, #root, .App {
    height: 100%;
  }

  .App {
    width: 100%;
    display: flex;
  }

  input:focus {
    outline: none;
  }

  svg {
    display: block;
  }
`;

export default GlobalStyle;
