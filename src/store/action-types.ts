export enum EReduxActionTypes {
  // user related
  SET_USER_LOGGED_IN = 'USER_LOGGED_IN',
  FETCH_USER = 'FETCH_USER',
  LOGOUT_USER = 'LOGOUT_USER',
  SET_BAD_CREDENTIALS = 'SET_BAD_CREDENTIALS',
  SET_USER_ERROR = 'SET_USER_ERROR',
  SET_PRIVILEGES = 'SET_PRIVILEGES',
  ERROR_SET_PRIVILEGES = 'ERROR_SET_PRIVILEGES',
}

export interface IReduxBaseAction {
  type: EReduxActionTypes;
  payload: any;
}
