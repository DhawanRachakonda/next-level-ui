import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import BreadcrumbText from 'containers/typography/NavTypography';
import BreadcrumbLink from 'containers/links/NavLink';

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
