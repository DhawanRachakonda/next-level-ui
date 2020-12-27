import { IReduxBaseAction, EReduxActionTypes } from '../action-types';

export type UserCredentials = {
  userName: string;
  password: string;
};

export type User = {
  user_type: string;
  company_name: string;
  user_name: string;
};

export interface IUserState {
  userDetails?: User;
  privileges: string[];
  isFetching: boolean;
  isSuccess: boolean;
  message: string;
}

export interface IFetchUserAction extends IReduxBaseAction {
  type: EReduxActionTypes.FETCH_USER;
  payload: {};
}

export interface ISetUserAction extends IReduxBaseAction {
  type: EReduxActionTypes.SET_USER_LOGGED_IN;
  payload: {
    userDetails: User;
  };
}

export interface ISetUserErrorAction extends IReduxBaseAction {
  type: EReduxActionTypes.SET_USER_ERROR;
  payload: {
    message: string;
  };
}

export interface ILogoutUser extends IReduxBaseAction {
  type: EReduxActionTypes.LOGOUT_USER;
  payload: {};
}

export interface ISetPrivileges extends IReduxBaseAction {
  type: EReduxActionTypes.SET_PRIVILEGES;
  payload: {
    data: string[];
  };
}

export interface ISetErrorPrivileges extends IReduxBaseAction {
  type: EReduxActionTypes.ERROR_SET_PRIVILEGES;
  payload: {
    data: string[];
  };
}

export interface ISetBadCredentials extends IReduxBaseAction {
  type: EReduxActionTypes.SET_BAD_CREDENTIALS;
  payload: {};
}

export type IUserActions =
  | IFetchUserAction
  | ISetUserAction
  | ISetUserErrorAction
  | ILogoutUser
  | ISetErrorPrivileges
  | ISetPrivileges
  | ISetBadCredentials;
