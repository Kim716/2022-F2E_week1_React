import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  // css reset
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Noto Sans', 'Noto Sans TC', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  // 設定共用變數
  :root {
    --purple-1: #B79CFF;
    --purple-2: #895CDD;
    --purple-3: #6029F5;
    --yellow-1: #FFE79E;
    --yellow-2: #DFB73F;
    --yellow-3: #F8CC46;
    --blue-1: #6DD2D6;
    --blue-2: #79EAEE;
    --pink-1: #F9D1FF;
    --pink-2: #E335FF;
    font-size: 16px;
  }
`;

const breakpoint = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '1320px',
};

export const device = {
  xs: `min-width: ${breakpoint.xs}`,
  sm: `min-width: ${breakpoint.sm}`,
  md: `min-width: ${breakpoint.md}`,
  lg: `min-width: ${breakpoint.lg}`,
};
