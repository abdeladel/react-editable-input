import {
  InputAdornment,
  MenuItem,
  Select as MuiSelect,
} from '@material-ui/core';
import { Check, Close } from '@material-ui/icons';
import React, { useState } from 'react';
import { SmallIconButton } from '..';
import { Value } from '../../types';
import styled from 'styled-components';

const FexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Select = ({
  value,
  handleChange,
  list,
}: {
  value?: Value;
  handleChange: Function;
  list: [{ label: string; value: string | number }];
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  return (
    <FexDiv>
      <MuiSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currentValue}
        onChange={({ target: { value: v } }: { target: { value: any } }) =>
          setCurrentValue(v)
        }
      >
        {list.map(e => (
          <MenuItem value={e.value}>{e.label}</MenuItem>
        ))}
      </MuiSelect>
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
    </FexDiv>
  );
};

export default Select;
