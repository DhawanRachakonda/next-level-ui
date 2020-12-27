import {
  INextLevelStreamBaseAction,
  NextLevelStreamActionTypes,
} from './actionTypes';

type handlersTypes = Partial<Record<NextLevelStreamActionTypes, any>>;

export function createReducer<T, V>(initialState: T, handlers: handlersTypes) {
  return function reducer(state: T, action: INextLevelStreamBaseAction<V>): T {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type]!(state, action);
    } else {
      return state;
    }
  };
}
