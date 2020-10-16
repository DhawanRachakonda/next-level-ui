import React from 'react';
import './AppStyles.scss';

import AppLayout from 'screens/Layout';

import ThemeProvider from 'providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <AppLayout />
    </ThemeProvider>
  );
}

export default App;
