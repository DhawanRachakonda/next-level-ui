import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';

////////////////////////////// Local imports
import DivTypography from 'containers/typography/DivTypography';
import TopProfessorsCourses from './TopProfessorsCourses';
import Testimonials from './Testimonials';
import Objectives from './Objectives';
import AppAvailable from './AppAvailable';

const useStyles = makeStyles((theme) => ({
  headerDividerToolbar: {
    [theme.breakpoints.up('sm')]: {
      marginTop: '3rem',
    },
  },
  homeSiteDescRoot: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#bbdefb',
    border: '1px solid #707070',
    // background:
    // 'linear-gradient(180deg, rgba(204,245,252,1) 0%, rgba(204,245,252,1) 30%, rgba(255,255,255,1) 100%)',
    padding: `${theme.spacing(1)}px 0rem`,
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(12),
    },
    '& .description-container--grid': {
      position: 'relative',
      padding: theme.spacing(0, 0, 4, 8),
    },
  },
  homeSiteDescTypographyRow1: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  homeSiteDescTypographyRow2: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  homeSiteDescTypographyRow3: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  getStartedButtonRoot: {
    marginTop: theme.spacing(3),
  },
  getStartedButtonTypoRoot: {
    color: '#F1F1F1',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
  },
  getStartedButtonTypoIcon: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      height: '0.8em',
    },
  },
  patternImage: {
    backgroundImage: 'url(/assets/images/pattern.png)',
    height: '200px',
    width: '85px',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    left: '-90px',
    position: 'absolute',
    bottom: '-50px',
  },
  patternImage2: {
    backgroundImage: 'url(/assets/images/pattern.png)',
    height: '200px',
    width: '85px',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    right: '-90px',
    position: 'absolute',
    top: '-50px',
  },
}));

function HomeScreen() {
  const styles = useStyles();
  return (
    <Grid container={true}>
      <Grid
        classes={{ root: styles.homeSiteDescRoot }}
        className="home-site--desc"
        item={true}
        xs={12}>
        <Grid
          item={true}
          sm={12}
          md={5}
          className="description-container--grid">
          <DivTypography className={styles.patternImage} />
          <Typography
            classes={{ root: styles.homeSiteDescTypographyRow1 }}
            variant="h3"
            component="h3">
            LEARN anything,
          </Typography>
          <Typography
            classes={{
              root: styles.homeSiteDescTypographyRow2,
            }}
            variant="h3"
            component="h3">
            anytime,
          </Typography>
          <Typography
            classes={{
              root: styles.homeSiteDescTypographyRow3,
            }}
            variant="h3"
            component="h3">
            anywhere
          </Typography>
          <Button
            classes={{ root: styles.getStartedButtonRoot }}
            variant="contained"
            color="primary">
            <Typography
              classes={{
                root: styles.getStartedButtonTypoRoot,
              }}
              variant="h6"
              component="h6">
              Get Started
            </Typography>
            <ArrowForwardIcon
              classes={{ root: styles.getStartedButtonTypoIcon }}
            />
          </Button>
        </Grid>
        <Grid className="home-site--desc_img" item={true} sm={12} md={7}>
          <DivTypography className={styles.patternImage2} />
        </Grid>
        {/* <img src="/assets/images/Women.png" /> */}
      </Grid>
      <TopProfessorsCourses />
      <Objectives />
      <Testimonials />
      <AppAvailable />
    </Grid>
  );
}

export default HomeScreen;
