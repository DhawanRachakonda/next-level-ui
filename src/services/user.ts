import AppUtil from 'util/appUtil';
import AppStorage from './appStorage';
import axios from './axios';
import Services from './services';

export interface UserLogin {
  userName: string;
  password: string;
}

export declare type NextLevelAxiosResponse<T> = {
  status: number;
  isSuccess: boolean;
  payload: T;
};

const loginEventsChannel = new BroadcastChannel('login-events-channel');

export default class UserServices extends Services {
  static async login<T>(
    credentials: UserLogin,
  ): Promise<NextLevelAxiosResponse<T>> {
    const params = new URLSearchParams();
    params.append('grant_type', process.env.REACT_APP_AUTH_GRANT_TYPE!);
    params.append('username', credentials.userName);
    params.append('password', credentials.password);

    const response = await axios.post<T>(Services.getUserLoginURL(), params);
    const nextLevelAPIResponse: NextLevelAxiosResponse<T> = {
      isSuccess: true,
      payload: response.data,
      status: response.status,
    };
    if (!AppUtil.isResponseSuccessSeries(response)) {
      nextLevelAPIResponse.isSuccess = false;
    } else {
      // show secure page
      loginEventsChannel.postMessage('authorizedUser');
    }

    return nextLevelAPIResponse;
  }
  static async logout() {
    AppStorage.setItem('user_details', '');
    return Promise.resolve('');
  }
  static isLoggedIn() {
    const userDetails = AppStorage.getItem('user_details');
    if (userDetails && JSON.parse(userDetails).access_token) return true;
    return false;
  }

  static getAccessToken() {
    if (UserServices.isLoggedIn()) {
      return JSON.parse(AppStorage.getItem('user_details')).access_token;
    }
    return '';
  }

  static getUserDetails() {
    const userDetailsObject = {
      user_type: '',
      company_name: process.env.REACT_APP_COLLEGE_NAME || '',
      user_name: '',
    };
    if (UserServices.isLoggedIn()) {
      const { user_type, user_name, company_name } = JSON.parse(
        AppStorage.getItem('user_details'),
      );
      userDetailsObject.user_type = user_type;
      userDetailsObject.company_name = company_name;
      userDetailsObject.user_name = user_name;
    }

    return userDetailsObject;
  }

  static getAuthenticatedUserName() {
    const { user_name } = UserServices.getUserDetails();
    return user_name;
  }

  static getPrivileges() {
    const URL = UserServices.getPrivilegesURL();
    return axios.get(URL);
  }
}
