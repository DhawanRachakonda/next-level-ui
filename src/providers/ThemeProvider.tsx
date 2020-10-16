import React, { ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { GlobalStyles } from 'themes';

interface IAppThemeProviderProps {
  children: ReactNode;
}

function AppThemeProvider({ children }: IAppThemeProviderProps) {
  const theme = GlobalStyles();
  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
