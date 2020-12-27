import { IUserActions, IUserState } from './types';
import { EReduxActionTypes } from '../action-types';
import { appState } from '../initialState';

export default function (
  state: IUserState = appState.user!,
  action: IUserActions,
) {
  switch (action.type) {
    case EReduxActionTypes.SET_USER_LOGGED_IN:
      return {
        ...state,
        isFetching: false,
        isSuccess: true,
        userDetails: action.payload.userDetails,
        message: '',
        isBadCredentials: false,
      };
    case EReduxActionTypes.FETCH_USER:
      return { ...state, isFetching: true, isSuccess: false };
    case EReduxActionTypes.SET_BAD_CREDENTIALS:
      return {
        ...state,
        isFetching: false,
        isSuccess: false,
        isBadCredentials: true,
      };
    case EReduxActionTypes.SET_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        isSuccess: false,
        message: action.payload.message,
        isBadCredentials: false,
      };
    case EReduxActionTypes.LOGOUT_USER:
      return {
        ...state,
        isFetching: false,
        isSuccess: true,
        userDetails: {
          user_type: '',
          company_name: '',
          user_name: '',
        },
      };
    case EReduxActionTypes.SET_PRIVILEGES:
      return {
        ...state,
        privileges: action.payload.data,
      };
    case EReduxActionTypes.ERROR_SET_PRIVILEGES:
      return {
        ...state,
        privileges: action.payload.data,
      };
    default:
      return state;
  }
}
