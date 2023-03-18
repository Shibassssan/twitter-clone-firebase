import { css } from '@emotion/react';
import { Color, Font } from '~/src/Style';

export const style = css`
  transition: 0.25s ease all;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 5;
  opacity: 0;
  visibility: hidden;
  &.open {
    visibility: visible;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.4);
  }

  > nav {
    transition: 0.25s ease transform;
    transform: translateX(-100%);
    min-width: 280px;
    max-width: 70%;
    height: 100vh;
    top: 0px;
    position: fixed;
    z-index: 10;
    background: #fff;
    box-shadow: rgb(101 119 134 / 20%) 0px 0px 8px,
      rgb(101 119 134 / 25%) 0px 1px 3px 1px;
    &.open {
      transform: translateX(0);
    }
  }

  & .navigationHeader {
    height: 50px;
    display: grid;
    grid-template-columns: 4fr 1fr;
    padding: 0 15px;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 16px;
    }
  }

  & .navigationBody {
    overflow-y: scroll;
    padding-bottom: 50px;
    height: calc(100svh - 50px);
  }

  & .menuIcon {
    min-width: 50px;
    outline: 0;
    appearance: none;
    border: none;
    background: #ffff;
    &Line {
      width: 20px;
      height: 2px;
      display: block;
      margin: 0 auto 2px;
      background-color: ${Color.Black};
    }
    &Line:nth-child(1) {
      transform: rotate(-45deg);
      transform-origin: 15px 3px;
    }
    &Line:nth-child(2) {
      opacity: 0;
    }
    &Line:nth-child(3) {
      transform: rotate(45deg);
      transform-origin: 15px -1px;
    }
  }

  & .accountInfo {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .accountImage {
      display: flex;
      justify-content: space-between;
    }

    & .otherAccounts {
      display: flex;
      > img {
        margin-right: 4px;
      }

      & .moreButton {
        border-bottom-left-radius: 9999px;
        border-bottom-right-radius: 9999px;
        border-top-left-radius: 9999px;
        border-top-right-radius: 9999px;
        align-items: center;
        display: flex;
        border: 1px solid ${Color.Border};
        width: 30px;
        height: 30px;
        justify-content: center;
        svg {
          width: 17px;
          height: 17px;
        }
      }
    }
  }

  & .loginUser {
    margin-top: 8px;
    &Name {
      font-weight: ${Font.Weight.Bold};
      font-size: 16px;
    }
    &Id {
      font-size: 14px;
      color: ${Color.White2};
    }
  }

  & .followInfo {
    margin-top: 5px;
    display: flex;
    color: ${Color.White2};
    font-size: 13px;
    span {
      font-weight: ${Font.Weight.Bold};
      color: ${Color.Black2};
      padding-right: 5px;
    }

    & .following {
      margin-right: 20px;
    }
  }

  & .lists {
    border-bottom: 1px solid ${Color.Border};
    > li {
      padding: 15px;
      font-size: 19px;
      font-weight: ${Font.Weight.Bold};
    }
  }

  & .setting {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: ${Font.Weight.Bold};
    svg {
      display: block;
      width: 24px;
      height: 24px;
      transition: 0.2s ease transform;
    }

    &.open {
      svg {
        transform: rotate(180deg);
      }
    }

    &Detail {
      > div {
        padding: 11px;
        font-size: ${Font.Size.Default}px;
      }
    }
  }
`;