import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AppLayout from '../screens/Layout';
import Login from '../screens/login/Login';
import SignUp from '../screens/signup/SignUp';

export default function NextLevelRouter() {
  return (
    <Router>
      <Switch>
        <Redirect exact={true} from="/" to="/home" />
        <Route path="/home" component={AppLayout} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}
