import React, { useEffect } from 'react';

import './Layout.scss';

// Material UI components
import Divider from '@material-ui/core/Divider';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';

////////////////////////////// Local imports //////////////////////////////

// Components
import Header from 'screens/headers/NextLevelHeader';
import NextLevelContainer from 'containers/layouts/AppLayout';
import Footer from 'screens/footer';
import LeftSweapableDrawer from 'containers/drawers/LeftSweapableDrawer';
import SecureGrid from 'containers/grid/SecureGrid';

import SideMenuScreen from 'screens/menu/SideMenu';
import NextLevelSecureBottomNavigation from './navigation/NextLevelSecureBottomNavigation';
import { shallowEqual, useSelector } from 'react-redux';
import { NextLevelAppState } from 'store/reducers';

interface INextLevelSecureLayoutProps {
  children: React.ReactNode;
  displayMenu: boolean;
}

function NextLevelSecureLayout({
  children,
  displayMenu,
}: INextLevelSecureLayoutProps) {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const matchesSmallScreen = useMediaQuery(theme.breakpoints.only('xs'));

  const handleDrawerOpen = () => {
    setShowDrawer(true);
  };
  const handleDrawerClose = () => {
    setShowDrawer(false);
  };

  return (
    <React.Fragment>
      <Header
        isSecure={true}
        displayMenu={displayMenu}
        handleDrawerOpen={handleDrawerOpen}
      />
      {displayMenu && (
        <SecureGrid container={true} item={true} xs={12}>
          <Grid item={true} lg={2}>
            {!matches && <SideMenuScreen />}
          </Grid>
          <Grid item={true} xs={12} lg={10}>
            {children}
          </Grid>
        </SecureGrid>
      )}
      {!displayMenu && children}
      <LeftSweapableDrawer
        open={showDrawer}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}>
        <SideMenuScreen />
      </LeftSweapableDrawer>
      {matchesSmallScreen && <NextLevelSecureBottomNavigation />}
    </React.Fragment>
  );
}

interface INextLevelNonSecureLayoutProps {
  children: React.ReactNode;
}

const loginEventsChannel = new BroadcastChannel('login-events-channel');

function NextLevelNonSecureLayout({
  children,
}: INextLevelNonSecureLayoutProps) {
  const userDetails = useSelector(
    (state: NextLevelAppState) => state.user.userDetails,
    shallowEqual,
  );
  useEffect(() => {
    if (!userDetails || !userDetails.user_name) {
      loginEventsChannel.postMessage('login');
    }
  }, [userDetails]);
  if (userDetails?.user_name) {
    return (
      <React.Fragment>
        <Header isSecure={false} />
        {children}
      </React.Fragment>
    );
  } else {
    return <></>;
  }
}

interface IAppLayoutProps {
  children: React.ReactNode;
  isSecure: boolean;
  displayMenu?: boolean;
}

function NextLevelAppLayout({
  children,
  isSecure = false,
  displayMenu = false,
}: IAppLayoutProps) {
  return (
    <NextLevelContainer>
      {!isSecure ? (
        <NextLevelNonSecureLayout>{children}</NextLevelNonSecureLayout>
      ) : (
        <NextLevelSecureLayout displayMenu={displayMenu}>
          {children}
        </NextLevelSecureLayout>
      )}
      <Divider />
      <Footer />
    </NextLevelContainer>
  );
}

export default NextLevelAppLayout;
