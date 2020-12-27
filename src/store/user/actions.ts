import { EReduxActionTypes } from '../action-types';

import UserServices, { UserLogin } from 'services/user';
import AppStorage from 'services/appStorage';
import AppUtil from 'util/appUtil';
import { AppDispatch } from '../../App';

interface LoginResponse {
  access_token: string;
  user_name: string;
  user_type: string;
  company_name: string;
}

export const login = (loginParams: UserLogin) => {
  return async (dispatch: any) => {
    try {
      dispatch({
        type: EReduxActionTypes.FETCH_USER,
        payload: {},
      });
      const response = await UserServices.login<LoginResponse>(loginParams);
      if (response.isSuccess) {
        const {
          access_token,
          user_name,
          user_type,
          company_name,
        } = response.payload;
        const userDetails = {
          access_token,
          user_name,
          user_type,
          company_name,
        };
        AppStorage.setItem('user_details', JSON.stringify(userDetails));
        dispatch({
          type: EReduxActionTypes.SET_USER_LOGGED_IN,
          payload: { userDetails },
        });
      } else if (response.status === 400) {
        dispatch({
          type: EReduxActionTypes.SET_BAD_CREDENTIALS,
          payload: {},
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: EReduxActionTypes.SET_USER_ERROR,
        payload: {
          message: error.message,
        },
      });
      if (error.response) {
        // error from axios
        return error.response;
      }
    }
  };
};

export const getPrivileges = () => async (dispatch: AppDispatch) => {
  try {
    const privilegesResponse = await UserServices.getPrivileges();
    if (AppUtil.isResponseSuccessSeries(privilegesResponse)) {
      const privileges = privilegesResponse.data;
      dispatch({
        type: EReduxActionTypes.SET_PRIVILEGES,
        payload: {
          data: privileges,
        },
      });
    } else {
      dispatch({
        type: EReduxActionTypes.ERROR_SET_PRIVILEGES,
        payload: {
          data: [],
        },
      });
      console.error(
        'Something went wrong while getting privileges',
        privilegesResponse.data,
      );
    }
  } catch (error) {
    console.error('Error while getting privileges', error);
  }
};

export const logout = () => async (dispatch: any) => {
  try {
    await UserServices.logout();
  } catch (error) {
    console.error(error);
  }
  dispatch({
    type: EReduxActionTypes.LOGOUT_USER,
    payload: {},
  });
};
