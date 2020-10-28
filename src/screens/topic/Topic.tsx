import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// local imports
import TopicDetails from 'containers/topic-details';
import RelatedCourses from 'containers/related-courses';
import TopicsList from 'containers/topics-list';
import TopicDuration from 'containers/topic-duration';
import Breadcrumbs from 'containers/bread-crumbs';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '2em',
    },
    gridItem: {
      padding: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
      },
    },
    breadCrumbs: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
      },
    },
    countsGrid: {
      '& > .MuiGrid-item': {
        padding: '18px',
      },
    },
  }),
);

const relatedCourseData = [
  {
    imgUrl: 'http://localhost:3000/assets/images/medical-abortion-2x_dw.png',
    courseName: 'Comprehisive course 1',
    author: 'Dr. ashok chak',
    category: 'BioChemistry',
  },
  {
    imgUrl: 'http://localhost:3000/assets/images/medical-abortion-2x_dw.png',
    courseName: 'Comprehisive course 2',
    author: 'Dr. ashok chakr',
    category: 'BioChemistry',
  },
  {
    imgUrl: 'http://localhost:3000/assets/images/medical-abortion-2x_dw.png',
    courseName: 'Comprehisive course 3',
    author: 'Dr. ashok ckra',
    category: 'BioChemistry',
  },
];

const topicsData = [
  { heading: 'chapter 1', duration: '03:10' },
  { heading: 'chapter 2', duration: '03:30' },
  { heading: 'chapter 3', duration: '03:10' },
  { heading: 'chapter 4', duration: '03:30' },
  { heading: 'chapter 5', duration: '03:10' },
  { heading: 'chapter 6', duration: '03:30' },
  { heading: 'chapter 7', duration: '03:10' },
  { heading: 'chapter 8', duration: '03:30' },
  { heading: 'chapter 9', duration: '03:10' },
];

function Topic() {
  const styles = useStyles();
  return (
    <Grid container={true} data-testid="topic-container">
      <Grid item={true} xs={12} className={styles.breadCrumbs}>
        <Breadcrumbs
          navLinks={[
            { link: '/home', label: 'Home' },
            { link: '', label: 'Topic' },
          ]}
        />
      </Grid>
      <Grid item={true} xs={12} className={styles.gridItem}>
        <TopicDetails />
      </Grid>
      <Grid item={true} xs={12} className={styles.gridItem}>
        <TopicDuration />
      </Grid>
      <Grid item={true} xs={12} md={4} className={styles.gridItem}>
        <RelatedCourses courses={relatedCourseData} />
      </Grid>
      <Grid item={true} xs={12} md={8} className={styles.gridItem}>
        <TopicsList topicList={topicsData} />
      </Grid>
    </Grid>
  );
}

export default Topic;
