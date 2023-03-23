import { css } from '@emotion/react';
import { Color } from '~/src/Style';


export const footerStyle = css`
  position: relative;
  > nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    min-height: 52px;
    border-top: 1px solid ${Color.Border};
    box-shadow: 0px -1px ${Color.Border};
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      > svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;


export const linkButtonStickyStyle = css`
  position: sticky;
`;