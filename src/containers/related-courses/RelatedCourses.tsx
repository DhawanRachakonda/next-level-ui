import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '480px',
      backgroundColor: theme.palette.background.paper,
    },
    cardRoot: {
      boxShadow: 'none',
      padding: '20px 10px',
    },
    cardMedia: {
      height: '165px',
      width: '280px',
    },
    cardContent: {
      boxShadow: '1px 1px 8px -2px #888888',
      borderRadius: '1em',
      padding: '0',
      margin: '2em 5px 5px',
    },
  }),
);

interface RelatedCourseItem {
  imgUrl: string;
  courseName: string;
  author: string;
}

interface RelatedCoursesProps {
  relatedCourses: RelatedCourseItem[];
}

function RelatedCourses({ relatedCourses }: RelatedCoursesProps) {
  const styles = useStyles();
  return (
    <Grid
      className={styles.root}
      container={true}
      direction="column"
      justify="space-evenly"
      alignItems="center"
      data-testid="related-courses">
      {relatedCourses.map((course) => (
        <Card className={styles.cardRoot} key={course.courseName}>
          <CardActionArea>
            <CardMedia
              className={styles.cardMedia}
              image={course.imgUrl}
              title={course.courseName}
            />
            <CardContent className={styles.cardContent}>
              <Typography gutterBottom={true} variant="h6" align="center">
                {course.courseName}
              </Typography>
              <Typography variant="caption" align="center" component="p">
                {course.author}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Grid>
  );
}

export default RelatedCourses;
