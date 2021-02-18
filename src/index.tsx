import * as React from 'react';
import { Label } from './components';
import { BaseInput } from './components/input';
import { defaultProps } from './defaultProps';
import { useEvent } from './hooks';
import { EditableInputProps } from './types';

export default function EditableInput(props: EditableInputProps) {
  const { text, style, editType, type } = props;
  const [editing, setEditing] = React.useState(false);
  const startEditing = () => {
    setEditing(true);
  };
  const { eventProps, editIconVisible } = useEvent(editType, startEditing);
  if (editing) return <BaseInput type={type} />;
  return (
    <Label
      text={text}
      editType={editType}
      style={style}
      eventProps={eventProps}
      editIconVisible={editIconVisible}
      handleIconClicked={startEditing}
    />
  );
}

EditableInput.defaultProps = defaultProps;
