import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Login from './login/Login.jsx';
import Dashboard from './dashboard';
import App from './App';
import { ensureLoggedIn, ensureNotLoggedIn } from './shared/auth';

function getRoutes(store) {
  return (
    <Route
      component={App}
    >
      <Route
        path="/login"
        onEnter={ensureNotLoggedIn}
        component={Login}
      />
      <Route
        path="/"
        onEnter={ensureLoggedIn(store)}
        component={Dashboard}
      />
      <IndexRoute component={Login} />
    </Route>
  );
}

export default getRoutes;
