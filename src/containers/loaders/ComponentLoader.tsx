import React from 'react';

// Material UI components
import { Typography } from '@material-ui/core';

///////////////////////////// Local imports /////////////////////////////

// JS
import AppUtil from 'util/appUtil';

// Components
import NextLevelContainer from 'containers/layouts/AppLayout';
import AppBar from 'containers/headers/AppBar';

function ComponentLoader() {
  return (
    <NextLevelContainer>
      <AppBar />
      <Typography className="site-loader">
        <img src={AppUtil.getLoaderGIF()} alt="Site Loader" />
      </Typography>
    </NextLevelContainer>
  );
}

export default ComponentLoader;
