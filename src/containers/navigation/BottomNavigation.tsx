import { withStyles } from '@material-ui/core';
import React from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const NextLevelBottomNavigation = withStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: '0',
    width: '92%',
  },
}))((props: any) => <BottomNavigation {...props} />);

const NextLevelBottomNavigationAction = withStyles(
  (theme) => ({}),
)((props: any) => <BottomNavigationAction {...props} />);

export { NextLevelBottomNavigation, NextLevelBottomNavigationAction };
