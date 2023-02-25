/** @jsxImportSource @emotion/react */
import { FC, useCallback, useState } from 'react';
import { headerStyle, sideMenuStyle, searchStyle } from './style';

export const Header: FC = () => {
  return (
    <header css={headerStyle}>
      {/* sideMenu */}
      <section css={sideMenuStyle}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
      {/* ロゴ */}
      <section>
        <div>
          <h1>Twitter Clone</h1>
        </div>
      </section>
      {/* 検索ボタンへのリンク */}
      <section css={searchStyle}>
        <div>
          <svg viewBox="0 0 27 27" width="23" height="23">
            <path
              d="M11.56,3.43a8.26,8.26,0,0,0,0,16.52,8.18,8.18,0,0,0,5-1.72l4.7,4.7a1.1,1.1,0,0,0,1.56,0,1.09,1.09,0,0,0,0-1.55l0,0-4.7-4.7a8.18,8.18,0,0,0,1.72-5A8.28,8.28,0,0,0,11.56,3.43Zm0,2.2A6.06,6.06,0,1,1,5.5,11.69,6,6,0,0,1,11.56,5.63Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>
    </header>
  );
}