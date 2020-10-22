import React from 'react';

// Material UI styles
import { withStyles } from '@material-ui/styles';

// Material UI components
import { Typography } from '@material-ui/core';

const PageNotFoundComponent = withStyles((theme) => ({
  root: {
    height: '50vh',
    textAlign: 'center',
  },
}))((props) => <Typography variant="h3" component="h3" {...props} />);

function PageNotFoundScreen() {
  return <PageNotFoundComponent>Page Not Found</PageNotFoundComponent>;
}

export default PageNotFoundScreen;
