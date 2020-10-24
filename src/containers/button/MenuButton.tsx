import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const MenuButton = withStyles((theme) => ({}))((props: any) => {
  return (
    <IconButton
      aria-label="open drawer"
      onClick={props.handleDrawerOpen}
      {...props}>
      <MenuIcon />
    </IconButton>
  );
});

export default MenuButton;
