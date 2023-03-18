import {
  createContext,
  useState,
  useContext,
} from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { global } from '../styles/global';
import '../Firebase';
import { Global } from '@emotion/react';

const defaultUserInfo = {
  userId: null,
  name: '',
  photoUrl: '',
  isLogin: false,
};

type UserContextType = {
  userInfo: typeof defaultUserInfo;
  setUserInfo: (userInfo: UserContextType['userInfo']) => void;
};

export const UserContext = createContext<UserContextType>({
  userInfo: defaultUserInfo,
  setUserInfo: ({}) => {},
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [userInfo, setUserInfo] = useState(defaultUserInfo);

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
