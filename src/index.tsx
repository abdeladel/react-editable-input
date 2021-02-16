import * as React from 'react';
import { Label } from './components';
import { defaultProps } from './defaultProps';
// import EditIcon from './EditIcon';
import { useEvent } from './hooks';
import { EditableInputProps } from './types';

export default function EditableInput(props: EditableInputProps) {
  const { text, style, editType } = props;

  const { eventProps, editIconVisible } = useEvent(editType);

  // const [editing, setEditing] = React.useState(false);
  // const handleStartEditing = () => {};
  return (
    <Label
      text={text}
      editType={editType}
      style={style}
      eventProps={eventProps}
      editIconVisible={editIconVisible}
      // edit={type => handleStartEditing()}
    />
  );
}

EditableInput.defaultProps = defaultProps;
