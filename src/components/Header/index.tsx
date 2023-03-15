/** @jsxImportSource @emotion/react */
import { FC, useCallback, useState } from 'react';
import { headerStyle } from './style';
import { Logo as LogoIcon } from '../assets/icon/Logo';
import Image from 'next/image';
import avator from 'src/components/assets/images/avator.png';
import { SideMenu } from '../SideMenu';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header css={headerStyle}>
        {/* sideMenu */}
        <section >
          <div onClick={() => setIsOpen(true)}>
            <Image width={30} height={30} src={avator} alt={'ユーザー画像'} />
          </div>
        </section>
        {/* ロゴ */}
        <section>
          <div className='logo'>
            <LogoIcon />
          </div>
        </section>
      </header>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}