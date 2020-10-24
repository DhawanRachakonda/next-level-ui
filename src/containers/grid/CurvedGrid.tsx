import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';

const CurvedGrid = withStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
}))((props: any) => {
  return <Grid {...props} />;
});

export default CurvedGrid;
