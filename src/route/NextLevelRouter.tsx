import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// import { ConnectedRouter as Router } from 'connected-react-router';

///////////////////////////// Local imports /////////////////////////////

import routes from 'routes/routesConfig';

// components
import NextLevelAppLayout from 'screens/NextLevelAppLayout';

function NextLevelRoutes() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route: any) {
  if (route.isRedirect) {
    return <Redirect exact={true} from={route.from} to={route.to} />;
  }
  if (route.exact) {
    return (
      <Route
        exact
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
        <React.Fragment>
          <h1>Comming</h1>
          <route.Component {...props} routes={route.routes} />
        </React.Fragment>
      )}
    />
  );
}

export default NextLevelRoutes;
