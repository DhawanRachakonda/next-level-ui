import React from 'react';
import {
  Theme,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  useMediaQuery,
  ButtonBase,
  Slide,
  Badge,
  Avatar,
  Divider,
  Typography,
} from '@material-ui/core';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import DivTypography from 'containers/typography/DivTypography';

const NonOutlinedCard = withStyles((theme: Theme) => ({
  root: {
    boxShadow: 'unset',
  },
}))(Card);

const TestimonialGridContainer = withStyles((theme: Theme) => ({
  root: {
    margin: `${theme.spacing(5)}px 0px`,
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(7),
      paddingTop: 'unset',
    },
  },
}))(Grid);

const TestimonialGrid = withStyles((theme) => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}))(Grid);

const useTestimonialsStyles = makeStyles((theme: Theme) => ({
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
    fontSize: '1.4rem',
    textShadow: 'unset',
  },
  testimonialCardRow2: {
    marginTop: theme.spacing(5),
    fontSize: '1.6rem',
    [theme.breakpoints.up('lg')]: {
      lineHeight: `${theme.spacing(8)}px`,
      width: theme.spacing(30),
    },
  },
  testimonialCardRow3: {
    fontWeight: 100,
    fontSize: '1rem',
    marginTop: theme.spacing(1),
  },
}));

export default function Testimonials() {
  const styles = useTestimonialsStyles();

  return (
    <TestimonialGridContainer container={true} item={true} xs={12}>
      <Grid item={true} xs={12} md={4}>
        <NonOutlinedCard
          className={styles.testimonialsTitleCardContainer}
          classes={{ root: styles.testimonialsTitleCardContentRoot }}>
          <CardContent>
            <DivTypography
              classes={{ root: styles.testimonialsCardTitleTypo }}
              variant="h4"
              component="h4">
              Educator Testimonials
            </DivTypography>
            <DivTypography
              classes={{ root: styles.testimonialCardRow2 }}
              variant="h4"
              component="h4">
              What they think of us.
            </DivTypography>
            <DivTypography
              classes={{ root: styles.testimonialCardRow3 }}
              variant="h6"
              component="h6">
              We are happy when our students are too.
            </DivTypography>
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
        <TestimonySlides />
      </TestimonialGrid>
    </TestimonialGridContainer>
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
    boxShadow: '0 0 5px #b3c1cd',
    position: 'absolute',
    zIndex: 5,
    [theme.position]: theme.value,
  },
}))(ButtonBase);

const SlideGrid = withStyles((theme) => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflowX: 'hidden',
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
  const theme = useTheme();
  const isScreenBetSMMD = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const isScreenWithBelowMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SlideGrid container={true} item={true} xs={12}>
      <Arrow
        direction="left"
        clickFunction={() => {
          onArrowClick('left');
        }}
      />
      <Slide in={slideIn} direction={slideDirection as any}>
        <SlideGrid
          container={true}
          item={true}
          xs={isScreenBetSMMD ? 10 : 12}
          className={'testimonialSlider'}>
          {slides
            .slice(index, !isScreenWithBelowMd ? index + 2 : index + 1)
            .map((item, id) => (
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
    height: '7em',
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

interface ITestimonySlideProps {
  item: {
    id: number;
    name: string;
    description: string;
    designation: string;
  };
}

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
