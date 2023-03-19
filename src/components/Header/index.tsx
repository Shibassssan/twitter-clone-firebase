/** @jsxImportSource @emotion/react */
import { FC, useCallback, useContext, useState } from 'react';
import { headerStyle } from './style';
import { Logo as LogoIcon } from '../../assets/icon/Logo';
import Image from 'next/image';
import avator from '~/src/assets/images/avator.png';
import { SideMenu } from '../containers/SideMenu';
import { UserContext } from '~/src/pages/_app';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo } = useContext(UserContext)

  return (
    <>
      <header css={headerStyle}>
        {/* sideMenu */}
        <section >
          <div onClick={() => setIsOpen(true)}>
            <Image width={30} height={30} src={userInfo.photoUrl || avator} alt={'ユーザー画像'} />
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