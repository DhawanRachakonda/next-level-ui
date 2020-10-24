import React from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: '0 0 black',
      backgroundColor: theme.palette.background.paper,
    },
    gridLink: {
      color: '#18A4E0',
    },
    gridHeader: {
      color: '#18A4E0',
    },
    gridLinkArrow: {
      position: 'relative',
      top: '12px',
    },
    img: {
      width: '100%',
      height: '100%',
    },
    title: {
      backgroundColor: '#FFF',
      borderRadius: '12px',
      color: '#7D98AD',
      top: '195px',
      position: 'relative',
      display: 'inline',
      left: '140px',
      padding: '5px 15px 5px 15px',
    },
    live: {
      backgroundColor: 'red',
      borderRadius: '12px',
      color: '#F1F1F1',
      top: '195px',
      position: 'relative',
      display: 'inline',
      left: '40px',
      padding: '2px 3px 3px 8px',
    },
    description: {
      color: '#7D98AD',
      height: '40px',
      width: '94%',
      margin: '0 3%',
      backgroundColor: '#fff',
      boxShadow:
        '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
    cardMedia: {
      height: '250px',
      width: '100%',
      backgroundSize: '100%',
    },
    cardContent: {
      boxShadow: '1px 1px 8px -2px #888888',
      borderRadius: '1em',
      padding: '4px',
      margin: '1px 5px 5px',
    },
  }),
);

function ReturnVideoGrid() {
  const classes = useStyles();
  return (
    <Grid item={true} xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <Typography className={classes.live}>
            Live{' '}
            <ArrowRightIcon
              fontSize="large"
              className={classes.gridLinkArrow}
            />
          </Typography>
          <Typography className={classes.title}>Bio Chemisty</Typography>
          <CardMedia
            className={classes.cardMedia}
            image={'/assets/images/medical-abortion-2x_b@2x.png'}
            title={'course.courseName'}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="subtitle2" align="center" component="p">
              {'Comprehensive course on Bio Chemisty'}
            </Typography>
            <Typography variant="caption" align="center" component="p">
              {'Dr.Manoj Kumar bhoompathi'}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
function DashboardLiveVideos() {
  const classes = useStyles();
  return (
    <Grid>
      <Grid>
        <Typography className={classes.gridLink}>
          <Link className={classes.gridHeader} variant="body2">
            {' '}
            SEE ALL{' '}
            <ArrowRightIcon
              fontSize="large"
              className={classes.gridLinkArrow}
            />
          </Link>
        </Typography>
      </Grid>

      <Grid container spacing={1} style={{ margin: '10px' }}>
        <ReturnVideoGrid />
        <ReturnVideoGrid />
        <ReturnVideoGrid />
        <ReturnVideoGrid />
      </Grid>
    </Grid>
  );
}
function UpComingVideos() {
  const classes = useStyles();

  return (
    <Grid>
      <Grid>
        <Typography className={classes.gridLink}>
          <Link className={classes.gridHeader} variant="body2">
            {' '}
            Upcoming Videos{' '}
            <ArrowRightIcon
              fontSize="large"
              className={classes.gridLinkArrow}
            />
          </Link>
        </Typography>
      </Grid>

      <Grid container spacing={1} style={{ margin: '10px' }}>
        <ReturnVideoGrid />
        <ReturnVideoGrid />
        <ReturnVideoGrid />
        <ReturnVideoGrid />
      </Grid>
    </Grid>
  );
}
function PopularCourses() {
  const classes = useStyles();

  return (
    <Grid>
      <Grid>
        <Typography className={classes.gridLink}>
          <Link className={classes.gridHeader} variant="body2">
            {' '}
            Popular Courses{' '}
            <ArrowRightIcon
              fontSize="large"
              className={classes.gridLinkArrow}
            />
          </Link>
        </Typography>
      </Grid>

      <Grid container spacing={1} style={{ margin: '10px' }}>
        <ReturnVideoGrid />
        <ReturnVideoGrid />
        <ReturnVideoGrid />
        <ReturnVideoGrid />
      </Grid>
    </Grid>
  );
}

function LiveClasses() {
  return (
    <div>
      <DashboardLiveVideos />
      <UpComingVideos />
      <PopularCourses />
    </div>
  );
}

export default LiveClasses;
