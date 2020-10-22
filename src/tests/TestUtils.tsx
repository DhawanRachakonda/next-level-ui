import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import NextLevelIntl from 'lang/NextLevelIntl';

import { configureStore, NextLevelStore } from 'store';

interface IRouterProps {
  route?: string;
  history?: ReturnType<typeof createMemoryHistory>;
}

interface IStateProps {
  history?: ReturnType<typeof createMemoryHistory>;
  initialState?: any;
  store?: NextLevelStore;
}

function createInitialState(): any {
  return {
    router: {},
  };
}

function render(ui: JSX.Element, { ...options } = {}) {
  function Wrapper({ children }: any) {
    return <NextLevelIntl>{children}</NextLevelIntl>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export function withRouter({
  route = '/',
  history = createMemoryHistory({ initialEntries: [route + ''] }),
}: IRouterProps) {
  const container = (component: JSX.Element) => (
    <Router history={history}> {component}</Router>
  );
  return {
    container,
    history,
  };
}

export function withProvider({
  // tslint:disable-next-line: no-unnecessary-initializer
  history = undefined,
  initialState = createInitialState(),
  store = configureStore(initialState, history),
}: IStateProps = {}) {
  const container = (component: JSX.Element) => (
    <Provider store={store}>{component}</Provider>
  );
  return {
    container,
    store,
  };
}

export function withRouterAndProvider({
  route = '/',
  history = createMemoryHistory({ initialEntries: [route] }),
  initialState = createInitialState(),
  store = configureStore(initialState, history),
}: IStateProps & IRouterProps = {}) {
  const { container: wrapHistory, history: memHistory } = withRouter({
    route,
    history,
  });
  const { container: wrapProvider, store: globalStore } = withProvider({
    initialState,
    store,
  });
  return {
    container: (component: JSX.Element) => wrapProvider(wrapHistory(component)),
    globalStore,
    memHistory,
  };
}

export * from '@testing-library/react';
export { render };
