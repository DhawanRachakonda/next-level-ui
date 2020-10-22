import { withStyles, Theme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const NavTypography = withStyles((theme: Theme) => ({
  root: {
    fontSize: '1.875rem',
    color: '#2F3D4A',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
  },
}))(Typography);

export default NavTypography;
