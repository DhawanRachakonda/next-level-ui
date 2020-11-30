import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, Card, Button } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import DivTypography from 'containers/typography/DivTypography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      margin: 'auto',
      maxWidth: '300px',
      textAlign: 'center',
    },
    formRoot: {
      width: '100%',
      marginTop: theme.spacing(2),
      position: 'relative',
    },
    formGrid: {
      '& .MuiGrid-item': {
        position: 'relative',
        minHeight: '330px',
        '&:nth-child(even)': {
          '& .MuiPaper-root': {
            position: 'absolute',
            top: '8%',
            right: '6%',
          },
        },
      },
    },
    cardRoot: {
      border: '1px solid #dfe7ec',
      borderRadius: 10,
      backgroundColor: '#fcfeff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '88%',
      width: '88%',
      margin: 'auto',
      '& .MuiTypography-root': {
        maxWidth: '85%',
        margin: 'auto',
        textAlign: 'center',
        display: 'block',
      },
      '& .MuiTypography-body2': {
        marginTop: theme.spacing(2),
      },
      '& .MuiTypography-body1': {
        color: '#b8c5cc',
        fontSize: 24,
        fontWeight: 'normal',
      },
      '& .MuiSvgIcon-root': {
        display: 'block',
        margin: 'auto',
      },
    },
    browseButton: {
      display: 'flex',
      justifyContent: 'center',
      margin: theme.spacing(3),
      '& .MuiButtonBase-root': {
        borderRadius: 30,
      },
    },
  }),
);

export default function Subjects() {
  const classes = useStyles();

  return (
    <section>
      <DivTypography
        variant="h4"
        gutterBottom={true}
        className={classes.heading}>
        <FormattedMessage id="browseSubjects.heading" />
      </DivTypography>
      <div className={classes.formRoot}>
        <Grid
          className={classes.formGrid}
          container={true}
          justify="space-evenly">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Grid key={item} item={true} xs={12} sm={6} md={3}>
              <Card className={classes.cardRoot}>
                <div>
                  <CloudUploadIcon />
                  <DivTypography variant="body1">
                    Business & Management
                  </DivTypography>
                  <DivTypography variant="caption" gutterBottom={true}>
                    Adipiscing tristique risus nec feugiat. Nunc aliquet
                    bibendum enim facilisis gravida.
                  </DivTypography>
                  <DivTypography variant="body2" gutterBottom={true}>
                    11 Courses
                  </DivTypography>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.browseButton}>
        <Button variant="contained" color="primary">
          <FormattedMessage id="browseAllSubjects.label.btn" />
        </Button>
      </div>
    </section>
  );
}
