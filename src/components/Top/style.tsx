import { css } from '@emotion/react';
import { Color } from '~/src/Style';

export const TopStyle = css`
  & .timeline {
    display: flex;
    flex-direction: column;
    > h3 {
      text-align: center;
    }

    > div {
      margin-top: 15px;
      width: 100%;
      height: auto;
    }
  }
`;