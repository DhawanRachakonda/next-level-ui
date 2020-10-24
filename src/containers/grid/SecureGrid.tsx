import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import CurvedGrid from './CurvedGrid';

const SecureGrid = withStyles((theme) => ({
  root: {
    background:
      'linear-gradient(0deg, rgba(204,245,252,1) 0%, rgba(204,245,252,1) 10%, rgba(255,255,255,1) 50%)',
  },
}))((props: any) => {
  return <CurvedGrid container={true} item={true} xs={12} {...props} />;
});

export default SecureGrid;
