import React from 'react';
import { Theme, makeStyles, Grid, Box, Button } from '@material-ui/core';

import DivTypography from 'containers/typography/DivTypography';

const useTopProfessorsStyles = makeStyles((theme: Theme) => ({
  topProfessorsContainerRoot: {
    marginTop: theme.spacing(9),
    textAlign: 'center',
  },
  topProfessorsTitleRoot: {
    margin: `calc(0.1em + ${theme.spacing(5)}px)`,
    marginBottom: 0,
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      margin: `calc(0.1em + ${theme.spacing(1)}px)`,
      marginBottom: 0,
      marginTop: theme.spacing(3),
    },
  },
  topProfessorsDescriptionRoot: {
    margin: `calc(1em + ${theme.spacing(10)}px)`,
    marginBottom: 0,
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      margin: `calc(0.1em + ${theme.spacing(5)}px)`,
      marginBottom: 0,
      marginTop: theme.spacing(3),
    },
  },
  topProfessorsOptionsRoot: {
    marginTop: theme.spacing(3),
  },
  topProfessorsTitleTypoRoot: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  topProfessorsDescriptionTypoRoot: {
    color: '#B3C1CD',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  topProfessorsButtonRoot: {},
  topProfessorsOptionsTypoRoot: {
    color: '#F1F1F1',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
  },
}));

export default function TopProfessorsCourses() {
  const styles = useTopProfessorsStyles();
  return (
    <Grid
      classes={{ root: styles.topProfessorsContainerRoot }}
      item={true}
      xs={12}>
      <Grid item={true} xs={12}>
        <Box className={styles.topProfessorsTitleRoot}>
          <DivTypography
            classes={{
              root: styles.topProfessorsTitleTypoRoot,
            }}
            variant="h3"
            component="h3">
            Online courses from top Professors.
          </DivTypography>
        </Box>
      </Grid>

      <Grid item={true} xs={12}>
        <Box className={styles.topProfessorsDescriptionRoot}>
          <DivTypography
            classes={{
              root: styles.topProfessorsDescriptionTypoRoot,
            }}
            variant="h6"
            component="h6">
            Choose from 1000,000+ hours online video with new additions
            published every month.
          </DivTypography>
        </Box>
      </Grid>

      <Grid item={true} xs={12}>
        <Box className={styles.topProfessorsOptionsRoot}>
          <Button
            classes={{ root: styles.topProfessorsButtonRoot }}
            variant="contained"
            color="primary">
            <DivTypography
              classes={{ root: styles.topProfessorsOptionsTypoRoot }}
              variant="h6"
              component="h6">
              Get started
            </DivTypography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
