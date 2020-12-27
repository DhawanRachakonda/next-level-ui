import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useIntl } from 'react-intl';

import { makeStyles } from '@material-ui/core/styles';
import { shallowEqual, useSelector } from 'react-redux';

////// local imports
import { NextLevelAppState } from 'store/reducers';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

interface PrivilegeView {
  children: React.ReactNode;
  privilegeName: string;
  hide403?: boolean;
}

function PrivilegeView({
  children,
  privilegeName,
  hide403 = true,
}: PrivilegeView) {
  const classes = useStyles();
  const { formatMessage } = useIntl();

  const userPrivileges = useSelector(
    (state: NextLevelAppState) => state.user.privileges,
    shallowEqual,
  );

  if (userPrivileges.indexOf(privilegeName) >= 0) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  const message = formatMessage({
    id: 'access.privilege.missing',
  }).replace(':privilegeName', privilegeName);
  return (
    <React.Fragment>
      {!hide403 && (
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="body2" component="p">
              {message}
            </Typography>
          </CardContent>
        </Card>
      )}
    </React.Fragment>
  );
}

export default PrivilegeView;
