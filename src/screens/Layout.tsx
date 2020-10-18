import React from 'react';

import './Layout.scss';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { makeStyles } from '@material-ui/core/styles';

import NonSecureHeader from './headers/NonSecureHeader';

// Testimonials
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

// Footer
import Divider from '@material-ui/core/Divider';
import AppUtil from 'util/appUtil';
import './Footer.scss';

const useStyles = makeStyles((theme) => ({
  appContainer: {
    [theme.breakpoints.up('md')]: {
      padding: '0em 5em',
    },
  },
  headerDividerToolbar: {
    [theme.breakpoints.up('sm')]: {
      marginTop: '3rem',
    },
  },
  homeSiteDescRoot: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '3vw',
    backgroundColor: '#CCF5FC',
    padding: `${theme.spacing(1)}px 0rem`,
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5),
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
}));

function AppLayout() {
  const styles = useStyles();
  return (
    <Container
      maxWidth={false}
      className="app-container"
      classes={{ root: styles.appContainer }}>
      <NonSecureHeader />
      <Grid
        classes={{ root: styles.homeSiteDescRoot }}
        className="home-site--desc"
        item
        xs={12}>
        <Grid item xs={6} className="description-container--grid">
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
        <Grid className="home-site--desc_img" item xs={6} />

        {/* <img src="/assets/images/Women.png" /> */}
      </Grid>
      <TopProfessorsCourses />
      <Testimonials />
      <Divider />
      <Footer />
    </Container>
  );
}

const useTopProfessorsStyles = makeStyles((theme) => ({
  topProfessorsContainerRoot: {
    marginTop: theme.spacing(9),
    textAlign: 'center',
  },
  topProfessorsTitleRoot: {
    margin: `calc(0.1em + ${theme.spacing(5)}px)`,
    marginBottom: 0,
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      margin: `calc(0.1em + ${theme.spacing(1)}px)`,
      marginBottom: 0,
      marginTop: theme.spacing(3),
    },
  },
  topProfessorsDescriptionRoot: {
    margin: `calc(1em + ${theme.spacing(10)}px)`,
    marginBottom: 0,
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      margin: `calc(0.1em + ${theme.spacing(5)}px)`,
      marginBottom: 0,
      marginTop: theme.spacing(3),
    },
  },
  topProfessorsOptionsRoot: {
    marginTop: theme.spacing(3),
  },
  topProfessorsTitleTypoRoot: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  topProfessorsDescriptionTypoRoot: {
    color: '#B3C1CD',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  topProfessorsButtonRoot: {},
  topProfessorsOptionsTypoRoot: {
    color: '#F1F1F1',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
  },
}));

function TopProfessorsCourses() {
  const styles = useTopProfessorsStyles();
  return (
    <Grid classes={{ root: styles.topProfessorsContainerRoot }} item xs={12}>
      <Grid item xs={12}>
        <Box className={styles.topProfessorsTitleRoot}>
          <Typography
            classes={{
              root: styles.topProfessorsTitleTypoRoot,
            }}
            variant="h3"
            component="h3">
            Online courses from top Professors.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box className={styles.topProfessorsDescriptionRoot}>
          <Typography
            classes={{
              root: styles.topProfessorsDescriptionTypoRoot,
            }}
            variant="h6"
            component="h6">
            Choose from 1000,000+ hours online video with new additions
            published every month.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box className={styles.topProfessorsOptionsRoot}>
          <Button
            classes={{ root: styles.topProfessorsButtonRoot }}
            variant="contained"
            color="primary">
            <Typography
              classes={{ root: styles.topProfessorsOptionsTypoRoot }}
              variant="h6"
              component="h6">
              Get started
            </Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

const useTestimonialsStyles = makeStyles((theme) => ({
  testimonialsContainerRoot: {
    margin: `0em ${theme.spacing(0)}px`,
    marginTop: theme.spacing(5),
  },

  testimonialsTitleCardContainer: {
    padding: theme.spacing(5),
    textAlign: 'left',
    boxShadow: 'unset',
  },
  testimonialsTitleCardContentRoot: {
    paddingLeft: '0px',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
    },
  },
  testimonialsTitleCardActionsRoot: {
    marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  },
  testimonialsCardTitleTypo: {
    fontWeight: 100,
    textShadow: 'unset',
  },
  testimonialCardRow2: {
    marginTop: theme.spacing(5),
  },
  testimonialCardRow3: {
    fontWeight: 100,
    marginTop: theme.spacing(1),
  },
}));

function Testimonials() {
  const styles = useTestimonialsStyles();

  return (
    <Grid classes={{ root: styles.testimonialsContainerRoot }} item xs={12}>
      <Grid item xs={12} md={8} lg={12}>
        <Card
          className={styles.testimonialsTitleCardContainer}
          classes={{ root: styles.testimonialsTitleCardContentRoot }}>
          <CardContent>
            <Typography
              classes={{ root: styles.testimonialsCardTitleTypo }}
              variant="h4"
              component="h4">
              Educator Testimonials
            </Typography>
            <Typography
              classes={{ root: styles.testimonialCardRow2 }}
              variant="h4"
              component="h4">
              What they think of us.
            </Typography>
            <Typography
              classes={{ root: styles.testimonialCardRow3 }}
              variant="h6"
              component="h6">
              We are happy when our students are too.
            </Typography>
          </CardContent>
          <CardActions
            classes={{ root: styles.testimonialsTitleCardActionsRoot }}>
            <Button variant="contained" color="primary">
              Read More Testimonials
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

const useFooterStyles = makeStyles((theme) => ({
  footerContainerRoot: {},
  logoContainerRoot: {
    padding: '0.5em 0.5em',
    paddingLeft: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      padding: '1em 3em',
      marginLeft: 'unset',
    },
  },
}));

function Footer() {
  const styles = useFooterStyles();
  return (
    <Grid
      container
      className="footer-container"
      classes={{ root: styles.footerContainerRoot }}
      item
      xs={12}>
      <Grid classes={{ root: styles.logoContainerRoot }} item xs={4} sm={3}>
        <img
          className="brand-img"
          src={AppUtil.getLogoURL()}
          alt="NextLevel logo"
        />
      </Grid>

      <Grid
        container
        className="footer-selfDescription--container"
        item
        xs={12}
        sm={9}>
        <Grid item xs={4}>
          <Card className="footer-selfDescription--card">
            <CardContent>
              <Typography gutterBottom>About us</Typography>
              <Typography
                className="description-item"
                variant="body2"
                component="p">
                Contact
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className="footer-selfDescription--card">
            <CardContent>
              <Typography gutterBottom>Support</Typography>
              <Typography
                className="description-item"
                variant="body2"
                component="p">
                Terms of service
              </Typography>
              <Typography
                className="description-item"
                variant="body2"
                component="p">
                Privacy policy
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className="footer-selfDescription--card">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                sdadjl jsndj
              </Typography>
              <Typography color="textSecondary">adjective</Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AppLayout;
