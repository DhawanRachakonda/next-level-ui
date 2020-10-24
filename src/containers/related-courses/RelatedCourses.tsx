import React from 'react';
import Grid from '@material-ui/core/Grid';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// local imports
import CourseCard from 'containers/cards/CourseCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#f1f1f1',
      boxShadow:
        '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
      borderRadius: '3em',
      padding: theme.spacing(4),
    },
  }),
);

interface RelatedCourseItem {
  imgUrl: string;
  courseName: string;
  author: string;
}

interface RelatedCoursesProps {
  courses: RelatedCourseItem[];
}

function RelatedCourses({ courses }: RelatedCoursesProps) {
  const styles = useStyles();
  return (
    <Grid
      className={styles.root}
      container={true}
      direction="column"
      justify="space-evenly"
      alignItems="center"
      data-testid="related-courses">
      {courses.map((course) => (
        <CourseCard key={course.courseName} course={course} />
      ))}
    </Grid>
  );
}

export default RelatedCourses;
