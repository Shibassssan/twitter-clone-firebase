import { FC, useCallback, useContext, useState } from 'react';
import { Regex, ERROR_MESSAGE } from '../define';

/** @TODO 処理を分割・共通化する */
export const useForm = () => {
  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [emailErrors, setEmailErrors] = useState<string[]>([]);

  const [password, setPassword] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const checkInputEmail = useCallback((inputEmail: string) => {
    if (!inputEmail) {
      setEmailErrors((prev) => [...prev, ERROR_MESSAGE.REQUIRE]);
    }
    if (!Regex.emailFormat.test(inputEmail)) {
      setEmailErrors((prev) => [...prev, ERROR_MESSAGE.EMAIL_FORMAT_ERROR]);
    }
  }, []);

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

  const checkInputPassword = useCallback(
    (inputPassword: string) => {
      if (!inputPassword)
        setPasswordErrors((prev) => [...prev, ERROR_MESSAGE.REQUIRE]);
      if (!Regex.containsAlphanumeric.test(inputPassword)) {
        setPasswordErrors((prev) => [...prev, ERROR_MESSAGE.INVALID_CHARACTER]);
      }
      if (inputPassword.length < 7)
        setPasswordErrors((prev) => [...prev, ERROR_MESSAGE.MINIMUM_LENGTH]);
      if (!Regex.containsAlphabet.test(inputPassword))
        setPasswordErrors((prev) => [...prev, ERROR_MESSAGE.ALPHABET_REQUIRED]);
      if (!Regex.containsNumber.test(inputPassword))
        setPasswordErrors((prev) => [...prev, ERROR_MESSAGE.DIGIT_REQUIRED]);
      if (!Regex.containsLowerUpper.test(inputPassword))
        setPasswordErrors((prev) => [...prev, ERROR_MESSAGE.CASE_REQUIRED]);
      if (!Regex.containsSymbol.test(inputPassword))
        setPasswordErrors((prev) => [...prev, ERROR_MESSAGE.SYMBOL_REQUIRED]);
    },
    [passwordErrors]
  );

  const onPasswordChange = useCallback(
    (inputPassword: string) => {
      setPasswordErrors([]);
      checkInputPassword(inputPassword);
      setIsPasswordError(!!passwordErrors.length);
      setPassword(inputPassword);
    },
    [passwordErrors]
  );

  return {
    email,
    isEmailError,
    emailErrors,
    password,
    isPasswordError,
    passwordErrors,
    onEmailChange,
    onPasswordChange,
  };
};
