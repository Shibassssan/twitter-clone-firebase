/** @jsxImportSource @emotion/react */
import { FC, useCallback, useContext } from 'react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../Firebase';
import { UserContext, LoginContext } from '../App';
import { LoginStyle } from './styles';

export const Login: FC = () => {
  const { setUserInfo } = useContext(UserContext);
  const { setIsLogin } = useContext(LoginContext);

  const loginWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      setIsLogin(true);
      const { displayName, photoURL } = user;
      if (displayName)
        setUserInfo({
          name: displayName,
          avator: photoURL || '',
        });
    } catch (error) {
      console.error('error', error);
    }
  };

  const login = useCallback(async () => {}, []);
  return (
    <div css={LoginStyle}>
      <div>
        <h1>Twitter Clone</h1>
      </div>
      <section
        className='emailLogin'
      >
        <div>
          <Input label={'メールアドレス'} />
        </div>
        <div>
          <Input label={'パスワード'} />
        </div>
        <div>
          <Button label={'ログイン'} onClick={login} type={'primary'} />
        </div>
        <div></div>
      </section>
      <div
        className='googleLogin'
      >
        <div>
          <p>Googleでログイン</p>
        </div>
        <Button
          label={'Googleでログイン'}
          onClick={loginWithGoogle}
          type={'secondary'}
        />
        <div></div>
      </div>
      <div>
        <Button
          label={'アカウント新規登録'}
          onClick={() => {}}
          type={'other'}
        />
      </div>
    </div>
  );
};
