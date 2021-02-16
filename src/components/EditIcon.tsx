import * as React from 'react';
import { Edit } from '@material-ui/icons';
import { EditIconProps } from '../types';
import { Tooltip } from '@material-ui/core';

const EditIcon = (props: EditIconProps) => {
  const { isVisible } = props;
  return (
    <span style={{ fontSize: '12px', cursor: 'pointer' }}>
      <Tooltip title="Edit">
        <Edit
          fontSize="inherit"
          style={{ visibility: isVisible ? 'visible' : 'hidden' }}
          onClick={() => {
            console.log('icon clicked !!!');
          }}
        />
      </Tooltip>
    </span>
  );
};

export default EditIcon;
