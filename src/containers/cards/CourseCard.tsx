import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// local imparts
import DivTypography from 'containers/typography/DivTypography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      background: 'none',
      boxShadow: 'none',
      width: '100%',
    },
    cardMedia: {
      minHeight: '165px',
      position: 'relative',
    },
    cardCategory: {
      position: 'absolute',
      right: theme.spacing(2),
      bottom: theme.spacing(2),
      background: theme.palette.background.paper,
      padding: '0px 12px',
      borderRadius: '10px',
    },
    cardContent: {
      background: theme.palette.background.paper,
      boxShadow:
        '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
      borderRadius: '1em',
      padding: '0',
      margin: '2em 0 5px',
    },
    liveCaption: {
      backgroundColor: 'red',
      borderRadius: '10px',
      color: '#F1F1F1',
      position: 'absolute',
      bottom: theme.spacing(2),
      left: theme.spacing(2),
      padding: '0px 12px',
    },
    linkArrow: {
      position: 'relative',
      top: '5px',
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
          title={course.courseName}>
          {course.isLive && (
            <DivTypography
              variant="subtitle1"
              component="span"
              className={styles.liveCaption}>
              Live{' '}
              <ArrowRightIcon fontSize="small" className={styles.linkArrow} />
            </DivTypography>
          )}
          <DivTypography
            variant="subtitle1"
            component="span"
            className={styles.cardCategory}>
            {course.category}
          </DivTypography>
        </CardMedia>
        <CardContent className={styles.cardContent}>
          <DivTypography gutterBottom={true} variant="h6" align="center">
            {course.courseName}
          </DivTypography>
          <DivTypography variant="caption" align="center" component="p">
            {course.author}
          </DivTypography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CourseCard;
