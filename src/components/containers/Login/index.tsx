/** @jsxImportSource @emotion/react */
import { FC, useCallback, useContext, useState } from "react";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { Input } from "~/src/components/common/atoms/Input";
import { Button } from '~/src/components/common/atoms/Button';
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import app, { provider } from "~/src/Firebase";
import { UserContext } from "~/src/pages/_app";
import { LoginStyle } from "./styles";
import Cookie from 'js-cookie';
import Link from 'next/link';
import { useForm } from "~/src/hooks/useForm";
import Cookies from 'js-cookie';
import { COOKIES } from '~/src/define';
import { useRouter } from 'next/router';

const auth = getAuth(app);

export const Login: FC = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

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
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.idToken;
      if(!token) throw new Error('認証に失敗しました!');
      const { displayName, photoURL, uid } = result.user;
      if (displayName)
        setUserInfo({
          userId: uid,
          name: displayName,
          photoUrl: photoURL || "",
          isLogin: true,
        });
      Cookie.set(COOKIES.MEMBER, token);
    } catch (error) {
      console.error("error", error);
      throw new Error('認証に失敗しました!')
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
      console.error('error', error);
      throw new Error('メールアドレスによるログインが失敗しました!');
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
