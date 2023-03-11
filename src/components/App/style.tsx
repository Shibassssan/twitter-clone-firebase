import { css } from '@emotion/react';

export const style = css`
  .App {
    text-align: center;
  }

  header {
    height: 48px;
    display: flex;
    z-index: 3;
    box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
    align-items: center;
  }

  main {
    flex: auto;
    margin: 0 0 50px;
  }

  footer {
    margin-top: 20px;
    background: grey;
  }
`;

