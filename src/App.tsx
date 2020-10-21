import React from 'react';
import './AppStyles.scss';

import NextLevelRouter from 'route';

import ThemeProvider from 'providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <NextLevelRouter />
    </ThemeProvider>
  );
}

export default App;
