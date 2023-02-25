/** @jsxImportSource @emotion/react */
import { FC, useCallback, useState } from 'react';
import { footerStyle } from './style';

export const Footer: FC = () => {
  return (
    <footer css={footerStyle}>
      <div>
        <p>[Footer]</p>
        <p>[Twitter Clone]</p>
      </div>
      <nav>
        <h4>About</h4>
        <ul>
          <li>よくある質問</li>
          <li>利用規約</li>
          <li>プライバシーポリシー</li>
        </ul>
      </nav>
    </footer>
  );
}