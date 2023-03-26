import { css } from '@emotion/react';
import { Color } from '~/src/Style';

export const headerStyle = css`
  height: 50px;
  z-index: 3;
  box-shadow: 0 4px 2px -2px ${Color.Border};
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  align-items: center;
  padding: 0 15px;

  > section {
    height: inherit;
    display: flex;
    align-items: center;

    > div {
      height: inherit;
      display: flex;
      align-items: center;

      img {
        border-radius: 50%;
      }
    }
  }

  & .logo {
    height: inherit;
    display: flex;
    align-items: center;
    > svg {
      fill: ${Color.Primary};
      width: 30px;
      height: 30px;
    }
  }
`;
