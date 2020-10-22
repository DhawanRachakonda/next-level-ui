import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
  });

export type NextLevelApState = ReturnType<typeof rootReducer>;

export default rootReducer;
