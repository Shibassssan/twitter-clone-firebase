import { FC, useState, useCallback } from 'react';
import { inputStyle } from './styles';

export const Input: FC<{
  label: string;
}> = ({ label }) => {
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
