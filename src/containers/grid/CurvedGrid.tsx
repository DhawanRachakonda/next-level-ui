import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';

const CurvedGrid = withStyles((theme) => ({
  root: {
    borderRadius: '3em',
  },
}))((props: any) => {
  return <Grid {...props} />;
});

export default CurvedGrid;
