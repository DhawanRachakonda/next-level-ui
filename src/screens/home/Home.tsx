import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import {
  makeStyles,
  withStyles,
  useTheme,
  createStyles,
} from '@material-ui/core/styles';

// Testimonials
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

// Testimonial Slides
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ButtonBase from '@material-ui/core/ButtonBase';
import Slide from '@material-ui/core/Slide';

// Mobile Steeper styles
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Footer
import Divider from '@material-ui/core/Divider';
import AppUtil from 'util/appUtil';

////////////////////////////// Local imports

const useStyles = makeStyles((theme) => ({
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
    background:
      'linear-gradient(180deg, rgba(204,245,252,1) 0%, rgba(204,245,252,1) 30%, rgba(255,255,255,1) 100%)',
    padding: `${theme.spacing(1)}px 0rem`,
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(12),
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

function HomeScreen() {
  const styles = useStyles();
  return (
    <React.Fragment>
      <Grid
        classes={{ root: styles.homeSiteDescRoot }}
        className="home-site--desc"
        item={true}
        xs={12}>
        <Grid item={true} xs={6} className="description-container--grid">
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
        <Grid className="home-site--desc_img" item={true} xs={6} />

        {/* <img src="/assets/images/Women.png" /> */}
      </Grid>
      <TopProfessorsCourses />
      <Testimonials />
    </React.Fragment>
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
    <Grid
      classes={{ root: styles.topProfessorsContainerRoot }}
      item={true}
      xs={12}>
      <Grid item={true} xs={12}>
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

      <Grid item={true} xs={12}>
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

      <Grid item={true} xs={12}>
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

const NonOutlinedCard = withStyles((theme) => ({
  root: {
    boxShadow: 'unset',
  },
}))(Card);

const TestimonialGridContainer = withStyles((theme) => ({
  root: {
    margin: `${theme.spacing(5)}px 0px`,
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(7),
      paddingTop: 'unset',
    },
  },
}))(Grid);

const useTestimonialsStyles = makeStyles((theme) => ({
  testimonialsTitleCardContainer: {
    padding: theme.spacing(5),
    paddingTop: 'unset',
    textAlign: 'left',
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
    [theme.breakpoints.up('lg')]: {
      lineHeight: `${theme.spacing(8)}px`,
      width: theme.spacing(30),
    },
  },
  testimonialCardRow3: {
    fontWeight: 100,
    marginTop: theme.spacing(1),
  },
}));

const TestimonialGrid = withStyles((theme) => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}))(Grid);

function Testimonials() {
  const styles = useTestimonialsStyles();
  const theme = useTheme();
  const isScreenWithBellowLG = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <TestimonialGridContainer container={true} item={true} xs={12}>
      <Grid item={true} xs={12} md={4}>
        <NonOutlinedCard
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
        </NonOutlinedCard>
      </Grid>
      <TestimonialGrid container={true} item={true} xs={12} md={8}>
        {!isScreenWithBellowLG ? (
          <TestimonySlides />
        ) : (
          <TestimonySlidesMobile />
        )}
      </TestimonialGrid>
    </TestimonialGridContainer>
  );
}

const useFooterStyles = makeStyles((theme) => ({
  footerContainerRoot: {
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(7),
      paddingTop: 'unset',
    },
  },
  logoContainerRoot: {
    padding: '0.5em 0.5em',
    paddingLeft: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      padding: '1em 3em',
      marginLeft: 'unset',
    },
  },
}));

