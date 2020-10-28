import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Grid from '@material-ui/core/Grid';
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';
import CourseCard from 'containers/cards/CourseCard';

// local imports
import DivTypography from 'containers/typography/DivTypography';

const course = {
  imgUrl:
    'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  courseName: 'San Francisco',
  category: 'BioChemistry',
  author: 'Dr. Tony',
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#f1f1f1',
      boxShadow:
        '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
      borderRadius: '3em',
      padding: theme.spacing(4),
      '& > .MuiPaper-root': {
        marginTop: theme.spacing(3),
      },
    },
    img: {
      height: 255,
      display: 'block',
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%',
    },
  }),
);

function RelatedCoursesCarousel() {
  const styles = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Grid
      className={styles.root}
      container={true}
      direction="column"
      justify="space-evenly"
      alignItems="center"
      data-testid="related-courses">
      <Grid item={true} sm={12}>
        <DivTypography variant="h5">Related Courses</DivTypography>
      </Grid>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents={true}>
        {[0, 1, 2, 3].map((step, index) => (
          <div key={step}>
            {Math.abs(activeStep - index) <= 2 ? (
              <CourseCard course={course} />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
    </Grid>
  );
}

export default RelatedCoursesCarousel;
