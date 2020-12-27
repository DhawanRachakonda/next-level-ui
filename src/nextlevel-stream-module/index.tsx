import React from 'react';

import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router, Route } from 'react-router';

import Home from 'nextlevel-stream-module/screens/home';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  // Key can be whatever you want
  routing: routingStore,
  // ...other stores
};

const history = syncHistoryWithStore(browserHistory, routingStore);

function NextLevelStreamModule() {
  return (
    <Provider {...stores}>
      <Router history={history}>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact={true} path="/classRoom">
          <Home />
        </Route>
      </Router>
    </Provider>
  );
}

export default NextLevelStreamModule;
