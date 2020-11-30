import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';

// local imports
import DivTypography from 'containers/typography/DivTypography';
import MyCourses from 'containers/my-courses';

function LiveClasses() {
  return (
    <>
      <DivTypography variant="h3">
        <FormattedMessage id="liveClasses.heading" />
      </DivTypography>
      <Grid container={true}>
        <MyCourses heading="liveClasses.heading" />
        <MyCourses heading="upcomingClasses.heading" />
      </Grid>
    </>
  );
}

export default LiveClasses;
