/** @jsxImportSource @emotion/react */
import {
  FC,
  useCallback,
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';
import { style } from './style';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Top } from '../Top';
import { Login } from '../Login';

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


const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(defaultUserInfo);

  return (
    <>
      <head></head>
      <body css={style}>
        <Header />
        <main>
          <LoginContext.Provider value={{ isLogin, setIsLogin }}>
            <UserContext.Provider value={{ userInfo, setUserInfo }}>
              <section>{isLogin ? <Top /> : <Login />}</section>
            </UserContext.Provider>
          </LoginContext.Provider>
        </main>
        <Footer />
      </body>
    </>
  );
};

export default App;
