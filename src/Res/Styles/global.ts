import { createGlobalStyle } from 'styled-components';

import { smoothAppearance } from '../../Res/Styles/keyframes';

export const GlobalStyle = createGlobalStyle`
  /* ___reset style___ */
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  button {
    font-family: 'Montserrat Alternates', sans-serif;
    border: none;
    background-color: transparent;

    &:hover {
      outline: none;
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  img,
  video {
    height: auto;
    max-width: 100%;
  }

  a {
    font-style: normal;
    text-decoration: none;

    &:active {
      color: inherit;
    }

    &:link {
      color: inherit;
    }

    &:visited {
      color: inherit;
    }
  }
  /* ___user style___ */
  body {
    font-family: 'Montserrat Alternates', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  }

  .main_container {
    max-width: 1064px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .loader_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${smoothAppearance} .2s ease-out;
    .circle-1 {
      border-top-color: #892CDC !important;
    }
    .circle-2 {
      border-bottom-color: #892CDC !important;
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px; 
    background-color: #E0E7E9;
  }
::-webkit-scrollbar-thumb {
    background-color: #354649;
  }
`