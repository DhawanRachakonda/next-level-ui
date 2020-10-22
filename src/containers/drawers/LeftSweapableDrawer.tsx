import React from 'react';

// styles
import { withStyles } from '@material-ui/core/styles';

// Material UI components
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const LeftSweapableDrawer = withStyles((theme) => ({}))((props: any) => {
  return <SwipeableDrawer anchor="left" {...props} />;
});

export default LeftSweapableDrawer;
