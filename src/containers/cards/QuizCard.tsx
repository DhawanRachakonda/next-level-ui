import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TimerIcon from '@material-ui/icons/Timer';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

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
    cardContent: {
      background: theme.palette.background.paper,
      boxShadow: 'none',
      borderRadius: '1em',
      padding: theme.spacing(2),
      margin: '2em 0 5px',
      '& > .MuiTypography-h6': {
        [theme.breakpoints.down('sm')]: {
          fontSize: '0.85rem',
        },
      },
      '& > .MuiTypography-caption': {
        fontWeight: 'normal',
      },
    },
    button: {
      margin: '15px 0',
      fontWeight: 'normal',
      borderRadius: '2em',
    },
  }),
);

function QuizCard() {
  const styles = useStyles();
  return (
    <Card className={styles.cardRoot}>
      <CardContent className={styles.cardContent}>
        <DivTypography gutterBottom={true} variant="h6">
          Quiz
        </DivTypography>
        <DivTypography variant="caption" component="p">
          Lectus nulla at volutant diam ut. Purus viverra accumeus in insis nisi
          scelraea eu. Lectus nulla at volutant diam ut. Purus viverra accumeus
          in insis nisi scelraea eu.
        </DivTypography>
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          startIcon={<TimerIcon />}
          endIcon={<ArrowRightAltIcon />}>
          Take the quiz
        </Button>
      </CardContent>
    </Card>
  );
}

export default QuizCard;
