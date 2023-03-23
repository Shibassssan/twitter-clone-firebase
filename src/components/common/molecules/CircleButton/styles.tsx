import { css } from '@emotion/react';
import { Color, Font } from '~/src/Style';

export const style = css`
  position: absolute;
  right: 19px;
  bottom: 19px;
  > a {
    display: flex;
    flex-grow: 1;
    height: 53px;
    width: 53px;
    background: ${Color.Primary};
    border-radius: 50%;
    box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 8px,
      rgba(101, 119, 134, 0.25) 0px 1px 3px 1px;
    & .iconWrap {
      font-size: ${Font.Size.Default}px;
      line-height: 19px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      svg {
        width: 24px;
        height: 24px;
        fill: ${Color.White};
      }
    }
  }
`;