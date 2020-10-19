import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AppLayout from '../screens/Layout_mobile';
import Login from '../screens/login/Login';

export default function NextLevelRouter() {
  return (
    <Router>
      <Switch>
        <Redirect exact={true} from="/" to="/home" />
        <Route path="/home" component={AppLayout} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}
