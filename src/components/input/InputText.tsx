import { Input, InputAdornment } from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';
import React, { useState } from 'react';
import { SmallIconButton } from '..';
import { Type, Value } from '../../types';

const InputText = ({
  type,
  value,
  handleChange,
}: {
  value?: Value;
  type?: Type;
  handleChange: Function;
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  return (
    <Input
      type={type}
      autoFocus
      onBlur={() => {}}
      value={currentValue}
      onChange={({ target: { value: v } }) => setCurrentValue(v)}
      endAdornment={
        <InputAdornment position="end">
          <SmallIconButton
            title="Save"
            handleClick={() => handleChange(currentValue)}
            icon={<Check />}
          />
          <SmallIconButton
            title="Cancel"
            handleClick={() => handleChange(value)}
            icon={<Close />}
          />
        </InputAdornment>
      }
    />
  );
};

export default InputText;
