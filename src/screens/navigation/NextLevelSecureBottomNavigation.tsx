import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListIcon from '@material-ui/icons/List';

import {
  NextLevelBottomNavigation,
  NextLevelBottomNavigationAction,
} from 'containers/navigation/BottomNavigation';
import { Drawer } from '@material-ui/core';
import SideMenuScreen, { mobileMenuOptions } from 'screens/menu/SideMenu';

interface IMenuListDrawer {
  onClose: any;
}

function MenuListDrawer({ onClose }: IMenuListDrawer) {
  return (
    <Drawer anchor={'bottom'} open={true} onClose={onClose}>
      <SideMenuScreen menuList={mobileMenuOptions} />
    </Drawer>
  );
}

function NextLevelSecureBottomNavigation() {
  const [value, setValue] = React.useState<any>(0);
  const [isMenuListOpen, setMenuListOpen] = React.useState(false);
  const onOpen = () => {
    setMenuListOpen(true);
  };
  const onClose = () => {
    setMenuListOpen(false);
    if (value === 'menu') {
      setValue(0);
    }
  };
  return (
    <React.Fragment>
      {isMenuListOpen && <MenuListDrawer onClose={onClose} />}
      <NextLevelBottomNavigation
        value={value}
        onChange={(event: any, newValue: any) => {
          setValue(newValue);
          if (newValue === 'menu') {
            onOpen();
          } else if (isMenuListOpen) {
            onClose();
          }
        }}
        showLabels={true}>
        <NextLevelBottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
        />
        <NextLevelBottomNavigationAction
          label="Menu"
          value="menu"
          icon={<ListIcon />}
        />
        <NextLevelBottomNavigationAction
          label="Settings"
          value="setting"
          icon={<SettingsIcon />}
        />
        <NextLevelBottomNavigationAction
          label="Logout"
          value="logout"
          icon={<ExitToAppIcon />}
        />
      </NextLevelBottomNavigation>
    </React.Fragment>
  );
}

export default NextLevelSecureBottomNavigation;
