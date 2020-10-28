import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

// local imports
import DivTypography from 'containers/typography/DivTypography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '2em',
      boxShadow: '0px 2px 5px #b3c1cd',
    },
    countsGrid: {
      '& > .MuiGrid-item': {
        padding: '12px',
        fontSize: '1.25rem',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
          fontSize: '0.8125rem',
        },
        '& > .MuiTypography-caption': {
          fontSize: '1.5rem',
          fontFamily: 'times new roman',
          color: '#20A2E5',
          [theme.breakpoints.down('sm')]: {
            fontSize: '0.875rem',
          },
        },
      },
    },
    durationIcon: {
      marginLeft: '10px',
      marginBottom: '-3px',
    },
  }),
);

function TopicDuration() {
  const styles = useStyles();
  return (
    <Card className={styles.cardRoot}>
      <Grid container={true} className={styles.countsGrid}>
        <Grid item={true} xs={12} md={6} lg={3}>
          Updated{' '}
          <DivTypography gutterBottom={true} variant="caption">
            10-10-2020
          </DivTypography>
        </Grid>
        <Grid item={true} xs={12} md={6} lg={3}>
          Released{' '}
          <DivTypography gutterBottom={true} variant="caption">
            10-10-2020
          </DivTypography>
        </Grid>
        <Grid item={true} xs={12} md={6} lg={3}>
          Duration{' '}
          <DivTypography gutterBottom={true} variant="caption">
            15h 30m
          </DivTypography>
          <AccessTimeIcon fontSize="small" className={styles.durationIcon} />
        </Grid>
        <Grid item={true} xs={12} md={6} lg={3}>
          Views{' '}
          <DivTypography gutterBottom={true} variant="caption">
            85
          </DivTypography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default TopicDuration;
