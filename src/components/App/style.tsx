import { css } from '@emotion/react';

export const style = css`
  .App {
    text-align: center;
  }

  main {
    flex: auto;
  }
`;

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


export const buttonStyle = css`
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

