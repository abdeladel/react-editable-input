import * as React from 'react';
import {
  InputText,
  TextArea,
  Select,
  MultiSelect,
  Date,
  Color,
  Number,
  InputCheckbox,
  Radio,
  Switcher,
} from '.';
import { Type } from '../../types';

export const BaseInput = ({ type }: { type?: Type }) => {
  switch (type) {
    case 'text':
      return <InputText />;
    case 'number':
      return <Number />;
    case 'textarea':
      return <TextArea />;
    case 'select':
      return <Select />;
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
