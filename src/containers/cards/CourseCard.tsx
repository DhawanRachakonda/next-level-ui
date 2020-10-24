import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      margin: theme.spacing(3),
      background: 'none',
      boxShadow: 'none',
    },
    cardMedia: {
      height: '165px',
      width: '280px',
    },
    cardContent: {
      background: theme.palette.background.paper,
      boxShadow:
        '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
      borderRadius: '1em',
      padding: '0',
      margin: '2em 5px 5px',
    },
  }),
);

function CourseCard({ course }: any) {
  const styles = useStyles();
  return (
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
  );
}

export default CourseCard;
