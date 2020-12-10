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
import TodayIcon from '@material-ui/icons/Today';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
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
    icon: <HomeIcon />,
    item: <MenuListItemText secondary="Dashboard" />,
  },
  {
    key: 'calendar',
    icon: <TodayIcon />,
    item: <MenuListItemText secondary="Calendar" />,
  },
  {
    key: 'courses',
    icon: <LiveTvIcon />,
    item: <MenuListItemText secondary="Courses" />,
  },
  {
    isActive: true,
    key: 'students',
    icon: <PersonIcon />,
    item: <MenuListItemText secondary="Students" />,
  },
  {
    key: 'educators',
    icon: <PersonIcon />,
    item: <MenuListItemText secondary="Educators" />,
  },
  {
    key: 'settings',
    icon: <SettingsIcon />,
    item: <MenuListItemText secondary="Settings" />,
  },
];

const defaultMenuOptions = [
  {
    key: 'dashboard',
    icon: <HomeIcon />,
    item: <MenuListItemText secondary="Dashboard" />,
  },
  {
    key: 'calendar',
    icon: <TodayIcon />,
    item: <MenuListItemText secondary="Calendar" />,
  },
  {
    key: 'courses',
    icon: <LiveTvIcon />,
    item: (
      <MenuListItemText secondary="Courses &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;>" />
    ),
  },
  {
    isActive: true,
    key: 'students',
    icon: <PersonIcon />,
    item: (
      <MenuListItemText secondary="Students &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;>" />
    ),
  },
  {
    key: 'educators',
    icon: <PersonIcon />,
    item: (
      <MenuListItemText secondary="Educators &nbsp; &nbsp; &nbsp;  &nbsp;>" />
    ),
  },
  {
    key: 'settings',
    icon: <SettingsIcon />,
    item: (
      <MenuListItemText secondary="Settings &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;>" />
    ),
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
