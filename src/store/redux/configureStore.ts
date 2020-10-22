import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from 'store/reducers';

export const history = createBrowserHistory();

function configureStoreWithHistory(preloadedState: any = {}) {
  const composeEnhancer =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(routerMiddleware(history))),
  );

  // Hot reloading
  if ((module as any).hot) {
    // Enable Webpack hot module replacement for reducers
    (module as any).hot.accept('store/reducers', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
}

export default configureStoreWithHistory;
