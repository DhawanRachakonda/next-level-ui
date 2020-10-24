import { createHashHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from 'store/reducers';

export const history = createHashHistory();

function configureStoreWithHistory(
  preloadedState: any = {},
  browserHistory = history,
) {
  const composeEnhancer =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(browserHistory),
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

export type NextLevelStore = ReturnType<typeof configureStoreWithHistory>;

export default configureStoreWithHistory;
