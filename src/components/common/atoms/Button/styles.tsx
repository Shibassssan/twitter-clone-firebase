import { css } from '@emotion/react';
import { Color } from '~/src/Style';

export type BackgroundColorType = 'primary' | 'secondary' | 'other';

const getBackgroundColor = (type: BackgroundColorType) => {
  switch (type) {
    case 'primary':
      return Color.Primary;
    case 'secondary':
    default:
      return Color.White
  }
}

const getColor = (type: BackgroundColorType) => {
  switch (type) {
    case 'primary':
      return Color.White
      case 'secondary':
      return Color.Primary;
    default:
      return Color.Black;
  }
};

const getBorder = (type: BackgroundColorType) => {
  switch (type) {
    case 'primary':
      return 'none';
    case 'secondary':
      return `2px solid ${Color.Primary}`;
    default:
      return `1px solid ${Color.Border2}`;
  }
};

export const ButtonStyle = (type: BackgroundColorType) => css`
  border: ${getBorder(type)};
  background-color: ${getBackgroundColor(type)};
  padding: 0;
  font-size: 14px;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  align-items: center;
  box-sizing: border-box;
  height: 40px;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    font-weight: 700;
    font-size: 14px;
    display: block;
    color: ${getColor(type)};
    text-align: center;
    width: 100%;
    cursor: pointer;
    appearance: none;
    outline: none;
    background: none;
    border: none;
  }
`;
