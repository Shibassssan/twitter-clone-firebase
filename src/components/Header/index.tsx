/** @jsxImportSource @emotion/react */
import { FC, useCallback, useState } from 'react';
import { headerStyle } from './style';
import { Logo as LogoIcon } from '../assets/icon/Logo';
import Image from 'next/image';
import avator from 'src/components/assets/images/avator.png';

export const Header: FC = () => {
  return (
    <header css={headerStyle}>
      {/* sideMenu */}
      <section >
        <Image width={30} height={30} src={avator} alt={'ユーザー画像'} />
      </section>
      {/* ロゴ */}
      <section>
        <div className='logo'>
          <LogoIcon />
        </div>
      </section>
    </header>
  );
}