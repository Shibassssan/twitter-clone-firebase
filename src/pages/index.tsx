/** @jsxImportSource @emotion/react */
import {
  FC,
  useCallback,
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Top as TopContainers } from '../components/containers/Top';
import { Login } from '../components/containers/Login';
import Cookies from 'js-cookie';
import { COOKIES } from '~/src/define';
import { UserContext } from './_app';


const Top:FC = () => {
  const { userInfo, setUserInfo} = useContext(UserContext);

  useEffect(() => {
    const hasMemberCookie = Cookies.get(COOKIES.MEMBER)
    if (!!hasMemberCookie) setUserInfo({ ...userInfo, isLogin: true })
  }, []);

  return (
    <>
      <Header />
      <main>
        <section>{userInfo.isLogin ? <TopContainers /> : <Login />}</section>
      </main>
      <Footer />
    </>
  );
};

export default Top;
