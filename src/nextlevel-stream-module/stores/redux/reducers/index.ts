import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import StreamDetailsReducer from './streamDetails';

const rootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    streamDetails: StreamDetailsReducer,
  });

export type NextLevelStreamAppState = ReturnType<typeof rootReducer>;

export default rootReducer;
