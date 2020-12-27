import axios from 'axios';

import { BroadcastChannel } from 'broadcast-channel';

import UserServices from './user';

const instance = axios.create({});

const loginEventsChannel = new BroadcastChannel('login-events-channel');

instance.interceptors.request.use(
  (config) => {
    const token = UserServices.getAccessToken();
    if (token) {
      config.headers.Authorization = token;
    }
    config.headers['Content-Type'] = 'application/json';

    // login required client credentials in header
    if (config.url === UserServices.getUserLoginURL()) {
      config.headers.Authorization = process.env.REACT_APP_AUTH_HEADER;
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      loginEventsChannel.postMessage('login');
    } else {
      return Promise.reject(error);
    }
  },
);

export default instance;
