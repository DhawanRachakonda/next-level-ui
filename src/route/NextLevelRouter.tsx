import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import { ConnectedRouter as Router } from 'connected-react-router';

///////////////////////////// Local imports /////////////////////////////

// import routes from 'routes/routesConfig';

// components
import ComponentLoader from 'containers/loaders/ComponentLoader';
import NextLevelAppLayout from 'screens/NextLevelAppLayout';

const HomePage = lazy(() => import('screens/home'));
const TopicPage = lazy(() => import('screens/topic'));
const LoginPage = lazy(() => import('screens/login'));
const SignUpPage = lazy(() => import('screens/signup'));
const DashboardPage = lazy(() => import('screens/dashboard'));
const LiveClassesPage = lazy(() => import('screens/live-classes'));
const PageNotFound = lazy(() => import('screens/404/PageNotFound'));
const AgoraPage = lazy(() => import('screens/agora-page'));
const AgoraCall = lazy(() => import('screens/agora-call-page/AAgoraCall'));
const AddCoursePage = lazy(() => import('screens/add-course'));
const AdminAddCoursePage = lazy(() => import('screens/admin-add-course'));

function NextLevelRoutes() {
  return (
    <Suspense fallback={<ComponentLoader />}>
      <Switch>
        <Redirect exact={true} from="/" to="/home" />
        <Route
          path="/home"
          render={() => (
            <NextLevelAppLayout isSecure={false} displayMenu={false}>
              <HomePage />
            </NextLevelAppLayout>
          )}
        />
        <Route
          path="/topic"
          render={() => (
            <NextLevelAppLayout isSecure={true} displayMenu={true}>
              <TopicPage />
            </NextLevelAppLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <NextLevelAppLayout isSecure={false} displayMenu={false}>
              <LoginPage />
            </NextLevelAppLayout>
          )}
        />
        <Route
          path="/sign-up"
          render={() => (
            <NextLevelAppLayout isSecure={false} displayMenu={false}>
              <SignUpPage />
            </NextLevelAppLayout>
          )}
        />
        <Route
          path="/dashboard"
          render={() => (
            <NextLevelAppLayout isSecure={true} displayMenu={true}>
              <DashboardPage />
            </NextLevelAppLayout>
          )}
        />
        <Route
          path="/live-classes"
          render={() => (
            <NextLevelAppLayout isSecure={true} displayMenu={true}>
              <LiveClassesPage />
            </NextLevelAppLayout>
          )}
        />
        <Route
          path="/agora-page"
          render={() => (
            <NextLevelAppLayout isSecure={true} displayMenu={true}>
              <AgoraPage />
            </NextLevelAppLayout>
          )}
        />
        <Route
          path="/agora-call-page"
          render={() => (
            <NextLevelAppLayout isSecure={true} displayMenu={true}>
              <AgoraCall />
            </NextLevelAppLayout>
          )}
        />
        <Route
          path="/admin-add-course"
          render={() => (
            <NextLevelAppLayout isSecure={true} displayMenu={true}>
              <AdminAddCoursePage />
            </NextLevelAppLayout>
          )}
        />
        <Route
          path="/add-course"
          render={() => (
            <NextLevelAppLayout isSecure={true} displayMenu={true}>
              <AddCoursePage add={true} />
            </NextLevelAppLayout>
          )}
        />
        <Route
          path="/edit-course"
          render={() => (
            <NextLevelAppLayout isSecure={true} displayMenu={true}>
              <AddCoursePage add={false} />
            </NextLevelAppLayout>
          )}
        />
        <Route
          path="*"
          render={() => (
            <NextLevelAppLayout isSecure={false}>
              <PageNotFound />
            </NextLevelAppLayout>
          )}
        />
      </Switch>
    </Suspense>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
// function RouteWithSubRoutes(route: any) {
//   if (route.exact) {
//     return (
//       <Route
//         exact={true}
//         path={route.path}
//         render={(props: any) => (
//           // pass the sub-routes down to keep nesting
//           <NextLevelAppLayout {...props} {...route}>
//             <route.Component {...props} routes={route.routes} />
//           </NextLevelAppLayout>
//         )}
//       />
//     );
//   }
//   return (
//     <Route
//       path={route.path}
//       render={(props: any) => (
//         // pass the sub-routes down to keep nesting
//         <NextLevelAppLayout {...props} {...route}>
//           <route.Component {...props} routes={route.routes} />
//         </NextLevelAppLayout>
//       )}
//     />
//   );
// }

export default NextLevelRoutes;
