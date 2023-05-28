/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { ButtonStyle, type BackgroundColorType } from './styles';

export const Button: FC<{
  label: string;
  bgType: BackgroundColorType;
  buttonType?: 'submit' | 'button'
  onClick?: () => void;
  disabled?: boolean;
}> = ({ label, onClick = () => {}, disabled = false, bgType, buttonType = 'submit' }) => {
  return (
    <button
      className="button"
      type={buttonType}
      onClick={onClick}
      disabled={disabled}
      css={ButtonStyle(bgType)}
    >
      <div className="label">
        <span>{label}</span>
      </div>
    </button>
  );
};
