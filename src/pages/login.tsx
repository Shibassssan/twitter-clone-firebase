/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Login as LoginContainer } from '../components/Login';

/** Loginページ */
const Login: FC = () => {
  return (
    <>
      {/* <Header />
      <main>
        <div></div>
      </main>
      <Footer /> */}
      <LoginContainer />
    </>
  );
};

export default Login;
