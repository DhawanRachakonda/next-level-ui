import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { userReducer } from 'store/user';

const reducers = {
  user: userReducer,
};

const reducerState = combineReducers({
  ...reducers,
});

const rootReducer = (history: any) =>
  combineReducers({
    ...reducers,
    router: connectRouter(history),
  });

export type NextLevelAppState = ReturnType<typeof reducerState>;

export default rootReducer;
