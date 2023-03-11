/** @jsxImportSource @emotion/react */
import { FC, useCallback, useContext, useState } from "react";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../../Firebase";
import { UserContext, LoginContext } from "../App";
import { LoginStyle } from "./styles";
import { Regex, ERROR_MESSAGE } from "../../define";

export const Login: FC = () => {
  const { setUserInfo } = useContext(UserContext);
  const { setIsLogin } = useContext(LoginContext);

  /** @TODO ここら辺の処理をStoreに移行・集結させる */

  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [emailErrors, setEmailErrors] = useState<string[]>([]);

  const [password, setPassword] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const checkInputEmail = useCallback(
    (inputEmail: string) => {
      if (!inputEmail) {
        setEmailErrors((prev) => [...prev, ERROR_MESSAGE.REQUIRE]);
      }
      if (!Regex.emailFormat.test(inputEmail)) {
        setEmailErrors((prev) => [...prev, ERROR_MESSAGE.EMAIL_FORMAT_ERROR]);
      }
    },
    []
  );

  const onEmailChange = useCallback(
    (inputEmail: string) => {
      // reset
      setEmailErrors([]);
      checkInputEmail(inputEmail);
      setIsEmailError(!!emailErrors.length);
      setEmail(inputEmail);
    },
    [emailErrors]
  );

  const checkInputPassword = useCallback((inputPassword: string) => {
    if (!inputPassword) setPasswordErrors((prev) => [...prev, ERROR_MESSAGE.REQUIRE]);
    if (!Regex.containsAlphanumeric.test(inputPassword)) {
      setPasswordErrors((prev) => [...prev, ERROR_MESSAGE.INVALID_CHARACTER]);
    }
    if (inputPassword.length < 7) setPasswordErrors((prev) => [...prev, ERROR_MESSAGE.MINIMUM_LENGTH]);
    if (!Regex.containsAlphabet.test(inputPassword)) setPasswordErrors((prev) => [...prev, ERROR_MESSAGE.ALPHABET_REQUIRED]);
    if (!Regex.containsNumber.test(inputPassword)) setPasswordErrors((prev) => [...prev, ERROR_MESSAGE.DIGIT_REQUIRED]);
    if (!Regex.containsLowerUpper.test(inputPassword))
      setPasswordErrors((prev) => [...prev, ERROR_MESSAGE.CASE_REQUIRED]);
    if (!Regex.containsSymbol.test(inputPassword))
      setPasswordErrors((prev) => [...prev, ERROR_MESSAGE.SYMBOL_REQUIRED]);

  }, [passwordErrors])

  const onPasswordChange = useCallback((inputPassword: string) => {
    setPasswordErrors([]);
    checkInputPassword(inputPassword);
    setIsPasswordError(!!passwordErrors.length);
    setPassword(inputPassword);
  }, [passwordErrors]);

  const loginWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      setIsLogin(true);
      const { displayName, photoURL } = user;
      if (displayName)
        setUserInfo({
          name: displayName,
          avator: photoURL || "",
        });
    } catch (error) {
      console.error("error", error);
    }
  };

  const login = useCallback(async () => {
    if (isEmailError || isPasswordError) return;
    // console.log('email', email);
    // console.log('password', password);
  }, [email, password]);

  return (
    <div css={LoginStyle}>
      <div>
        <h1>Twitter Clone</h1>
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
        <div>
          <p>Googleでログイン</p>
        </div>
        <Button
          label={"Googleでログイン"}
          onClick={loginWithGoogle}
          type={"secondary"}
        />
        <div></div>
      </div>
      <div>
        <Button
          label={"アカウント新規登録"}
          onClick={() => {}}
          type={"other"}
        />
      </div>
    </div>
  );
};
