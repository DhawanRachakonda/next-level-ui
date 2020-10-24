import React from 'react';

import './SideMenu.scss';

import { withStyles } from '@material-ui/core/styles';

import BoxShadowCurveGrid from 'containers/grid/BoxShadowCurveGrid';

const SideMenu = withStyles((theme) => ({
  root: {
    padding: `0px ${theme.spacing(1)}px`,
  },
}))((props: any) => {
  return (
    <BoxShadowCurveGrid
      className="menu-grid"
      container={true}
      item={true}
      xs={12}
      {...props}
    />
  );
});

export default SideMenu;
