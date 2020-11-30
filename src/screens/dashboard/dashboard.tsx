import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// local imports
import Overview from 'containers/overview';
import Achievements from 'containers/achievements';
import Users from 'containers/users';
import AboutMe from 'containers/about-me';
import MyCourses from 'containers/my-courses';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '2em',
    },
    gridItemOverView: {
      padding: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
      },
    },
    gridItem: {
      padding: theme.spacing(2),
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

  return (
    <Grid container={true} data-testid="dashboard-container">
      <Grid item={true} xs={12} sm={9} className={styles.gridItemOverView}>
        <Grid container={true}>
          <Overview />
          <Achievements />
          <AboutMe />
          <MyCourses heading="myCourses.heading" />
        </Grid>
      </Grid>
      <Grid item={true} xs={12} sm={3} className={styles.gridItem}>
        <Users />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
