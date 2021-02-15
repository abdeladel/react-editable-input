import * as React from 'react';
import { defaultProps } from './defaultProps';
import EditIcon from './EditIcon';
import { EditableInputProps } from './types';

export default function EditableInput(props: EditableInputProps) {
  const { text, style, editType } = props;
  let timer: any;
  let delay = 200;
  let prevent = false;
  const [editIconVisible, setEditIconVisible] = React.useState(false);

  const doClickAction = () => {
    console.log(' click');
  };
  const doDoubleClickAction = () => {
    console.log('Double Click');
  };
  const handleClick = () => {
    timer = setTimeout(function() {
      if (!prevent) {
        doClickAction();
      }
      prevent = false;
    }, delay);
  };
  const handleDoubleClick = () => {
    clearTimeout(timer);
    prevent = true;
    doDoubleClickAction();
  };
  let eventProps = {};
  switch (editType) {
    case 'click':
      eventProps = {
        onClick: handleClick,
      };
      break;
    case 'hover':
      eventProps = {
        onMouseEnter: () => setEditIconVisible(true),
        onMouseLeave: () => setEditIconVisible(false),
      };
      break;

    default:
      eventProps = {
        onDoubleClick: handleDoubleClick,
      };
      break;
  }

  return (
    <button style={{ ...defaultProps.style, ...style }} {...eventProps}>
      {text}
      {editType === 'hover' && <EditIcon isVisible={editIconVisible} />}
    </button>
  );
}

EditableInput.defaultProps = defaultProps;
