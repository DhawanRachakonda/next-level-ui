import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import { ConnectedRouter as Router } from 'connected-react-router';

///////////////////////////// Local imports /////////////////////////////

import routes from 'routes/routesConfig';

// components
import ComponentLoader from 'containers/loaders/ComponentLoader';
import NextLevelAppLayout from 'screens/NextLevelAppLayout';

function NextLevelRoutes() {
  return (
    <Suspense fallback={<ComponentLoader />}>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Suspense>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route: any) {
  if (route.isRedirect) {
    return <Redirect exact={true} from={route.from} to={route.to} />;
  }
  return (
    <Route
      exact={!!route.exact}
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