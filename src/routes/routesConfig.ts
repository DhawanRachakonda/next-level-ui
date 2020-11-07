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
const AgoraCall = lazy(() => import('screens/agora-call-page/AgoraCall'));

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
    path: paths.agora.path,
    Component: AgoraPage,
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
    path: paths.dashboard.path,
    Component: DashboardPage,
    exact: true,
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
