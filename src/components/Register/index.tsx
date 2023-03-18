/** @jsxImportSource @emotion/react */
import { FC, useCallback, useContext, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { Input } from '../common/atoms/Input';
import { Button } from '../common/atoms/Button';
import {
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import app from '../../Firebase';

import { style } from './styles';
import { useForm } from '~/src/hooks/useForm';
import Cookies from 'js-cookie';
import { COOKIES } from '~/src/define';
import { useRouter } from 'next/router';

const auth = getAuth(app);

export const RegisterContainer: FC = () => {
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

  /** 新規登録処理実行 */
  const onRegister = useCallback(async() => {
    if (isEmailError || isPasswordError) return;
    console.log('email', email);
    console.log('password', password);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const token = await result.user.getIdToken();
      if (!token) throw new Error();
      Cookies.set(COOKIES.MEMBER, token);
      // topに遷移
      router.push('/')
    } catch (error) {
      console.error('error', error)
    };
  }, [email, password]);

  return (
    <div css={style}>
      <div>
        <h1>新規登録</h1>
      </div>
      <section className="emailRegister">
        <div>
          <Input
            label={'メールアドレス'}
            value={email}
            onChangeCallback={onEmailChange}
            isError={isEmailError}
            errorMessages={emailErrors}
          />
        </div>
        <div>
          <Input
            label={'パスワード'}
            value={password}
            onChangeCallback={onPasswordChange}
            isError={isPasswordError}
            errorMessages={passwordErrors}
          />
        </div>
        <div>
          <Button label={'登録'} onClick={onRegister} type={'primary'} />
        </div>
      </section>
    </div>
  );
};
