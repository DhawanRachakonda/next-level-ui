import React from 'react';

// styles
import './AppStyles.scss';

///////////////////////////// Local imports /////////////////////////////

// router
import NextLevelRouter from 'route';

// Theme
import ThemeProvider from 'providers/ThemeProvider';

// store
//import { history, configureStore } from 'store';
import NextLevelIntlProvider from 'lang/NextLevelIntl';

//const store = configureStore();

function App() {
  return (
    <NextLevelIntlProvider>
      <ThemeProvider>
        <NextLevelRouter />
        {/* <Provider store={store}>
          <ConnectedRouter history={history}>
            
          </ConnectedRouter>
        </Provider> */}
      </ThemeProvider>
    </NextLevelIntlProvider>
  );
}

export default App;
