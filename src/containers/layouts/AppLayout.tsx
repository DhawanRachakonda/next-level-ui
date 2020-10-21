import React from 'react';

// material UI styles
import { withStyles } from '@material-ui/core/styles';

// Material UI components
import Container from '@material-ui/core/Container';

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
    </AppContainer>
  );
}

export default NextLevelContainer;
