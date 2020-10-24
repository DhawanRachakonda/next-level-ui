import { lazy } from 'react';
import paths from './paths';

const HomePage = lazy(() => import('screens/home'));
const TopicPage = lazy(() => import('screens/topic'));
const LoginPage = lazy(() => import('screens/login'));
const SignUpPage = lazy(() => import('screens/signup'));
const DashboardPage = lazy(() => import('screens/dashboard'));
const LiveClassesPage = lazy(() => import('screens/live-classes'));
const PageNotFound = lazy(() => import('screens/404/PageNotFound'));

export default [
  {
    path: '/',
    Component: HomePage,
    exact: true,
    isSecure: false,
    displayMenu: false,
  },
  {
    path: paths.home.path,
    Component: HomePage,
    exact: true,
    isSecure: false,
    displayMenu: false,
  },
  {
    path: paths.topic.path,
    Component: TopicPage,
    exact: false,
    isSecure: true,
    displayMenu: true,
  },
  {
    path: paths.login.path,
    Component: LoginPage,
    exact: false,
    isSecure: false,
    displayMenu: false,
  },
  {
    path: paths.signUp.path,
    Component: SignUpPage,
    exact: false,
    isSecure: false,
    displayMenu: false,
  },
  {
    path: paths.dashboard.path,
    Component: DashboardPage,
    exact: false,
    isSecure: true,
    displayMenu: true,
  },
  {
    path: paths.liveClasses.path,
    Component: LiveClassesPage,
    exact: false,
    isSecure: true,
    displayMenu: true,
  },
  {
    path: '*',
    Component: PageNotFound,
    isSecure: false,
    displayMenu: false,
  },
];
