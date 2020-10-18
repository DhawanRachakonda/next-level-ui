import React from 'react';
import './AppStyles.scss';

import NextLevelRouter from './routing/Router';

import ThemeProvider from 'providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <NextLevelRouter />
    </ThemeProvider>
  );
}

export default App;
