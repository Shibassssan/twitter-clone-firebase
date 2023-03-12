/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { ButtonStyle, type BackgroundColorType } from './styles';

export const Button: FC<{
  label: string;
  type: BackgroundColorType;
  onClick?: () => void;
  disabled?: boolean;
}> = ({ label, onClick = () => {}, disabled = false, type }) => {
  return (
    <div css={ButtonStyle(type)}>
      <button
        className="button"
        type="submit"
        onClick={onClick}
        disabled={disabled}
      >
        <span>{label}</span>
      </button>
    </div>
  );
};
