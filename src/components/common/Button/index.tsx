import { FC } from 'react';
import { ButtonStyle } from './styles';

export const Button: FC<{
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}> = ({ label, onClick = () => {}, disabled = false }) => {
  // console.log('disabled', disabled);
  return (
    <div css={ButtonStyle}>
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
