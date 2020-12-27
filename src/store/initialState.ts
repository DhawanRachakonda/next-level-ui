import UserServices from 'services/user';
import { NextLevelAppState } from './reducers';

const { user_type, company_name, user_name } = UserServices.getUserDetails();

const appState: NextLevelAppState = {
  user: {
    userDetails: {
      user_type,
      company_name,
      user_name,
    },
    privileges: [],
    isFetching: user_name ? false : true,
    isSuccess: true,
    message: '',
    isBadCredentials: false,
  },
};

export { appState };
