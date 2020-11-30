import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';

// local imports
import DivTypography from 'containers/typography/DivTypography';
import MyCourseCard from 'containers/cards/AdminCourseCard';
import PaginationComponent from 'containers/pagination/Pagination';

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

function MyCourses({ heading }: any) {
  const styles = useStyles();

  return (
    <Grid
      item={true}
      xs={12}
      data-testid="mycourses-container"
      className={styles.gridItemRoot}>
      <DivTypography variant="h5" gutterBottom={true}>
        <FormattedMessage id={heading} />
      </DivTypography>
      <div className={styles.courseContainer}>
        <div className={styles.courseItem}>
          <MyCourseCard />
        </div>
        <div className={styles.courseItem}>
          <MyCourseCard />
        </div>
        <div className={styles.courseItem}>
          <MyCourseCard />
        </div>
      </div>
      <PaginationComponent count={3} shape="rounded" />
    </Grid>
  );
}

export default MyCourses;
