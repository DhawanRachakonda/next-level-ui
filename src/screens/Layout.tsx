import React from 'react';

import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

import NonSecureHeader from './headers/NonSecureHeader';

const useStyles = makeStyles((theme) => ({
  headerDividerToolbar: {
    [theme.breakpoints.up('sm')]: {
      marginTop: '3rem',
    },
  },
}));

function AppLayout() {
  const styles = useStyles();
  return (
    <Container maxWidth={false} className="app-container">
      <NonSecureHeader />
      <Toolbar classes={{ root: styles.headerDividerToolbar }} />
      <Box>
        `Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur etc. ksdkas ijdlasjd asjdsdj asjd`
      </Box>
    </Container>
  );
}

export default AppLayout;
