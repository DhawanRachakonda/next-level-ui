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
import NextLevelIntlProvider from 'lang/NextLevelIntl';

// components
import BroadcastListener from 'screens/listeners';
import ScreenInitializer from 'screens/init';

const store = configureStore();

export type AppDispatch = typeof store.dispatch;

function App() {
  return (
    <NextLevelIntlProvider>
      <ThemeProvider>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <ScreenInitializer />
            <BroadcastListener />
            <NextLevelRouter />
          </ConnectedRouter>
        </Provider>
      </ThemeProvider>
    </NextLevelIntlProvider>
  );
}

export default App;
