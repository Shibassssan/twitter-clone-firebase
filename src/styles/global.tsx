import { css } from '@emotion/react';

export const global = css`
  @font-face {
    font-family: 'Segoe UI', Meiryo, system-ui, -apple-system,
      BlinkMacSystemFont, sans-serif;
    src: url('../../public/fonts/Chirp-Regular.80fda27a.woff2') format('woff');
  }
  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #__next {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
`;
