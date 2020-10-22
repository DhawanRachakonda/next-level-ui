import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import AppBar from 'containers/headers/AppBar';
import { useTheme } from '@material-ui/core';
import SearchBarComponent from 'containers/inputs/SearchBar';

interface ISecureHeaderProps {
  handleDrawerOpen: ReturnType<typeof Function>;
  displayMenu: boolean;
}

function SecureHeader({ handleDrawerOpen, displayMenu }: ISecureHeaderProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <React.Fragment>
      <AppBar
        displayDrawer={displayMenu && matches}
        handleDrawerOpen={handleDrawerOpen}>
        <SearchBarComponent />
      </AppBar>
    </React.Fragment>
  );
}

export default SecureHeader;
