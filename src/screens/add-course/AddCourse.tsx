import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import DivTypography from 'containers/typography/DivTypography';
import TextField from 'containers/inputs/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
      backgroundColor: '#ffffff',
      padding: '8px 16px',
    },
    subHeading: {
      position: 'relative',
      width: '60%',
      display: 'flex',
      alignItems: 'center',
      maxHeight: '32px',
      '&::after': {
        content: '""',
        flex: 1,
        marginLeft: theme.spacing(1),
        height: '1px',
        backgroundColor: '#707070',
      },
    },
    submitSection: {
      display: 'flex',
      width: '60%',
      justifyContent: 'space-between',
    },
    formRoot: {
      width: '100%',
      position: 'relative',
    },
    formGrid: {
      maxWidth: '780px',
      margin: 'auto',
      '& .MuiGrid-item': {
        padding: theme.spacing(1),
      },
    },
    previewContainer: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
    previewVideo: {
      height: '260px',
      width: '320px',
      padding: theme.spacing(1),
      border: '1px solid #707070',
      borderRadius: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  }),
);

export default function MyCourseCard({ add }: any) {
  const classes = useStyles();
  const createOrEdit = add ? 'addCourse' : 'editCourse';

  return (
    <section>
      <DivTypography
        variant="h4"
        gutterBottom={true}
        className={classes.heading}>
        <FormattedMessage id={`${createOrEdit}.title`} />
      </DivTypography>
      <div className={classes.formRoot}>
        <div className={classes.previewContainer}>
          <DivTypography variant="h6">
            <FormattedMessage id="previewVideo.label" />
          </DivTypography>
          <div className={classes.previewVideo}>
            <img alt="preview video" />
            <TextField
              label="url.label"
              helperText="validUrl.label"
              value="https://test.in"
              width="lg"
            />
          </div>
        </div>
        <Grid
          className={classes.formGrid}
          container={true}
          direction="column"
          justify="space-evenly">
          <Grid item={true} xs={12}>
            <DivTypography
              variant="h6"
              gutterBottom={true}
              className={classes.subHeading}>
              <FormattedMessage id="liveClass.label" />
            </DivTypography>
          </Grid>
          <Grid item={true} xs={12}>
            <TextField label={`${createOrEdit}.assignTo.label`} value="" />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField
              label="courseTitle.label"
              value=""
              helperText="courseTitle.helperText"
              width="md"
            />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField
              label="description.label"
              value=""
              helperText="description.helperText"
              width="md"
              multiLine={true}
            />
          </Grid>
          <Grid item={true} xs={12}>
            <DivTypography
              variant="h6"
              gutterBottom={true}
              className={classes.subHeading}>
              <FormattedMessage id="topics.label" />
            </DivTypography>
          </Grid>
          <Grid item={true} xs={12}>
            <TextField value="" width="md" />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField value="dummy text" width="md" multiLine={true} />
          </Grid>
          <Grid item={true} xs={12}>
            <DivTypography
              variant="h6"
              gutterBottom={true}
              className={classes.submitSection}>
              <Button variant="contained" color="primary">
                <FormattedMessage id={`${createOrEdit}.submit.btn`} />
              </Button>
              <Button variant="contained">
                <FormattedMessage id={`${createOrEdit}.cancel.btn`} />
              </Button>
            </DivTypography>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
