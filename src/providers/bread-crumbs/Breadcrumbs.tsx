import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { withStyles, Theme } from '@material-ui/core/styles';

const BreadcrumbLink = withStyles((theme: Theme) => ({
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

const BreadcrumbText = withStyles((theme: Theme) => ({
  root: {
    fontSize: '1.875rem',
    color: '#2F3D4A',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
  },
}))(Typography);

interface Breadcrumb {
  link?: string;
  label: string;
}

interface BreadcrumbsProps {
  navLinks: Breadcrumb[];
}

function BreadcrumbsComponent({ navLinks }: BreadcrumbsProps) {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon />}
      aria-label="breadcrumb"
      data-testid="bread-crumbs">
      {navLinks.map((navLink) =>
        !navLink.link ? (
          <BreadcrumbText key={navLink.label} color="inherit">
            {navLink.label}
          </BreadcrumbText>
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
