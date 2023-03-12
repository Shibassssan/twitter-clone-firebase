import { css } from '@emotion/react';

export const footerStyle = css`
  padding: 30px;
  background: #0051e0;
  margin-top: 20px;
  background: grey;

  > div {
    font-weight: bold;
    color: #fff;
    text-align: center;
  }

  nav {
    display: block;
    margin: 0 auto;
    text-align: center;
  }

  h4 {
    margin-bottom: 10px;
    color: #fff;
  }

  ul {
    line-height: 1.7;
    > li {
      list-style: none;
      color: #fff;
      font-size: 13px;
    }
  }
`;
