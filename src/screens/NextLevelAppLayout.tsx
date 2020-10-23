import React from 'react';

import './Layout.scss';

// Footer
import Divider from '@material-ui/core/Divider';
import Header from 'screens/headers/NextLevelHeader';

////////////////////////////// Local imports //////////////////////////////

// Components
import NextLevelContainer from 'containers/layouts/AppLayout';
import Footer from 'screens/footer';
import { Grid } from '@material-ui/core';
import LeftSweapableDrawer from 'containers/drawers/LeftSweapableDrawer';

interface INextLevelSecureLayoutProps {
  children: React.ReactNode;
  displayMenu: boolean;
}

function NextLevelSecureLayout({
  children,
  displayMenu,
}: INextLevelSecureLayoutProps) {
  const [showDrawer, setShowDrawer] = React.useState(false);

  const handleDrawerOpen = () => {
    setShowDrawer(true);
  };
  const handleDrawerClose = () => {
    setShowDrawer(false);
  };

  const list = () => <div />;

  return (
    <React.Fragment>
      <Header
        isSecure={true}
        displayMenu={displayMenu}
        handleDrawerOpen={handleDrawerOpen}
      />
      {displayMenu && (
        <Grid container={true} item={true} xs={12}>
          <Grid item={true} xl={4}>
            <div />
          </Grid>
          <Grid item={true} xs={12} xl={8}>
            {children}
          </Grid>
        </Grid>
      )}
      {!displayMenu && children}
      <LeftSweapableDrawer
        open={showDrawer}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}>
        {list()}
      </LeftSweapableDrawer>
    </React.Fragment>
  );
}

interface INextLevelNonSecureLayoutProps {
  children: React.ReactNode;
}

function NextLevelNonSecureLayout({
  children,
}: INextLevelNonSecureLayoutProps) {
  return (
    <React.Fragment>
      <Header isSecure={false} />
      {children}
    </React.Fragment>
  );
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
        <NextLevelNonSecureLayout>{children} </NextLevelNonSecureLayout>
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
