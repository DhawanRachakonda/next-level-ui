import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

// styles
import './AppStyles.scss';

///////////////////////////// Local imports /////////////////////////////

// router
import NextLevelRouter from 'route';

// Theme
import ThemeProvider from 'providers/ThemeProvider';

// store
import { history, configureStore } from 'store';

const store = configureStore();

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <NextLevelRouter />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
