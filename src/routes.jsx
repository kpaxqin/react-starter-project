import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Login from './login/Login.jsx';
import Dashboard from './dashboard';
import App from './App';

const routes = (
  <Route
    path="/"
    component={App}
  >
    <Route
      path="login"
      component={Login}
    />
    <Route
      path="dashboard"
      component={Dashboard}
    />
    <IndexRoute component={Login} />
  </Route>
);

export default routes;
