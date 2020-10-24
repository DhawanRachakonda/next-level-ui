import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import CurvedGrid from './CurvedGrid';

const BoxShadowCurveGrid = withStyles((theme) => ({
  root: {
    boxShadow: '0 0 5px #b3c1cd',
  },
}))((props: any) => {
  return <CurvedGrid {...props} />;
});

export default BoxShadowCurveGrid;
