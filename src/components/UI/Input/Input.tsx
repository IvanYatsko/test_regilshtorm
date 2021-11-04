import React from 'react';

import { IInput } from '../UI.module';

export const Input: React.FC<IInput> = ({ type, placeholder, value, setInputValue }) => {
  return (
    <input
      className=''
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)}
    />
  );
};
