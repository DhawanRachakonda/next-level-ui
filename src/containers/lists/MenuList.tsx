import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const MenuList = withStyles((theme) => ({
  root: {
    height: '60vh',
    width: '100%',
    [theme.breakpoints.only('xs')]: {
      height: '30vh',
    },
  },
}))((props: any) => {
  return <List {...props} />;
});

const MenuListItem = withStyles((theme) => ({
  root: {
    margin: `${theme.spacing(1)}px 0px`,
    paddingLeft: `${theme.spacing(3)}px`,
  },
}))((props: any) => {
  return <MenuItem {...props} />;
});

const ActiveMenuListItem = withStyles((theme) => ({
  root: {
    boxShadow: '0 0 5px #b3c1cd',
    borderRadius: theme.spacing(1),
    paddingLeft: `${theme.spacing(2)}px`,
    margin: `0px ${theme.spacing(1)}px`,
  },
}))((props: any) => {
  return <MenuItem {...props} />;
});

const MenuListItemIcon = withStyles((theme) => ({
  root: {
    minWidth: '1.5vw',
    color: '#2F3D4A',
    [theme.breakpoints.down('lg')]: {
      marginRight: '0.5em',
    },
  },
}))((props: any) => {
  return <ListItemIcon {...props} />;
});

const MenuListItemBlueIcon = withStyles((theme) => ({
  root: {
    color: '#18A4E0',
  },
}))((props: any) => {
  return <MenuListItemIcon {...props} />;
});

const MenuListItemText = withStyles((theme) => ({
  root: {
    marginBottom: 'unset',
    cursor: 'pointer',
  },
}))((props: any) => {
  return <ListItemText {...props} />;
});

const MenuListItemBlueText = withStyles((theme) => ({
  root: {
    color: '#18A4E0',
  },
}))((props: any) => {
  return <MenuListItemText {...props} />;
});

export {
  MenuList,
  MenuListItem,
  MenuListItemIcon,
  MenuListItemText,
  MenuListItemBlueIcon,
  MenuListItemBlueText,
  ActiveMenuListItem,
};
