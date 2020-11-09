import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

// local imports
import DivTypography from 'containers/typography/DivTypography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridItemRoot: {
      padding: '32px 0',
    },
    gridItem: {
      '&:first-of-type': {
        paddingRight: theme.spacing(2),
      },
      '&:last-of-type': {
        paddingLeft: theme.spacing(2),
      },
    },
    bodyText: {
      fontWeight: 'normal',
      color: '#9aa4a9',
      padding: '15px 0',
    },
    gridIcon: {
      fontSize: '0.875rem',
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
    },
  }),
);

function AboutMe() {
  const styles = useStyles();

  return (
    <Grid
      item={true}
      xs={12}
      data-testid="aboutme-container"
      className={styles.gridItemRoot}>
      <Grid container={true}>
        <Grid item={true} sm={12} md={8} className={styles.gridItem}>
          <DivTypography variant="h5" gutterBottom={true}>
            About Me
          </DivTypography>
          <DivTypography variant="body1" className={styles.bodyText}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </DivTypography>
          <DivTypography variant="body2" className={styles.bodyText}>
            There are many variations of passages of Lorem Ipsum available,
          </DivTypography>
        </Grid>
        <Grid item={true} sm={12} md={4} className={styles.gridItem}>
          <DivTypography variant="h5" gutterBottom={true}>
            Contacts
          </DivTypography>
          <DivTypography
            variant="caption"
            display="block"
            gutterBottom={true}
            className={styles.bodyText}>
            <PhoneOutlinedIcon className={styles.gridIcon} />
            +1 (444) 27 243 345
          </DivTypography>
          <DivTypography
            variant="caption"
            display="block"
            gutterBottom={true}
            className={styles.bodyText}>
            <MailOutlineIcon className={styles.gridIcon} />
            you@gmail.com
          </DivTypography>
          <DivTypography
            variant="caption"
            display="block"
            gutterBottom={true}
            className={styles.bodyText}>
            <LocationOnOutlinedIcon className={styles.gridIcon} />
            Philadelpia, USA
          </DivTypography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
