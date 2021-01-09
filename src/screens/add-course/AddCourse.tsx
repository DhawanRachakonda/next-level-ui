import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import DivTypography from 'containers/typography/DivTypography';
import TextField from 'containers/inputs/TextField';
import { Close, ExpandMore, Subject } from '@material-ui/icons';

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
    topicItem: {
      marginRight: '10px',
    },
    closeTopic: {
      fontSize: '14px',
      color: 'red',
    },
    topicsList: {
      border: '1px solid #ced4da',
      padding: '10px 12px',
      position: 'relative',
      fontSize: '16px',
      borderRadius: '16px',
      backgroundColor: '#fff',
    },
    topicsAccordion: {
      boxShadow: 'none',
    },
    alignLeft: {
      float: 'left',
    },
    subTopicName: {
      fontSize: '12px',
      fontWeight: 'normal',
      position: 'relative',
      top: '-5px',
      marginRight: '10px',
      fontStretch: 'normal',
      fontStyle: 'normal',
      letterSpacing: '0.4px',
      textAlign: 'left',
      color: '#2f3d4a',
    },
    topicName: {
      marginBottom: '10px',
    },
  }),
);

export default function MyCourseCard({ add }: any) {
  const classes = useStyles();
  const createOrEdit = add ? 'addCourse' : 'editCourse';

  interface IMyCourseCardState {
    subTopics: any[];
  }

  const myCourseCardInitialState: IMyCourseCardState = {
    subTopics: [1],
  };

  const [myCourseCardState, setMyCourseCardState] = useState<
    IMyCourseCardState
  >({
    ...myCourseCardInitialState,
  });

  const updateAddSubTopic = () => {
    const subTopicsTemp = myCourseCardState.subTopics;
    subTopicsTemp.push(subTopicsTemp.length + 1);
    setMyCourseCardState({
      ...myCourseCardState,
      subTopics: subTopicsTemp,
    });
  };

  const addSubTopic = () => {
    return myCourseCardState.subTopics.map((el, i) => (
      <Grid container={true} xs={12} key={i}>
        <Grid item={true} xs={4} className={classes.alignLeft}>
          <TextField value="" width="lg" placeholder="Sub Topic" />
        </Grid>
        <Grid item={true} xs={4} className={classes.alignLeft}>
          <TextField type="file" width="lg" placeholder="Sub Topic" />
        </Grid>
        <Grid item={true} xs={4} className={classes.alignLeft}>
          <Button
            variant="contained"
            color="primary"
            onClick={updateAddSubTopic}>
            Add Sub topic
          </Button>
        </Grid>
      </Grid>
    ));
  };
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
            <TextField value="" width="md" placeholder="Course Overview" />
          </Grid>
          <Grid item={true} xs={12}>
            <div className={classes.topicsList}>
              <Typography variant="subtitle1" className={classes.topicName}>
                Getting started with Topics
              </Typography>
              <DivTypography variant="subtitle2" className={classes.topicItem}>
                <Subject className={classes.topicItem} fontSize="small" />
                <Typography className={classes.subTopicName} component="span">
                  Introduction
                </Typography>
                <Close className={classes.closeTopic} />
              </DivTypography>
              <Typography variant="subtitle2" className={classes.topicItem}>
                <Subject className={classes.topicItem} fontSize="small" />
                <Typography className={classes.subTopicName} component="span">
                  Introduction 2
                </Typography>
                <Close className={classes.closeTopic} />
              </Typography>
              <Typography variant="subtitle2" className={classes.topicItem}>
                <Subject className={classes.topicItem} fontSize="small" />
                <Typography className={classes.subTopicName} component="span">
                  Introduction 3
                </Typography>
                <Close className={classes.closeTopic} />
              </Typography>
              <Typography variant="subtitle2" className={classes.topicItem}>
                <Subject className={classes.topicItem} fontSize="small" />
                <Typography className={classes.subTopicName} component="span">
                  Introduction 4
                </Typography>
                <Close className={classes.closeTopic} />
              </Typography>
              <Typography variant="subtitle2" className={classes.topicItem}>
                <Subject className={classes.topicItem} fontSize="small" />
                <Typography className={classes.subTopicName} component="span">
                  Introduction 5
                </Typography>
                <Close className={classes.closeTopic} />
              </Typography>
            </div>
          </Grid>
          <Grid item={true} xs={12}>
            <div className={classes.topicsList}>
              <Accordion className={classes.topicsAccordion}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel-content"
                  id="panel-header">
                  <Typography>Add Topic</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid item={true}>
                    <Grid xs={12} md={12} item={true}>
                      {addSubTopic()}
                    </Grid>
                    <Grid xs={12} md={12} item={true}>
                      <Button variant="contained" color="primary">
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </div>
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
