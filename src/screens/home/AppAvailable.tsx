import React from 'react';
import {
  Theme,
  makeStyles,
  Grid,
  Box,
  Button,
  Card,
  CardContent,
  Avatar,
  CardHeader,
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';

import AppUtil from 'util/appUtil';
import DivTypography from 'containers/typography/DivTypography';

const useStyles = makeStyles((theme: Theme) => ({
  becomeMemberBox: {
    maxWidth: '90%',
    display: 'flex',
    margin: '32px auto 80px',
  },
  appAvailableBox: {
    maxWidth: '85%',
    backgroundColor: '#5f5982',
    borderRadius: 5,
    padding: theme.spacing(8, 6),
    margin: '16px auto',
    display: 'flex',
    '& .MuiTypography-root': {
      flex: '1',
      color: '#fff',
    },
  },
  appAvailableAndroidButton: {
    fontSize: 18,
    margin: theme.spacing(0, 2),
    color: '#18A4E0',
  },
  appAvailableIosButton: {
    fontSize: 18,
    margin: theme.spacing(0, 2),
  },
  businessCard: {
    marginLeft: 10,
    backgroundColor: '#fff9c4',
    padding: theme.spacing(1),
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    '& .MuiAvatar-root': {
      height: theme.spacing(8),
      width: theme.spacing(8),
    },
    '& .MuiCardHeader-title': {
      fontSize: 32,
      color: '#5f5982',
      fontWeight: 600,
    },
    '& .MuiCardHeader-subheader': {
      fontSize: 16,
      color: '#5f5982',
      fontWeight: 'lighter',
    },
    '& .MuiButtonBase-root': {
      marginLeft: theme.spacing(10),
    },
  },
  teacherCard: {
    marginRight: 10,
    backgroundColor: '#ede7f6',
    padding: theme.spacing(1),
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    '& .MuiAvatar-root': {
      height: theme.spacing(8),
      width: theme.spacing(8),
    },
    '& .MuiCardHeader-title': {
      fontSize: 32,
      color: '#5f5982',
      fontWeight: 600,
    },
    '& .MuiCardHeader-subheader': {
      fontSize: 16,
      color: '#5f5982',
      fontWeight: 'lighter',
    },
    '& .MuiButtonBase-root': {
      marginLeft: theme.spacing(10),
    },
  },
}));

export default function AppAvailable() {
  const styles = useStyles();

  return (
    <>
      <Grid item={true} xs={12}>
        <Box className={styles.appAvailableBox}>
          <DivTypography variant="h3">
            <FormattedMessage id="appAvailabel.label" />
          </DivTypography>
          <Button
            variant="contained"
            color="secondary"
            className={styles.appAvailableAndroidButton}
            startIcon={<AndroidIcon />}>
            <FormattedMessage id="androidApp.label" />
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={styles.appAvailableIosButton}
            startIcon={<AppleIcon />}>
            <FormattedMessage id="iosApp.label" />
          </Button>
        </Box>
      </Grid>
      <Grid item={true} xs={12}>
        <Box className={styles.becomeMemberBox}>
          <Card className={styles.teacherCard}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" src={AppUtil.getUserImageURL()} />
              }
              title="Become a Teacher"
              subheader="Teach what you love. Coursector gives you the tools to create a course."
            />
            <CardContent>
              <Button
                variant="contained"
                color="primary"
                className={styles.appAvailableIosButton}>
                <FormattedMessage id="applyAsTeacher.btn" />
              </Button>
            </CardContent>
          </Card>
          <Card className={styles.businessCard}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" src={AppUtil.getUserImageURL()} />
              }
              title="Coursector for Business"
              subheader="Get unlimited access to 3,000+ of top courses for your team"
            />
            <CardContent>
              <Button
                variant="contained"
                color="primary"
                className={styles.appAvailableIosButton}>
                <FormattedMessage id="nextLevelTeam.btn" />
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </>
  );
}
