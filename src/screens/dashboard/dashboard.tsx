import React from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// local imports
import Overview from 'containers/overview';
import Achievements from 'containers/achievements';
import Users from 'containers/users';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '2em',
    },
    gridItemOverView: {
      padding: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
      },
    },
    gridItem: {
      padding: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
      },
    },
    selectEmpty: {
      '&:before': {
        display: 'none',
      },
    },
  }),
);

function Dashboard() {
  const styles = useStyles();

  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Grid container={true} data-testid="dashboard-container">
      <Grid item={true} xs={12} sm={8} className={styles.gridItemOverView}>
        <Grid container={true}>
          <Overview />
          <Achievements />
        </Grid>
      </Grid>
      <Grid item={true} xs={12} sm={4} className={styles.gridItem}>
        <Users />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
