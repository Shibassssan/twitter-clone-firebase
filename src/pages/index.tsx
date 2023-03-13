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
import { Top as TopContainers } from '../components/Top';
import { Login } from '../components/Login';
import Cookies from 'js-cookie';
import { COOKIES } from '~/src/define';

type LoginContextType = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
};

export const LoginContext = createContext<LoginContextType>({
  isLogin: false,
  setIsLogin: (isLogin: boolean) => {},
});

const defaultUserInfo = {
  name: '',
  avator: ''
}

type UserContextType = {
  userInfo: typeof defaultUserInfo;
  setUserInfo: (userInfo: UserContextType['userInfo']) => void;
};

export const UserContext = createContext<UserContextType>({
  userInfo: {
    name: '',
    avator: ''
  },
  setUserInfo: ({}) => {},
});


const Top:FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(defaultUserInfo);

  useEffect(() => {
    const hasMemberCookie = Cookies.get(COOKIES.MEMBER)
    if (!!hasMemberCookie) setIsLogin(true);
  }, []);

  return (
    <>
      <Header />
      <main>
        <LoginContext.Provider value={{ isLogin, setIsLogin }}>
          <UserContext.Provider value={{ userInfo, setUserInfo }}>
            <section>{isLogin ? <TopContainers /> : <Login />}</section>
          </UserContext.Provider>
        </LoginContext.Provider>
      </main>
      <Footer />
    </>
  );
};

export default Top;
