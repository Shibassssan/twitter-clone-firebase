import { css } from '@emotion/react';

export const ButtonStyle = css`
  border: none;
  background-color: #0051e0;
  padding: 0;
  font-size: 14px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  align-items: center;
  box-sizing: border-box;

  & > button {
    font-weight: 700;
    font-size: 14px;
    display: block;
    color: #fff;
    text-align: center;
    width: 100%;
    padding: 12px 0 12px;
    cursor: pointer;
    appearance: none;
    outline: none;
    background: none;
    border: none;
  }
`;
