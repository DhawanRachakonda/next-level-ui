import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { FormattedMessage } from 'react-intl';

// local imports
import DivTypography from 'containers/typography/DivTypography';
import BorderLinearProgress from 'containers/progress-bars/LinearProgressBar';
import MyCourses from 'containers/my-courses';
import SelectField from 'containers/inputs/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.spacing(2),
      boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
      marginBottom: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(2),
      },
    },
    cardCounts: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: 12,
    },
    adminName: {
      color: '#1faae4',
    },
    adminSubText: {
      color: '#2f3d4a',
    },
    totalCount: {
      fontSize: '1rem',
      color: '#6d7b82',
      paddingTop: theme.spacing(2),
    },
    captionText: {
      color: '#6d7b82',
      fontSize: 10,
      fontWeight: 'normal',
    },
    cardContent: {
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      '&:last-child': {
        paddingBottom: theme.spacing(2),
      },
    },
    captionContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      '&& .MuiInputBase-root': {
        margin: 0,
        border: '1px solid #c9d3d8',
        borderRadius: 5,
        padding: '4px 16px',
        fontWeight: 'normal',
        '&:before': {
          content: 'none',
        },
        '&:after': {
          content: 'none',
        },
      },
    },
    evenCountItem: {
      paddingRight: theme.spacing(2),
      marginBottom: theme.spacing(4),
      '&& .MuiLinearProgress-bar': {
        backgroundColor: '#6b5acc',
      },
    },
    oddCountItem: {
      paddingLeft: theme.spacing(2),
      marginBottom: theme.spacing(4),
      '&& .MuiLinearProgress-bar': {
        backgroundColor: '#ff5211',
      },
    },
    rightIcon: {
      float: 'right',
    },
  }),
);

function AdminHome() {
  const styles = useStyles();

  return (
    <Grid container={true} data-testid="AdminHome-container">
      <Grid item={true} xs={12}>
        <Card className={styles.cardRoot}>
          <CardContent className={styles.cardContent}>
            <DivTypography variant="h6" className={styles.adminName}>
              Hi Rahul, Welcome Back!
            </DivTypography>
            <DivTypography variant="h6" className={styles.adminSubText}>
              Your Business Dashboard
            </DivTypography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item={true} sm={12} md={9}>
        <Grid container={true}>
          <Grid item={true} sm={12} md={6} className={styles.evenCountItem}>
            <Card className={styles.cardCounts}>
              <CardContent className={styles.cardContent}>
                <DivTypography variant="h6" className={styles.adminSubText}>
                  Total Students
                </DivTypography>
                <DivTypography variant="h6" className={styles.totalCount}>
                  346
                </DivTypography>
                <BorderLinearProgress variant="determinate" value={50} />
                <div className={styles.captionContainer}>
                  <DivTypography
                    variant="caption"
                    className={styles.captionText}>
                    10 New in last 2 days
                  </DivTypography>
                  <DivTypography
                    variant="caption"
                    className={styles.captionText}>
                    +10
                  </DivTypography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item={true} sm={12} md={6} className={styles.oddCountItem}>
            <Card className={styles.cardCounts}>
              <CardContent className={styles.cardContent}>
                <DivTypography variant="h6" className={styles.adminSubText}>
                  New Students
                  <ChevronRightIcon
                    className={styles.rightIcon}
                    fontSize="large"
                  />
                </DivTypography>
                <DivTypography variant="h6" className={styles.totalCount}>
                  10
                </DivTypography>
                <BorderLinearProgress variant="determinate" value={50} />
                <div className={styles.captionContainer}>
                  <DivTypography
                    variant="caption"
                    className={styles.captionText}>
                    10 New in last 2 days
                  </DivTypography>
                  <DivTypography
                    variant="caption"
                    className={styles.captionText}>
                    +10
                  </DivTypography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item={true} sm={12} md={6} className={styles.evenCountItem}>
            <Card className={styles.cardCounts}>
              <CardContent className={styles.cardContent}>
                <DivTypography variant="h6" className={styles.adminSubText}>
                  Total Courses
                </DivTypography>
                <DivTypography variant="h6" className={styles.totalCount}>
                  25
                </DivTypography>
                <BorderLinearProgress variant="determinate" value={50} />
                <div className={styles.captionContainer}>
                  <DivTypography
                    variant="caption"
                    className={styles.captionText}>
                    2 New in last 2 days
                  </DivTypography>
                  <DivTypography
                    variant="caption"
                    className={styles.captionText}>
                    +2
                  </DivTypography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item={true} sm={12} md={6} className={styles.oddCountItem}>
            <Card className={styles.cardCounts}>
              <CardContent className={styles.cardContent}>
                <DivTypography variant="h6" className={styles.adminSubText}>
                  New Courses
                  <ChevronRightIcon
                    className={styles.rightIcon}
                    fontSize="large"
                  />
                </DivTypography>
                <DivTypography variant="h6" className={styles.totalCount}>
                  2
                </DivTypography>
                <BorderLinearProgress variant="determinate" value={50} />
                <div className={styles.captionContainer}>
                  <DivTypography
                    variant="caption"
                    className={styles.captionText}>
                    2 New in last 2 days
                  </DivTypography>
                  <DivTypography
                    variant="caption"
                    className={styles.captionText}>
                    +2
                  </DivTypography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item={true} xs={12} className={styles.captionContainer}>
        <DivTypography variant="h4">
          <FormattedMessage id="toReview.heading" />
        </DivTypography>
        <SelectField
          value="1"
          options={[
            { value: 1, label: 'Today' },
            { value: 2, label: 'Yesterday' },
          ]}
        />
      </Grid>
      <MyCourses heading="upcomingCourses.heading" />
      <MyCourses heading="completedCourses.heading" />
      <Grid item={true} xs={12}>
        <DivTypography variant="h6">
          <FormattedMessage id="listofStudents.heading" />
        </DivTypography>
      </Grid>
      <Grid item={true} xs={12}>
        <DivTypography variant="h6">
          <FormattedMessage id="listofEducators.heading" />
        </DivTypography>
      </Grid>
    </Grid>
  );
}

export default AdminHome;
