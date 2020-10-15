import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme, GlobalStyles } from 'themes';

interface IAppThemeProviderProps {
  children: ReactNode;
}

function AppThemeProvider({ children }: IAppThemeProviderProps) {
  // Return the layout based on the current theme
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
}

export default AppThemeProvider;
