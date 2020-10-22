import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

const BreadcrumbLink = withStyles((theme) => ({
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      fontSize: '1.875rem',
      color: '#2F3D4A',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.875rem',
      },
    },
  }),
);

interface Breadcrumb {
  link?: string;
  label: string;
}

interface BreadcrumbsProps {
  navLinks: Breadcrumb[];
}

function BreadcrumbsComponent({ navLinks }: BreadcrumbsProps) {
  const styles = useStyles();
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon />}
      aria-label="breadcrumb"
      data-testid="bread-crumbs">
      {navLinks.map((navLink) =>
        !navLink.link ? (
          <Typography
            key={navLink.label}
            color="inherit"
            classes={{ root: styles.typography }}>
            {navLink.label}
          </Typography>
        ) : (
          <BreadcrumbLink
            key={navLink.label}
            color="inherit"
            href={navLink.link}>
            {navLink.label}
          </BreadcrumbLink>
        ),
      )}
    </Breadcrumbs>
  );
}

export default BreadcrumbsComponent;
