import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// local imports
import DivTypography from 'containers/typography/DivTypography';
import CourseCard from './Course';

const course = {
  imgUrl:
    'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  courseName: 'San Francisco',
  category: 'BioChemistry',
  author: 'Dr. Tony',
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridItemRoot: {
      padding: '32px 0',
    },
    courseContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    courseItem: {
      width: '31%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  }),
);

function MyCourses() {
  const styles = useStyles();

  return (
    <Grid
      item={true}
      xs={12}
      data-testid="mycourses-container"
      className={styles.gridItemRoot}>
      <DivTypography variant="h5" gutterBottom={true}>
        My Courses
      </DivTypography>
      <div className={styles.courseContainer}>
        <div className={styles.courseItem}>
          <CourseCard course={course} />
        </div>
        <div className={styles.courseItem}>
          <CourseCard course={course} />
        </div>
        <div className={styles.courseItem}>
          <CourseCard course={course} />
        </div>
      </div>
    </Grid>
  );
}

export default MyCourses;
