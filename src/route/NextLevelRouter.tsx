import React, { Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// import { ConnectedRouter as Router } from 'connected-react-router';

///////////////////////////// Local imports /////////////////////////////

import routes from 'routes/routesConfig';

// components
import ComponentLoader from 'containers/loaders/ComponentLoader';
import NextLevelAppLayout from 'screens/NextLevelAppLayout';

function NextLevelRoutes() {
  return (
    <Router>
      <Suspense fallback={<ComponentLoader />}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route: any) {
  if (route.exact) {
    return (
      <Route
        exact={true}
        path={route.path}
        render={(props: any) => (
          // pass the sub-routes down to keep nesting
          <NextLevelAppLayout {...props} {...route}>
            <route.Component {...props} routes={route.routes} />
          </NextLevelAppLayout>
        )}
      />
    );
  }
  return (
    <Route
      path={route.path}
      render={(props: any) => (
        // pass the sub-routes down to keep nesting
        <NextLevelAppLayout {...props} {...route}>
          <route.Component {...props} routes={route.routes} />
        </NextLevelAppLayout>
      )}
    />
  );
}

export default NextLevelRoutes;
