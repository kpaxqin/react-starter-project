import React from 'react';
import { Route } from 'react-router';
import account from './account';
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
        component={account.Login}
      />
      <Route
        path="/"
        onEnter={ensureLoggedIn(store)}
        component={Dashboard}
      />
    </Route>
  );
}

export default getRoutes;
