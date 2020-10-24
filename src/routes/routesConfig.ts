import paths from './paths';
import { lazy } from 'react';

const HomePage = lazy(() => import('screens/home'));
const LoginPage = lazy(() => import('screens/login'));
const SignUpPage = lazy(() => import('screens/signup'));
const LiveClassesPage = lazy(() => import('screens/live-classes'));
const PageNotFound = lazy(() => import('screens/404/PageNotFound'));

export default [
  {
    path: paths.home.path,
    Component: HomePage,
    exact: false,
    isSecure: true,
    displayMenu: true,
  },
  {
    path: paths.login.path,
    Component: LoginPage,
    exact: true,
    isSecure: false,
    displayMenu: false,
  },
  {
    path: paths.signUp.path,
    Component: SignUpPage,
    exact: true,
    isSecure: false,
    displayMenu: false,
  },
  {
    path: paths.liveclasses.path,
    Component: LiveClassesPage,
    exact: true,
    isSecure: true,
    displayMenu: true,
  },
  {
    isRedirect: true,
    from: '/',
    to: '/home',
  },
  {
    path: '*',
    Component: PageNotFound,
    isSecure: false,
    displayMenu: false,
  },
];
