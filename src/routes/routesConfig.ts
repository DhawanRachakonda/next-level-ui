import paths from './paths';

import HomePage from 'screens/home';
import LoginPage from 'screens/login';
import SignUpPage from 'screens/signup';
import PageNotFound from 'screens/404/PageNotFound';

export default [
  {
    isRedirect: true,
    from: '/',
    to: '/home',
  },
  {
    path: '/home',
    Component: HomePage,
    exact: false,
    isSecure: false,
  },
  {
    path: paths.login.path,
    Component: LoginPage,
    exact: false,
    isSecure: false,
  },
  {
    path: paths.signUp.path,
    Component: SignUpPage,
    exact: false,
    isSecure: false,
  },
  {
    path: '*',
    Component: PageNotFound,
    isSecure: false,
  },
];
