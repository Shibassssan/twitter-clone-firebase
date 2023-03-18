import { css } from '@emotion/react';
import { Color } from '~/src/Style';

export const LoginStyle = css`
  padding: 0 15px;
  display: grid;
  row-gap: 35px;
  margin-top: 15px;
  padding: 0 32px;

  & .emailLogin {
    padding: 0;
    display: grid;
    row-gap: 20px;
  }

  & .googleLogin {
    display: grid;
    row-gap: 15px;
  }

  & .registerLink {
    font-size: 14px;
    span {
      color: ${Color.Primary};
    }
  }
`;