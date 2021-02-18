import React from 'react';
import { EditIcon } from '.';
import { defaultProps } from '../defaultProps';

const Label = ({
  text,
  editType,
  style,
  eventProps,
  editIconVisible,
  handleIconClicked,
}: {
  text: string;
  editType: 'dbclick' | 'click' | 'hover' | undefined;
  style: React.CSSProperties | undefined;
  eventProps: any;
  editIconVisible: boolean;
  handleIconClicked: Function;
}) => {
  return (
    <button
      style={{
        ...defaultProps.style,
        ...style,
        cursor: editIconVisible ? 'initial' : 'pointer',
      }}
      {...eventProps}
    >
      {text}
      {editType === 'hover' && (
        <EditIcon
          onIconClicked={handleIconClicked}
          isVisible={editIconVisible}
        />
      )}
    </button>
  );
};

export default Label;
