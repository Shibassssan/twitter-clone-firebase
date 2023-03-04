import { css } from '@emotion/react';

export const inputStyle = css`
  position: relative;

  > input {
    width: 100%;
    appearance: none;
    border-radius: 0px;
    outline: 0px;
    box-sizing: border-box;
    font-size: 13px;
    margin-bottom: 0px;
    padding: 15px 10px;
    border: 1px solid rgb(200, 203, 204);
    height: 48px;
  }

  > label {
    position: absolute;
    padding: 11px 10px;
    top: 0px;
    left: 0px;
    transition: all 0.2s ease 0s;
  }

  &.add-focus {
    > label {
      height: auto;
      padding: 2px 5px 1px;
      font-size: 11px;
      margin: 0px;
      background: #fff;
      top: -8px;
      left: 10px;
    }
  }
`;
