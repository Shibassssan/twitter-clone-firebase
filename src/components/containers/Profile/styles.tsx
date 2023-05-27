import { css } from '@emotion/react';
import { Color, Font } from '~/src/Style';

export const style = css`
  & .header {
    height: 50px;
    padding: 0 15px;
    display: flex;

    & .arrow {
      min-width: 53px;
      min-height: 30px;
      display: flex;
      align-items: center;
      svg {
        width: 24px;
        height: 24px;
      }
    }

    &User {
      height: 100%;
      flex-shrink: 1;
      flex-grow: 1;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      h2 {
        line-height: 19px;
        font-size: 16px;
      }
      p {
        font-size: ${Font.Size.small1}px;
      }
    }
  }

  & .body {
    & .background {
      background: ${Color.Gray};
      width: 100%;
      height: 120px;
    }
    & .contents {
      display: flex;
      flex-direction: column;
      padding: 11px 15px 0;
      margin-bottom: 15px;
      &Header {
        display: flex;
        justify-content: space-between;

        & .userIcon {
          margin-top: -10%;
          img {
            border-radius: 50%;
          }
        }

        & .followButton {
          min-width: 102px;
          font-weight: ${Font.Weight.Bold};
        }
      }

      & .user {
        margin: 5px 0 10px;
        &Name {
          font-weight: ${Font.Weight.Bold};
        }
        &Id {
        }
      }

      &Text {
        font-size: ${Font.Size.Default}px;
        margin-bottom: 10px;
      }

      & .annotation {
        font-size: ${Font.Size.Default}px;
        color: ${Color.PreWhite};
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        svg {
          display: flex;
          align-items: center;
          margin-right: 5px;
          width: 14px;
          height: 14px;
        }
      }

      & .followInfo {
        display: flex;
        font-size: ${Font.Size.small2}px;
        > div:nth-child(1) {
          margin-right: 20px;
        }
        span {
          margin-right: 5px;
          font-weight: ${Font.Weight.Bold};
          color: ${Color.PreWhite};
        }
      }
    }

    nav {
      font-size: ${Font.Size.Default}px;
      border-bottom: 1px solid ${Color.Border};
      > ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        > li {
          list-style: none;
          display: flex;
          justify-content: center;
          > div {
            padding: 15px 0;
            &.active {
              border-bottom: 4px solid ${Color.Primary};
            }
          }
        }
      }
    }
  }
`;