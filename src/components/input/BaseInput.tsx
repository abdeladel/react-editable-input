import * as React from 'react';
import {
  InputText,
  TextArea,
  Select,
  MultiSelect,
  Date,
  Color,
  InputCheckbox,
  Radio,
  Switcher,
} from '.';
import { Type, Value } from '../../types';

export const BaseInput = ({
  type,
  value,
  onFinishEditing,
  list,
}: {
  type?: Type;
  value?: Value;
  onFinishEditing: Function;
  list?: [{ label: string; value: string | number }];
}) => {
  switch (type) {
    case 'text':
    case 'number':
    case 'email':
    case 'password':
      return (
        <InputText type={type} value={value} handleChange={onFinishEditing} />
      );
    case 'textarea':
      return <TextArea />;
    case 'select':
      return (
        <Select
          list={list || [{ value: '', label: '' }]}
          value={value}
          handleChange={onFinishEditing}
        />
      );
    case 'multiSelect':
      return <MultiSelect />;
    case 'date':
      return <Date />;
    case 'checkbox':
      return <InputCheckbox />;
    case 'radio':
      return <Radio />;
    case 'switcher':
      return <Switcher />;
    case 'color':
      return <Color />;

    default:
      return <small>No type provided</small>;
  }
};

export default BaseInput;
