import { css } from '@emotion/react';

export const headerStyle = css`
  height: 48px;
  display: flex;
  z-index: 3;
  box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
  align-items: center;
  justify-content: space-between;
`;

export const sideMenuStyle = css`
  position: relative;
  height: inherit;
  align-items: center;
  display: flex;
  > div {
    width: 60px;
    padding: 25px 0;
    > span {
      display: block;
      width: 20px;
      height: 2px;
      margin: 0 auto 2px;
      background: #000;
      transition: all 0.2s ease-in-out 0s;
    }
  }
`;

export const searchStyle = css`
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
  > div {
    position: relative;
    top: 5px;
  }
`;
