import React from 'react';
import { EButtonType, IButton } from '../UI.module';

export const Button: React.FC<IButton> = ({
  text,
  handleClick,
  isDisabled = false,
  type = EButtonType.button,
}) => (
  <button
    className={'button'}
    disabled={isDisabled}
    onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleClick(text)}
    type={type}
  >
    {text}
  </button>
);
