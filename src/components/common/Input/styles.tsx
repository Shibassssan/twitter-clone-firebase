import { css } from '@emotion/react';
import { Color } from '../../../Style';

export const inputStyle = css`
  position: relative;

  & .title {
    margin-bottom: 10px;
  }

  & .field {
    position: relative;

    &.add-error {
      border-bottom: 2px solid ${Color.Error};
      padding-bottom: 0px;
    }

    &.add-check {
      border-bottom: 2px solid ${Color.Check};
      padding-bottom: 0px;
    }

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

    & .placeholder {
      position: absolute;
      padding: 11px 10px;
      top: 0px;
      left: 0px;
      transition: all 0.2s ease 0s;
    }

    &.add-focus {
      & .placeholder {
        height: auto;
        padding: 2px 5px 1px;
        font-size: 11px;
        margin: 0px;
        background: #fff;
        top: -8px;
        left: 10px;
      }
    }

  }
  & .icon {
    position: absolute;
    padding: 13px 10px;
    top: 1px;
    right: 0px;
    left: auto;

    &.alert {
      fill: ${Color.Error};
    }

    &.check {
      fill: ${Color.Check}
    }
  }

  & .errorMessages {
    margin-top: 10px;
    font-size: 10px;
    color: ${Color.Error};

    > li + li {
      margin-top: 5px;
    }
  }
`;
