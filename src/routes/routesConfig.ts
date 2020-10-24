import paths from './paths';
import { lazy } from 'react';

const HomePage = lazy(() => import('screens/home'));
const LoginPage = lazy(() => import('screens/login'));
const SignUpPage = lazy(() => import('screens/signup'));
const PageNotFound = lazy(() => import('screens/404/PageNotFound'));

export default [
  {
    path: paths.home.path,
    Component: HomePage,
    exact: false,
    isSecure: false,
  },
  {
    path: paths.login.path,
    Component: LoginPage,
    exact: true,
    isSecure: false,
  },
  {
    path: paths.signUp.path,
    Component: SignUpPage,
    exact: true,
    isSecure: false,
  },
  {
    path: '/',
    Component: HomePage,
    exact: true,
    isSecure: false,
  },
  {
    path: '*',
    Component: PageNotFound,
    isSecure: false,
  },
];
