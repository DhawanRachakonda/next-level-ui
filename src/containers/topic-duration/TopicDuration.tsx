import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '2em',
    },
    countsGrid: {
      '& > .MuiGrid-item': {
        padding: '12px',
        fontSize: '1.25rem',
        textAlign: 'center',
        '& > .MuiTypography-caption': {
          fontSize: '1.5rem',
          fontFamily: 'times new roman',
          color: '#20A2E5',
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
        <Grid item={true} xs={6} md={3}>
          Updated{' '}
          <Typography gutterBottom={true} variant="caption">
            10-10-2020
          </Typography>
        </Grid>
        <Grid item={true} xs={6} md={3}>
          Released{' '}
          <Typography gutterBottom={true} variant="caption">
            10-10-2020
          </Typography>
        </Grid>
        <Grid item={true} xs={6} md={3}>
          Duration{' '}
          <Typography gutterBottom={true} variant="caption">
            15h 30m
          </Typography>
          <AccessTimeIcon fontSize="small" className={styles.durationIcon} />
        </Grid>
        <Grid item={true} xs={6} md={3}>
          Views{' '}
          <Typography gutterBottom={true} variant="caption">
            85
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default TopicDuration;
