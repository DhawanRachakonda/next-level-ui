import { withStyles, Theme } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';

const NavLink = withStyles((theme: Theme) => ({
  root: {
    fontSize: '1.875rem',
    color: '#B3C1CD',
    '&:hover': {
      textDecoration: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
  },
}))(Link);

export default NavLink;
