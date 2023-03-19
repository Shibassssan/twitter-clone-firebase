/** @jsxImportSource @emotion/react */
import { FC, useState, useCallback } from 'react';
import { inputStyle } from './styles';
import { cx } from '@emotion/css';
import { AlertIcon } from '~/src/assets/icon/AlertIcon';
import { CheckIcon } from '~/src/assets/icon/CheckIcon';

export const Input: FC<{
  label: string;
  value: string;
  onChangeCallback: (value:string) => void
  isError?: boolean;
  errorMessages?: string[]
}> = ({ label, value, onChangeCallback, isError = false, errorMessages = [] }) => {
  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = useCallback(() => setIsFocus(true), []);
  const handleBlur = useCallback(() => setIsFocus(false), []);

  return (
    <div css={inputStyle}>
      <div className="title">{label}</div>
      <div
        className={cx('field', {
          'add-focus': isFocus || !!value,
          'add-error': isError,
          'add-check': !isError && !!value
        })}
      >
        <input
          type="text"
          autoComplete="off"
          onBlur={() => handleBlur()}
          onFocus={() => handleFocus()}
          value={value}
          onChange={(e) => onChangeCallback(e.target.value)}
        />
        <label className='placeholder'>{label}</label>
        {isError && (
          <label className="icon alert">
            <AlertIcon />
          </label>
        )}
        {!isError && !!value && (
          <label className="icon check">
            <CheckIcon />
          </label>
        )}
      </div>
      <ul className="errorMessages">
        {errorMessages.map((message, index) => (
          <li key={index}>※ {message}</li>
        ))}
      </ul>
    </div>
  );
};
