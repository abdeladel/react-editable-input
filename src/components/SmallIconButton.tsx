import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';

const SmallIconButton = ({
  title,
  handleClick,
  icon,
  isVisible,
}: {
  title: string;
  handleClick: Function;
  icon: React.ReactElement;
  isVisible?: boolean;
}) => {
  return (
    <Tooltip title={title}>
      <IconButton
        style={!isVisible ? { visibility: 'hidden' } : {}}
        size="small"
        onClick={() => handleClick()}
        aria-label={title}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};
SmallIconButton.defaultProps = {
  isVisible: true,
};
export default SmallIconButton;
