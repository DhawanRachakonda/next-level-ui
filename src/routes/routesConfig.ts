import { lazy } from 'react';
import paths from './paths';

const HomePage = lazy(() => import('screens/home'));
const TopicPage = lazy(() => import('screens/topic'));
const LoginPage = lazy(() => import('screens/login'));
const AgoraPage = lazy(() => import('screens/agora-page'));
const SignUpPage = lazy(() => import('screens/signup'));
const DashboardPage = lazy(() => import('screens/dashboard'));
const LiveClassesPage = lazy(() => import('screens/live-classes'));
const PageNotFound = lazy(() => import('screens/404/PageNotFound'));
const AgoraCall = lazy(() => import('screens/agora-call-page/AAgoraCall'));

export default [
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
    path: paths.agora.path,
    Component: AgoraPage,
    exact: true,
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
    exact: true,
    isSecure: false,
    displayMenu: false,
  },
  {
    path: paths.agoraCall.path,
    Component: AgoraCall,
    exact: true,
    isSecure: true,
    displayMenu: true,
  },
  {
    path: paths.home.path,
    Component: HomePage,
    exact: true,
    isSecure: false,
    displayMenu: false,
  },
  {
    path: '/',
    Component: HomePage,
    exact: true,
    isSecure: false,
    displayMenu: false,
  },
  {
    path: '*',
    Component: PageNotFound,
    isSecure: false,
    displayMenu: false,
  },
];
