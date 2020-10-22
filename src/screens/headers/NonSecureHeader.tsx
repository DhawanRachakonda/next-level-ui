import React from 'react';
import { useHistory } from 'react-router-dom';

// Material UI styles
import { makeStyles } from '@material-ui/core/styles';

// Material UI Icons
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

// Material UI Components
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

////////////////////////////// Local imports //////////////////////////////

// styles
import './header.scss';

// components
import AppBar from 'containers/headers/AppBar';
import SearchBarComponent from 'containers/inputs/SearchBar';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

const menuClasses = makeStyles((theme) => ({
  moreIconButton: {
    paddingRight: '0px',
    [theme.breakpoints.up('sm')]: {
      paddingRight: 'inherit',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    marginLeft: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

function NextLevelMenu() {
  const styles = menuClasses();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const history = useHistory();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const redirectToLoginPage = () => {
    history.push('login');
  };

  const redirectToSignUpPage = () => {
    history.push('sign-up');
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted={true}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <Button
          onClick={redirectToLoginPage}
          variant="contained"
          color="secondary">
          <FormattedMessage id="nonSecureHeader.login.btn" />
        </Button>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Button
          onClick={redirectToSignUpPage}
          variant="contained"
          color="primary">
          <FormattedMessage id="nonSecureHeader.signUp.btn" />
        </Button>
      </MenuItem>
    </Menu>
  );
  return (
    <React.Fragment>
      <div className={styles.sectionDesktop}>
        <Button
          onClick={redirectToLoginPage}
          variant="contained"
          color="secondary">
          <FormattedMessage id="nonSecureHeader.login.btn" />
        </Button>

        <Button
          onClick={redirectToSignUpPage}
          variant="contained"
          color="primary">
          <FormattedMessage id="nonSecureHeader.signUp.btn" />
        </Button>
      </div>
      <div className={styles.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          classes={{ root: styles.moreIconButton }}
          color="inherit">
          <MoreIcon />
        </IconButton>
      </div>

      {renderMobileMenu}
      {renderMenu}
    </React.Fragment>
  );
}

function Header() {
  const headerClasses = useStyles();

  return (
    <React.Fragment>
      <AppBar>
        <SearchBarComponent />
        <div className={headerClasses.grow} />
        <NextLevelMenu />
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
