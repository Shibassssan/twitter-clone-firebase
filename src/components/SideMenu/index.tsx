/** @jsxImportSource @emotion/react */
import { FC, useCallback, useState } from 'react';
import { cx } from '@emotion/css';
import { AccordionIcon } from '../assets/icon/Accordion';
import avator from 'src/components/assets/images/avator.png';
import { style } from './styles';
import Image from 'next/image';
import { MoreIcon } from '../assets/icon/MoreIcon';

export const SideMenu: FC<{
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <div className={cx('sideMenu', { 'open': isOpen})} css={style}>
      <nav className={cx({ 'open': isOpen})} >
        <section className="navigationHeader">
          <div>
            <h2>アカウント情報</h2>
          </div>
          <button
            aria-label="メニュー開閉ボタン"
            className="menuIcon"
            onClick={() => setIsOpen(false)}
          >
            <span className="menuIconLine"></span>
            <span className="menuIconLine"></span>
            <span className="menuIconLine"></span>
          </button>
        </section>
        <section className="navigationBody">
          <div className="accountInfo">
            <div className="accountImage">
              {/* TODO ユーザー画像に切り替える */}
              <Image width={38} height={38} src={avator} alt={'ユーザー画像'} />
              <div className="otherAccounts">
                <Image
                  width={30}
                  height={30}
                  src={avator}
                  alt={'ユーザー画像'}
                />
                <div className="moreButton">
                  <MoreIcon />
                </div>
              </div>
            </div>
            <div className="loginUser">
              <div className="loginUserName">ほげ</div>
              <div className="loginUserId">@testhoge123</div>
            </div>
            <div className="followInfo">
              <div className="following">
                <span>100</span>フォロー中
              </div>
              <div className="follower">
                <span>100</span>フォロワー
              </div>
            </div>
          </div>
          <ul className="lists">
            <li className="">
              <div>プロフィール</div>
            </li>
            <li className="">
              <div>Twitter Blue</div>
            </li>
            <li className="">
              <div>トピック</div>
            </li>
            <li className="">
              <div>ブックマーク</div>
            </li>
            <li className="">
              <div>Twitter サークル</div>
            </li>
          </ul>
          <div className="accordion">
            <div className={cx('setting', {'open': isAccordionOpen })} onClick={() => setIsAccordionOpen((prev) => !prev)}>
              <div>設定とサポート</div>
              <AccordionIcon />
            </div>
            {isAccordionOpen && (
              <section className='settingDetail'>
                <div>設定とプライバシー</div>
                <div>ヘルプセンター</div>
                <div>データセーバー</div>
                <div>表示</div>
                <div>ログアウト</div>
              </section>
            )}
          </div>
        </section>
      </nav>
    </div>
  );
};