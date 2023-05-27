/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { footerStyle, linkButtonStickyStyle } from './style';
import { Home as HomeIcon } from '~/src/assets/icon/Home';
import { HomeActive as HomeActiveIcon } from '~/src/assets/icon/HomeActive';
import { Search as SearchIcon } from '~/src/assets/icon/Search';
import { SearchActive as SearchActiveIcon } from '~/src/assets/icon/SearchActive';
import { Notice as NoticeIcon } from '~/src/assets/icon/Notice';
import { NoticeActive as NoticeActiveIcon } from '~/src/assets/icon/NoticeActive';
import { Mail as MailIcon } from '~/src/assets/icon/Mail';
import { MessageActive as MessageActiveIcon } from '~/src/assets/icon/MessageActive';
import { CircleButton } from '../common/molecules/CircleButton';

const Page = {
  Top: '/',
  Search: '/explore',
  Notice: '/notifications',
  Message: '/messages'
} as const;


export const Footer: FC = () => {
  const router = useRouter();
  return (
    <>
      <div className="linkButtonSticky" css={linkButtonStickyStyle}>
        <CircleButton />
      </div>
      <footer css={footerStyle}>
        <nav>
          {/* TODO リンクに置き換える */}
          <div>
            <Link href={Page.Top}>
              {router.pathname === Page.Top ? <HomeActiveIcon /> : <HomeIcon />}
            </Link>
          </div>
          <div>
            <Link href={Page.Search}>
              {router.pathname === Page.Search ? (
                <SearchActiveIcon />
              ) : (
                <SearchIcon />
              )}
            </Link>
          </div>
          <div>
            <Link href={Page.Notice}>
              {router.pathname === Page.Notice ? (
                <NoticeActiveIcon />
              ) : (
                <NoticeIcon />
              )}
            </Link>
          </div>
          <div>
            <Link href={Page.Message}>
              {router.pathname === Page.Message ? (
                <MessageActiveIcon />
              ) : (
                <MailIcon />
              )}
            </Link>
          </div>
        </nav>
      </footer>
    </>
  );
}