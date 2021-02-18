import { useState } from 'react';

const useEvent = (editType: string | undefined, startEditing: Function) => {
  const [editIconVisible, setEditIconVisible] = useState(false);

  let timer: any;
  let delay = 200;
  let prevent = false;

  const doClickAction = () => {
    console.log('clicked');
    startEditing();
  };
  const doDoubleClickAction = () => {
    console.log('Double Clicked');
    startEditing();
  };
  const handleClick = () => {
    timer = setTimeout(() => {
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
  return { eventProps, editIconVisible };
};

export default useEvent;
