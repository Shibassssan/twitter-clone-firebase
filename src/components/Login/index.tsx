/** @jsxImportSource @emotion/react */
import { FC, useCallback, useContext, useState } from "react";
import { getAuth } from 'firebase/auth';
import { Input } from "../common/atoms/Input";
import { Button } from "../common/atoms/Button";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import app, { provider } from "../../Firebase";
import { UserContext, LoginContext } from "../../pages";
import { LoginStyle } from "./styles";
import Cookie from 'js-cookie';
import Link from 'next/link';
import { useForm } from "~/src/hooks/useForm";
import Cookies from 'js-cookie';
import { COOKIES } from '~/src/define';
import { useRouter } from 'next/router';

const auth = getAuth(app);

export const Login: FC = () => {
  const { setUserInfo } = useContext(UserContext);
  const { setIsLogin } = useContext(LoginContext);

  const {
    email,
    isEmailError,
    emailErrors,
    password,
    isPasswordError,
    passwordErrors,
    onEmailChange,
    onPasswordChange,
  } = useForm();

  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      setIsLogin(true);
      const { displayName, photoURL, getIdToken } = user;
      if (displayName)
        setUserInfo({
          name: displayName,
          avator: photoURL || "",
        });
      const token = await getIdToken();
      Cookie.set(COOKIES.MEMBER, token);
    } catch (error) {
      console.error("error", error);
    }
  };

  /** メールアドレスによるログイン処理 */
  const login = useCallback(async () => {
    if (isEmailError || isPasswordError) return;
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const token = await result.user.getIdToken();
      if (!token) throw new Error();
      Cookies.set(COOKIES.MEMBER, token);
      // topに遷移
      router.push('/');
    } catch (error) {
      console.error('error', error)
    }
  }, [email, password]);

  return (
    <div css={LoginStyle}>
      <div>
        <h1>Twitterにログイン</h1>
      </div>
      <section className="emailLogin">
        <div>
          <Input
            label={"メールアドレス"}
            value={email}
            onChangeCallback={onEmailChange}
            isError={isEmailError}
            errorMessages={emailErrors}
          />
        </div>
        <div>
          <Input
            label={"パスワード"}
            value={password}
            onChangeCallback={onPasswordChange}
            isError={isPasswordError}
            errorMessages={passwordErrors}
          />
        </div>
        <div>
          <Button label={"ログイン"} onClick={login} type={"primary"} />
        </div>
        <div></div>
      </section>
      <div className="googleLogin">
        <Button
          label={"Googleでログイン"}
          onClick={loginWithGoogle}
          type={"other"}
        />
      </div>
      <div className="passwordReset">
        <Button
          label={"パスワードを忘れた場合はこちら"}
          onClick={() => {}}
          type={"other"}
        />
      </div>
      <div className="registerLink">
        <div>
          アカウントをお持ちでない場合は
          <span>
            <Link href='/register'>
              登録
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