export function Footer() {
  const styles = useFooterStyles();
  return (
    <Grid
      container={true}
      className="footer-container"
      classes={{ root: styles.footerContainerRoot }}
      item={true}
      xs={12}>
      <Grid
        classes={{ root: styles.logoContainerRoot }}
        item={true}
        xs={4}
        sm={3}>
        <img
          className="brand-img"
          src={AppUtil.getLogoURL()}
          alt="NextLevel logo"
        />
      </Grid>

      <Grid
        container={true}
        className="footer-selfDescription--container"
        item={true}
        xs={12}
        sm={9}>
        <Grid item={true} xs={4}>
          <Card className="footer-selfDescription--card">
            <CardContent>
              <Typography gutterBottom={true}>About us</Typography>
              <Typography
                className="description-item"
                variant="body2"
                component="p">
                Contact
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item={true} xs={4}>
          <Card className="footer-selfDescription--card">
            <CardContent>
              <Typography gutterBottom={true}>Support</Typography>
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

        <Grid item={true} xs={4}>
          <Card className="footer-selfDescription--card">
            <CardContent>
              <Typography color="textSecondary" gutterBottom={true}>
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

const SliderCard = withStyles((theme) => ({
  root: {
    textAlign: 'center',
    borderRadius: '3em',
    margin: '0em 2em',
    [theme.breakpoints.only('lg')]: {
      width: `${theme.spacing(35)}px`,
    },
    [theme.breakpoints.up('xl')]: {
      width: `${theme.spacing(42)}px`,
    },
  },
}))(Card);

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 40,
    height: 40,
    border: `2px solid #18A4E0`,
    borderRadius: '50%',
    backgroundColor: '#18A4E0',
    color: '#F1F1F1',
  },
}))(FormatQuoteIcon);

const StyledAvatar = withStyles((theme) => ({
  root: {
    width: '7em',
    height: '6em',
  },
}))(Avatar);

const TestimonialSliderCardName = withStyles((theme) => ({
  root: {
    fontWeight: 100,
    marginTop: theme.spacing(1),
  },
}))(Typography);

const Designation = withStyles((theme) => ({
  root: {
    fontWeight: 'bold',
    marginTop: theme.spacing(0.2),
    color: '#18A4E0',
  },
}))(Typography);

interface ITestimonySlideProps {
  item: {
    id: number;
    name: string;
    description: string;
    designation: string;
  };
}

const LeftTypography = withStyles((theme) => ({
  root: {
    textAlign: 'left',
  },
}))(Typography);

const SliderCardDescription = withStyles((theme) => ({
  root: {
    padding: `${theme.spacing(4)}px`,
  },
}))(LeftTypography);

const SliderCardDescriptionDivider = withStyles((theme) => ({
  root: {
    margin: `0px ${theme.spacing(10)}px`,
    backgroundColor: '#18A4E0',
  },
  variant: {
    textAlign: 'center',
  },
}))(Divider);

function TestimonySlide({
  item: { id, name, description, designation },
}: ITestimonySlideProps) {
  return (
    <React.Fragment>
      <SliderCard>
        <CardContent>
          <Badge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            badgeContent={<SmallAvatar />}>
            <StyledAvatar
              alt="Travis Howard"
              src={`/assets/images/Ellipse_${id / 2 === 0 ? '6' : '7'}.png`}
            />
          </Badge>
          <SliderCardDescription variant="body2">
            {description}
          </SliderCardDescription>
          <SliderCardDescriptionDivider />
          <TestimonialSliderCardName variant="subtitle1">
            {name}
          </TestimonialSliderCardName>
          <Designation variant="subtitle2">{designation}</Designation>
        </CardContent>
      </SliderCard>
    </React.Fragment>
  );
}

const SliderLeftArrow = withStyles((theme) => ({
  root: {
    height: '100%',
    fontSize: '2.5rem',
    color: '#18A4E0',
    cursor: 'pointer',
  },
}))(ArrowLeftIcon);

const SliderRightArrow = withStyles((theme) => ({
  root: {
    height: '100%',
    fontSize: '2.5rem',
    color: '#18A4E0',
    cursor: 'pointer',
  },
}))(ArrowRightIcon);

const ArrowContainer = withStyles((theme: any) => ({
  root: {
    borderRadius: theme.spacing(1),
    boxShadow: '0 0 5px #b6b6b6',
    position: 'absolute',
    [theme.position]: theme.value,
  },
}))(ButtonBase);

const SlideGrid = withStyles((theme) => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
}))(Grid);

interface IArrowProps {
  direction: string;
  clickFunction: () => void;
}

function Arrow(props: IArrowProps) {
  const { direction, clickFunction } = props;
  const icon =
    direction === 'left' ? <SliderLeftArrow /> : <SliderRightArrow />;

  return (
    <ArrowContainer style={{ [direction]: '0' }} onClick={clickFunction}>
      {icon}
    </ArrowContainer>
  );
}

