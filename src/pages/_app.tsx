/** @jsxImportSource @emotion/react */
import { NextPage } from 'next';
import { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import app from '~/src/Firebase';
import { getAuth } from 'firebase/auth';
import { global } from '../styles/global';
import '../Firebase';
import { Global } from '@emotion/react';

const auth = getAuth(app);

const defaultUserInfo = {
  userId: '',
  name: '',
  photoUrl: '',
  isLogin: false,
};

type UserContextType = {
  userInfo: {
    userId: string;
    name: string;
    photoUrl: string;
    isLogin: boolean;
  };
  setUserInfo: (userInfo: UserContextType['userInfo']) => void;
};

export const UserContext = createContext<UserContextType>({
  userInfo: defaultUserInfo,
  setUserInfo: ({}) => {},
});

const MyApp:NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [userInfo, setUserInfo] = useState(defaultUserInfo);

  const getUserInfo = useCallback(() => {
    const user = auth.currentUser;
    if (!user) return;
    setUserInfo({
      userId: user.uid,
      name: user.displayName || '',
      photoUrl: user.photoURL || '',
      isLogin: true,
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        getUserInfo();
      }, 1000);
    }
  }, []);


  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Global styles={global} />
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
};

export default MyApp;
