/** @jsxImportSource @emotion/react */
import { FC, useCallback, useState } from 'react';
import Link from 'next/link';
import { footerStyle, linkButtonStickyStyle } from './style';
import { Home as HomeIcon } from '~/src/assets/icon/Home';
import { Search as SearchIcon } from '~/src/assets/icon/Search';
import { Notice as NoticeIcon } from '~/src/assets/icon/Notice';
import { Mail as MailIcon } from '~/src/assets/icon/Mail';
import { CircleButton } from '../common/molecules/CircleButton';


export const Footer: FC = () => {
  return (
    <>
      <div className="linkButtonSticky" css={linkButtonStickyStyle}>
        <CircleButton />
      </div>
      <footer css={footerStyle}>
        <nav>
          {/* TODO リンクに置き換える */}
          <div>
            <Link href={'/'}>
              <HomeIcon />
            </Link>
          </div>
          <div>
            <Link href={'/explore'}>
              <SearchIcon />
            </Link>
          </div>
          <div>
            <Link href={'/notifications'}>
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
    </>
  );
}