/** @jsxImportSource @emotion/react */
import { FC, useCallback, useState } from 'react';
import Link from 'next/link';
import { footerStyle } from './style';
import { Home as HomeIcon } from '~/src/assets/icon/Home';
import { Search as SearchIcon } from '~/src/assets/icon/Search';
import { Notice as NoticeIcon } from '~/src/assets/icon/Notice';
import { Mail as MailIcon } from '~/src/assets/icon/Mail';


export const Footer: FC = () => {
  return (
    <footer css={footerStyle}>
      <nav>
        {/* TODO リンクに置き換える */}
        <div>
          <Link href={'/'} >
            <HomeIcon />
          </Link>
        </div>
        <div>
          <Link href={'/explore'}>
            <SearchIcon />
          </Link>
        </div>
        <div>
          <Link href={'/notifications'} >
            <NoticeIcon />
          </Link>
        </div>
        <div>
          <Link href={'/messages'}>
            <MailIcon />
          </Link>
        </div>
      </nav>
    </footer>
  );
}