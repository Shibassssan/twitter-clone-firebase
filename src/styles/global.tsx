import { css } from '@emotion/react';

export const global = css`
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
  }

  #__next {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
`;
