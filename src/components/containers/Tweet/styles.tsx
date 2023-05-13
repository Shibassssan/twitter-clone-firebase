import { css } from '@emotion/react';
import { Color, Font } from '~/src/Style';

export const style = css`
  display: flex;
  flex-direction: column;

  & .header {
    height: 50px;
    padding: 0 15px;
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;

    & .backButton {
      display: flex;
      align-items: center;
      min-height: 34px;
      min-width: 34px;
    }

    & .tweetButton {
      display: flex;
      align-items: center;
      width: 100%;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }

  & .body {
    padding: 0 15px;
  }
`;

export const TweetStyle = css`
  display: flex;

  & .userImage {
    margin-right: 10px;
    padding-top: 4px;
    width: auto;

    > img {
      border-radius: 50%;
    }
  }

  & .tweetWrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 5px;

    & .selectPublic {
      display: flex;
      padding-bottom: 10px;

      & .labelWrap {
        color: ${Color.Primary};
        font-size: ${Font.Size.Default}px;

        & .label {
          display: flex;
          align-items: center;
          padding: 0 11px;
          border: 1px solid ${Color.Border2};
          border-radius: 99999px;
        }
      }
    }

    & .text {
      padding: 10px 0;

      > textarea {
        outline: none;
        appearance: none;
        border: none;
        resize: none;
        min-height: 114px;
        width: 100%;
        font-size: ${Font.Size.Big1}px;
      }
    }

    svg {
      width: 15px;
      height: 15px;
      fill: ${Color.Primary};
    }
  }

  & .commentTarget {
    display: grid;
    grid-template-columns: 21px auto;
    align-items: center;
    padding-bottom: 11px;
    border-bottom: 1px solid ${Color.Border};
    color: ${Color.Primary};
  }

  & .toolBar {
    display: flex;
    margin-top: 10px;
    > ul {
      display: inherit;

      > li {
        display: grid;
        min-width: 34px;
        min-height: 34px;
        place-content: center;
      }
    }

    svg {
      width: 19px;
      height: 19px;
    }
  }
`;