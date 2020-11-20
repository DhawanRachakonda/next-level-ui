import React from 'react';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  ClickAwayListener,
  Grow,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Theme,
  useTheme,
} from '@material-ui/core';

import SearchBarComponent from 'containers/inputs/SearchBar';
import AppBar from 'containers/headers/AppBar';

interface ISecureHeaderProps {
  handleDrawerOpen: ReturnType<typeof Function>;
  displayMenu: boolean;
}

const baseStyles = makeStyles((theme: Theme) => ({
  profileOptions: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: '#def9fd',
    borderRadius: '1.5em',
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    '& ul > li': {
      fontWeight: 'normal',
    },
  },
}));

function SecureHeader({ handleDrawerOpen, displayMenu }: ISecureHeaderProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [openProfileOptions, setOpenProfileOptions] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpenProfileOptions((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpenProfileOptions(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpenProfileOptions(false);
    }
  }

  const classes = baseStyles();

  return (
    <React.Fragment>
      <AppBar
        displayDrawer={displayMenu && matches}
        handleDrawerOpen={handleDrawerOpen}>
        <SearchBarComponent />
        <div className={classes.profileOptions}>
          <Button
            ref={anchorRef}
            aria-controls={openProfileOptions ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}>
            Profile Options
          </Button>
          <Popper
            open={openProfileOptions}
            anchorEl={anchorRef.current}
            role={undefined}
            transition={true}
            disablePortal={true}>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}>
                <Paper className={classes.paper}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={openProfileOptions}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}>
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>Settings</MenuItem>
                      <MenuItem onClick={handleClose}>Signout</MenuItem>
                      <MenuItem onClick={handleClose}>Help</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </AppBar>
    </React.Fragment>
  );
}

export default SecureHeader;
