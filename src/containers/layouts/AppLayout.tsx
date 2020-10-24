import React from 'react';

// material UI styles
import { withStyles } from '@material-ui/core/styles';

// Material UI components
import Container from '@material-ui/core/Container';
import ScrollToTop from 'containers/utils/ScrollToTop';

interface INextLevelContainerProps {
  children: any;
}

const AppContainer = withStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      padding: '0em 5em',
    },
  },
}))(Container);

function NextLevelContainer({ children }: INextLevelContainerProps) {
  return (
    <AppContainer maxWidth={false} className="app-container">
      {children}
      <ScrollToTop rootElement="#back-to-top-anchor" />
    </AppContainer>
  );
}

export default NextLevelContainer;
