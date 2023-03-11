import { css } from '@emotion/react';

export const LoginStyle = css`
  padding: 0 15px;
  display: grid;
  row-gap: 35px;

  & .emailLogin {
    padding: 0;
    border-bottom: 1px solid #eee;
    display: grid;
    row-gap: 20px;
  }

  & .googleLogin {
    display: grid;
    row-gap: 15px;
    border-bottom: 1px solid #eee;
  }
`;