function TestimonySlides() {
  const slides = [
    {
      name: 'Dr. Dilip Kumar',
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
      designation: `Anatomy`,
    },
    {
      name: 'Dr. Manoj Kumar',
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
      designation: `Pathology`,
    },
    {
      name: 'Dr. Dilip Kumar',
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
      designation: `Anatomy`,
    },
    {
      name: 'Dr. Manoj Kumar',
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
      designation: `Pathology`,
    },
    {
      name: 'Dr. Dilip Kumar',
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
      designation: `Anatomy`,
    },
    {
      name: 'Dr. Manoj Kumar',
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
      designation: `Pathology`,
    },
  ];
  const [slideIn, setSlideIn] = React.useState(true);
  const [index, setIndex] = React.useState(0);
  const numSlides = slides.length;
  const [slideDirection, setSlideDirection] = React.useState('right');
  const onArrowClick = (direction: string) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === 'left' ? 'right' : 'left';
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };
  return (
    <SlideGrid container={true} item={true} xs={12}>
      <Arrow
        direction="left"
        clickFunction={() => {
          onArrowClick('left');
        }}
      />
      <Slide in={slideIn} direction={slideDirection as any}>
        <SlideGrid container={true} item={true} xs={12}>
          {slides.slice(index, index + 2).map((item, id) => (
            <TestimonySlide key={id} item={{ ...item, id }} />
          ))}
        </SlideGrid>
      </Slide>
      <Arrow
        direction="right"
        clickFunction={() => {
          onArrowClick('right');
        }}
      />
    </SlideGrid>
  );
}

const useStylesTestimony = makeStyles((TestimonyTheme) =>
  createStyles({
    root: {
      maxWidth: 400,
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 'auto',
      padding: '2vh 3vh',
    },
    fontColor: {
      color: '#18A4E0',
    },
    separator: {
      padding: 0,
      color: '#18A4E0',
      width: '30vh',
      margin: '0 auto',
      backgroundColor: TestimonyTheme.palette.background.default,
      border: '1px solid',
    },
    img: {
      height: 240,
      maxWidth: 400,
      overflow: 'hidden',
      display: 'block',
      width: '80%',
      margin: '2vh auto',
    },
  }),
);

const SliderPaper = withStyles((theme) => ({
  root: {
    display: 'block',
    width: '100%',
  },
}))(Paper);

function TestimonySlidesMobile() {
  const slides = [
    {
      label: 'Dr. Dilip Kumar_M',
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
      designation: `Anatomy`,
      imgPath: '/assets/images/Ellipse_2.png',
    },
    {
      name: 'Dr. Manoj Kumar',
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
      designation: `Pathology`,
      imgPath: '/assets/images/Ellipse_6.png',
    },
    {
      name: 'Dr. Dilip Kumar',
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
      designation: `Anatomy`,
      imgPath: '/assets/images/Ellipse_2.png',
    },
    {
      name: 'Dr. Manoj Kumar',
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
      designation: `Pathology`,
      imgPath: '/assets/images/Ellipse_6.png',
    },
    {
      name: 'Dr. Dilip Kumar',
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
      designation: `Anatomy`,
    },
    {
      name: 'Dr. Manoj Kumar',
      description: `Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica`,
      designation: `Pathology`,
    },
  ];
  const classes = useStylesTestimony();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = slides.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <SlideGrid className={classes.root} container={true} item={true} xs={12}>
      <SliderPaper square={true} elevation={0} className={classes.header}>
        <Typography>{slides[activeStep].label}</Typography>
      </SliderPaper>
      <SliderPaper square={true} elevation={0} className={classes.header}>
        <Typography className={classes.fontColor}>
          {slides[activeStep].designation}
        </Typography>
      </SliderPaper>
      <SliderPaper square={true} elevation={0} className={classes.header}>
        <Typography className={classes.separator} />
      </SliderPaper>
      <SliderPaper
        style={{
          overflow: 'auto',
          width: 'auto',
          height: '50px',
        }}
        square={true}
        elevation={0}
        className={classes.header}>
        <Typography>{slides[activeStep].description}</Typography>
      </SliderPaper>

      <img
        className={classes.img}
        src={slides[activeStep].imgPath}
        alt={slides[activeStep].name}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </SlideGrid>
  );
}

export default HomeScreen;
