import React from 'react';

// Material UI components
import { Typography } from '@material-ui/core';

///////////////////////////// Local imports /////////////////////////////

// Components
import { AppContainer } from 'containers/layouts/AppLayout';
import AppBar from 'containers/headers/AppBar';

function ComponentLoader() {
  return (
    <AppContainer>
      <AppBar>
        <Typography variant="h3" component="h3">
          Loading
        </Typography>
      </AppBar>
    </AppContainer>
  );
}

export default ComponentLoader;
