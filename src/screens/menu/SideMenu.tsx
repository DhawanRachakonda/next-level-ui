import SideMenu from 'containers/card/SideMenu';
import React from 'react';

import {
  MenuList,
  MenuListItem,
  MenuListItemIcon,
  MenuListItemText,
  MenuListItemBlueIcon,
  MenuListItemBlueText,
  ActiveMenuListItem,
} from 'containers/lists/MenuList';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';

type NextLevelMenuItem = {
  key: string;
  icon: React.ReactNode;
  item: React.ReactNode;
  isBlue?: boolean;
  isActive?: boolean;
};

interface ISideMenuOptionsProps {
  menuList: NextLevelMenuItem[];
}

function SideMenuOptions({ menuList }: ISideMenuOptionsProps) {
  const history = useHistory();
  const onClick = (routeName: string) => {
    history.push(routeName);
  };
  return (
    <MenuList>
      {menuList.map((menu) => {
        if (menu.isActive) {
          return (
            <ActiveMenuListItem
              key={menu.key}
              onClick={() => onClick(menu.key)}>
              {menu.isBlue ? (
                <MenuListItemBlueIcon>{menu.icon}</MenuListItemBlueIcon>
              ) : (
                <MenuListItemIcon>{menu.icon}</MenuListItemIcon>
              )}
              {menu.item}
            </ActiveMenuListItem>
          );
        }
        return (
          <MenuListItem key={menu.key} onClick={() => onClick(menu.key)}>
            {menu.isBlue ? (
              <MenuListItemBlueIcon>{menu.icon}</MenuListItemBlueIcon>
            ) : (
              <MenuListItemIcon>{menu.icon}</MenuListItemIcon>
            )}
            {menu.item}
          </MenuListItem>
        );
      })}
    </MenuList>
  );
}

export const mobileMenuOptions = [
  {
    key: 'dashboard',
    icon: <DashboardIcon />,
    item: <MenuListItemText secondary="Dashboard" />,
  },
  {
    key: 'live-classes',
    isBlue: true,
    icon: <PlayCircleFilledIcon fontSize="large" />,
    item: <MenuListItemBlueText primary="Live" />,
  },
  {
    isActive: true,
    key: 'videos',
    icon: <OndemandVideoIcon />,
    item: <MenuListItemText secondary="Videos" />,
  },
];

const defaultMenuOptions = [
  {
    key: 'home',
    icon: <HomeIcon />,
    item: <MenuListItemText secondary="Home" />,
  },
  {
    key: 'dashboard',
    icon: <DashboardIcon />,
    item: <MenuListItemText secondary="Dashboard" />,
  },
  {
    key: 'live-classes',
    isBlue: true,
    icon: <PlayCircleFilledIcon fontSize="large" />,
    item: <MenuListItemBlueText primary="Live" />,
  },
  {
    isActive: true,
    key: 'videos',
    icon: <OndemandVideoIcon />,
    item: <MenuListItemText secondary="Videos" />,
  },
  {
    key: 'settings',
    icon: <SettingsIcon />,
    item: <MenuListItemText secondary="Settings" />,
  },
  {
    key: 'logout',
    icon: <ExitToAppIcon />,
    item: <MenuListItemText secondary="Logout" />,
  },
];

interface ISideMenuScreenProps {
  menuList?: NextLevelMenuItem[];
}

function SideMenuScreen({
  menuList = defaultMenuOptions,
}: ISideMenuScreenProps) {
  return (
    <SideMenu>
      <MenuList>
        <SideMenuOptions menuList={menuList} />
      </MenuList>
    </SideMenu>
  );
}

export default SideMenuScreen;
