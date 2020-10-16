import React from 'react';

import Container from '@material-ui/core/Container';

import NonSecureHeader from './headers/NonSecureHeader';

function AppLayout() {
  return (
    <Container maxWidth="lg">
      <NonSecureHeader />
    </Container>
  );
}

export default AppLayout;
