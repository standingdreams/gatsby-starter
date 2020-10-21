// Global Styles
// Note: 62.5% = 10px

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    font-size: 62.5%;
    height: 100%;
    margin: 0;
  }

  body {
    font-size: 2rem;
    margin: 0;
  }

  p {
    font-weight: 300;
    margin: 1.2em 0 0;

    &:first-child {
      margin-top: 0;
    }
  }

  b,
  strong {
    font-weight: 700;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  figure {
    margin: 0;
  }

  input,
  textarea,
  select {
    appearance: none;
    background: transparent;
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    outline: none;
    padding: 0;
    -webkit-tap-highlight-color: rgba(128, 127, 128, 0);
  }

  nav {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      margin: 0;
      padding: 0;
    }
  }
`

export default GlobalStyles
