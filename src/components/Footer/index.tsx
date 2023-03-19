/** @jsxImportSource @emotion/react */
import { FC, useCallback, useState } from 'react';
import { footerStyle } from './style';
import { Home as HomeIcon } from '../../assets/icon/Home';
import { Search as SearchIcon } from '../../assets/icon/Search';
import { Notice as NoticeIcon } from '../../assets/icon/Notice';
import { Mail as MailIcon } from '../../assets/icon/Mail';


export const Footer: FC = () => {
  return (
    <footer css={footerStyle}>
      <nav>
        {/* TODO リンクに置き換える */}
        <div>
          <HomeIcon />
        </div>
        <div>
          <SearchIcon />
        </div>
        <div>
          <NoticeIcon />
        </div>
        <div>
          <MailIcon />
        </div>
      </nav>
    </footer>
  );
}