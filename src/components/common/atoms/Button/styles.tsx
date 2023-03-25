import { css } from '@emotion/react';
import { Color } from '~/src/Style';

export type BackgroundColorType = 'primary' | 'secondary' | 'other';

const getBackgroundColor = (type: BackgroundColorType) => {
  switch (type) {
    case 'primary':
      return Color.Primary;
    case 'secondary':
      return Color.Black;
    default:
      return Color.White
  }
}

const getColor = (type: BackgroundColorType) => {
  switch (type) {
    case 'primary':
    case 'secondary':
      return Color.White;
    default:
      return Color.Black;
  }
};

const getBorder = (type: BackgroundColorType) => {
  switch (type) {
    case 'primary':
    case 'secondary':
      return 'none';
      // return `2px solid ${Color.Primary}`;
    default:
      return `1px solid ${Color.Border2}`;
  }
};

export const ButtonStyle = (type: BackgroundColorType) => css`
  border: ${getBorder(type)};
  background-color: ${getBackgroundColor(type)};
  padding: 0;
  font-size: 14px;
  position: relative;
  border-radius: 20px;
  align-items: center;
  box-sizing: border-box;
  min-height: 30px;
  cursor: pointer;
  appearance: none;
  overflow: hidden;
  outline: none;
  width: 100%;
  display: flex;
  justify-content:center;

  & .label {
    line-height: 19px;
    color: ${getColor(type)};
    padding: 0 10px;
    min-height: inherit;
    display: flex;
    align-items: center;
  }
`;
