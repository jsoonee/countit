import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 맑은 고딕, malgun gothic, AppleGothicNeoSD, Apple SD 산돌고딕 Neo, Microsoft NeoGothic,  Droid sans, sans-serif;
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
