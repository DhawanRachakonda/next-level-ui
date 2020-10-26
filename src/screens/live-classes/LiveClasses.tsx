import React from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

// local imports
import CourseCard from 'containers/cards/CourseCard';
import DivTypography from 'containers/typography/DivTypography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridLink: {
      color: '#18A4E0',
      padding: theme.spacing(2),
    },
    gridHeader: {
      color: '#18A4E0',
    },
    gridLinkArrow: {
      position: 'relative',
      top: '12px',
    },
    cardRoot: {
      padding: theme.spacing(2),
    },
  }),
);

function SubLink({ linkText }: any) {
  const classes = useStyles();
  return (
    <DivTypography className={classes.gridLink} variant="subtitle1">
      <Link className={classes.gridHeader}>
        {` ${linkText} `}
        <ArrowRightIcon fontSize="large" className={classes.gridLinkArrow} />
      </Link>
    </DivTypography>
  );
}

const LiveCouse = {
  imgUrl: 'http://localhost:3000/assets/images/medical-abortion-2x_b@2x.png',
  courseName: 'Live course 1',
  author: 'Dr. ashok chak',
  category: 'BioChemistry',
  isLive: true,
};

function DashboardLiveVideos() {
  const classes = useStyles();
  return (
    <Grid container={true}>
      <Grid item={true} sm={12}>
        <SubLink linkText="SEE All" />
      </Grid>
      <Grid container={true}>
        {[0, 1, 2, 3].map((item) => (
          <Grid
            key={item}
            item={true}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.cardRoot}>
            <CourseCard course={LiveCouse} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

const PopularCourse = {
  imgUrl: 'http://localhost:3000/assets/images/medical-abortion-2x_dw.png',
  courseName: 'Comprehisive course 1',
  author: 'Dr. ashok chak',
  category: 'BioChemistry',
};

function UpComingVideos() {
  const classes = useStyles();
  return (
    <Grid container={true}>
      <Grid item={true} sm={12}>
        <SubLink linkText="Upcoming Videos" />
      </Grid>
      <Grid container={true}>
        {[0, 1, 2, 3].map((item) => (
          <Grid
            key={item}
            item={true}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.cardRoot}>
            <CourseCard course={PopularCourse} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

function PopularCourses() {
  const classes = useStyles();
  return (
    <Grid container={true}>
      <Grid item={true} sm={12}>
        <SubLink linkText="Upcoming Videos" />
      </Grid>
      <Grid container={true}>
        {[0, 1, 2, 3].map((item) => (
          <Grid
            key={item}
            item={true}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.cardRoot}>
            <CourseCard course={PopularCourse} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

function LiveClasses() {
  return (
    <>
      <DashboardLiveVideos />
      <UpComingVideos />
      <PopularCourses />
    </>
  );
}

export default LiveClasses;
