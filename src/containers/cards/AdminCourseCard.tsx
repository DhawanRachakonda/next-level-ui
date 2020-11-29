import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import AppUtil from 'util/appUtil';
import DateField from 'containers/inputs/DateField';
import DivTypography from 'containers/typography/DivTypography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      '& .MuiCardContent-root': {
        padding: '8px 0',
        '& .MuiTypography-h5': {
          color: '#302d3a',
        },
        '& .MuiTypography-body2': {
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(1),
          color: '#6d7b82',
          fontSize: 10,
          fontWeight: 'normal',
        },
        '& .MuiTypography-caption': {
          fontWeight: 'normal',
          fontSize: '1rem',
        },
      },
      '&:hover': {
        boxShadow: '0 0 5px #b3c1cd',
      },
    },
    cardHeader: {
      padding: '8px 0',
      '& .MuiCardHeader-avatar': {
        marginRight: theme.spacing(1),
      },
      '& .MuiCardHeader-title': {
        fontSize: 14,
        color: '#7a7a7a',
      },
      '& .MuiCardHeader-action': {
        margin: 'auto',
        '& .MuiFormControl-root': {
          margin: 0,
          width: '100px',
          minWidth: '100px',
          '& .MuiInputBase-input': {
            fontSize: 10,
            borderRadius: '4px',
          },
        },
      },
    },
    courseImage: {
      width: '100%',
    },
  }),
);

export default function AdminCourseCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img
        src={AppUtil.getCourseURL()}
        className={classes.courseImage}
        alt="course-cover"
      />
      <CardHeader
        className={classes.cardHeader}
        avatar={<Avatar alt={`Avatar`} src={AppUtil.getUserImageURL()} />}
        action={<DateField type="date" value="08-11-2020" />}
        title="Dr. Natasha"
      />
      <CardContent>
        <DivTypography variant="h5">Bio Chemistry</DivTypography>
        <DivTypography variant="body2" component="p">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet...
        </DivTypography>
        <DivTypography variant="caption">Class Type - Live</DivTypography>
      </CardContent>
    </Card>
  );
}
