/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Login as LoginContainer } from '../components/containers/Login';

/** Loginページ */
const Login: FC = () => {
  return (
    <>
      <main>
        <LoginContainer />
      </main>
    </>
  );
};

export default Login;
