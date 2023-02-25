/** @jsxImportSource @emotion/react */
import { FC, useCallback, useState } from "react";
import { cx } from '@emotion/css';
import {
  style,
  buttonStyle,
  inputStyle,
} from './style';
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Top } from "../Top";

export const Input: FC<{
  label: string
}> = ({
  label
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = useCallback(() => setIsFocus(true), []);
  const handleBlur = useCallback(() => setIsFocus(false), []);

  return (
    <div className={cx({ 'add-focus': isFocus })} css={inputStyle}>
      <input
        type="text"
        autoComplete="off"
        onBlur={() => handleBlur()}
        onFocus={() => handleFocus()}
      />
      <label>{label}</label>
    </div>
  );
};

export const Button: FC<{
  label: string;
}> = ({ label }) => {
  return (
    <div css={buttonStyle}>
      <button className="button" type="submit">
        <span>{label}</span>
      </button>
    </div>
  );
};


const Login: FC = () => {
  return (
    <>
      <div css={{ margin: '20px 10px' }}>
        <Input label={'メールアドレス'} />
      </div>
      <div css={{ margin: '10px' }}>
        <Input label={'パスワード'} />
      </div>
      <div css={{ margin: '10px' }}>
        <Button label={'ログイン'} />
      </div>
    </>
  );
}

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <head></head>
      <body css={style}>
        <Header />
        <main>
          <div css={{ marginTop: '50px' }}></div>
          <section>
            {isLogin ? (
              <Top />
            ) : (
              <Login />
            )}
          </section>
        </main>
        <Footer />
      </body>
    </>
  );
};

export default App;
