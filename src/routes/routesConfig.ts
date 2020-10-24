import { lazy } from 'react';
import paths from './paths';

const HomePage = lazy(() => import('screens/home'));
const TopicPage = lazy(() => import('screens/topic'));
const LoginPage = lazy(() => import('screens/login'));
const SignUpPage = lazy(() => import('screens/signup'));
const PageNotFound = lazy(() => import('screens/404/PageNotFound'));

export default [
  {
    path: paths.home.path,
    Component: HomePage,
    exact: false,
    isSecure: false,
    displayMenu: false,
  },
  {
    path: paths.topic.path,
    Component: TopicPage,
    exact: true,
    isSecure: false,
    displayMenu: false,
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
