import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, Card } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import DivTypography from 'containers/typography/DivTypography';
import MyCourseCard from 'containers/cards/AdminCourseCard';
import SelectField from 'containers/inputs/Select';
import PaginationComponent from 'containers/pagination/Pagination';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
      backgroundColor: '#ffffff',
      padding: '8px 16px',
    },
    formRoot: {
      width: '100%',
      position: 'relative',
    },
    formGrid: {
      '& .MuiGrid-item': {
        padding: theme.spacing(2),
      },
    },
    courseSelect: {
      '&& .MuiInputBase-root': {
        margin: theme.spacing(1),
        border: '1px solid #c9d3d8',
        borderRadius: 5,
        padding: '8px 16px',
        fontWeight: 'normal',
        '&:before': {
          content: 'none',
        },
        '&:after': {
          content: 'none',
        },
      },
    },
    cardRoot: {
      border: '1px dashed #22a7e9',
      backgroundColor: '#fcfeff',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& .MuiTypography-body1': {
        color: '#b8c5cc',
        fontSize: 24,
        fontWeight: 'normal',
        '& .MuiSvgIcon-root': {
          display: 'block',
          margin: 'auto',
        },
      },
    },
  }),
);

export default function AllCourses({ admin }: any) {
  const classes = useStyles();
  const courseList = admin ? [1, 2, 3, 4, 5, 6] : [1, 2, 3, 4, 5];

  return (
    <section>
      {admin ? (
        <DivTypography
          variant="h4"
          gutterBottom={true}
          className={classes.heading}>
          <FormattedMessage id={`allCourses.title`} />
        </DivTypography>
      ) : (
        <DivTypography variant="h6" className={classes.courseSelect}>
          <SelectField
            value="1"
            options={[
              { value: 1, label: 'All Courses' },
              { value: 2, label: 'Bio Chemistry Courses' },
            ]}
          />
        </DivTypography>
      )}
      <div className={classes.formRoot}>
        <Grid
          className={classes.formGrid}
          container={true}
          justify="space-evenly">
          {!admin && (
            <Grid item={true} xs={12} sm={6} md={4}>
              <Card className={classes.cardRoot}>
                <DivTypography variant="body1">
                  <CloudUploadIcon />
                  Create Live Class
                </DivTypography>
              </Card>
            </Grid>
          )}
          {courseList.map((item) => (
            <Grid key={item} item={true} xs={12} sm={6} md={4}>
              <MyCourseCard />
            </Grid>
          ))}
        </Grid>
        <PaginationComponent count={3} shape="rounded" />
      </div>
    </section>
  );
}
