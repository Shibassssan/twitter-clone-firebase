import { FC, useCallback, useContext } from 'react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../Firebase';
import { UserContext, LoginContext } from '../App';

const Login: FC = () => {
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
    <div css={{ padding: '0px 15px', display: 'grid', rowGap: '35px' }}>
      <div>
        <h1>Twitter Clone</h1>
      </div>
      <section
        css={{
          padding: '0px',
          borderBottom: '1px solid #eee',
          display: 'grid',
          rowGap: '20px',
        }}
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
        css={{
          display: 'grid',
          rowGap: '15px',
          borderBottom: '1px solid #eee',
        }}
      >
        <div css={{ padding: '0' }}>
          <p>Googleでログイン</p>
        </div>
        <Button
          label={'Googleでログイン'}
          onClick={loginWithGoogle}
          type={'secondary'}
        />
        <div></div>
      </div>
      <div css={{ margin: '0' }}>
        <Button
          label={'アカウント新規登録'}
          onClick={loginWithGoogle}
          type={'other'}
        />
      </div>
    </div>
  );
};

