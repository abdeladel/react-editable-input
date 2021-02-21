import { Edit } from '@material-ui/icons';
import React from 'react';
import { SmallIconButton } from '.';
import { defaultProps } from '../defaultProps';
import { EditType } from '../types';

const Label = ({
  text,
  editType,
  style,
  eventProps,
  editIconVisible,
  handleIconClicked,
}: {
  text: string;
  editType?: EditType;
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
        <SmallIconButton
          title="Edit"
          isVisible={editIconVisible}
          handleClick={handleIconClicked}
          icon={<Edit />}
        />
      )}
    </button>
  );
};

export default Label;
