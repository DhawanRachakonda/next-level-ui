import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import CurvedGrid from './CurvedGrid';

const SecureGrid = withStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    background:
      'linear-gradient(0deg, rgba(204,245,252,1) 0%, rgba(204,245,252,1) 10%, rgba(255,255,255,1) 50%)',
    minHeight: '58vh',
  },
}))((props: any) => {
  return <CurvedGrid container={true} item={true} xs={12} {...props} />;
});

export default SecureGrid;
