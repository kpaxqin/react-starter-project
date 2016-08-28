import 'babel-polyfill';
import { render } from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import getRoutes from './routes.jsx';
import reducer from './reducer';
import './index.scss';

const store = applyMiddleware(
  routerMiddleware(hashHistory),
  thunk,
  createLogger()
)(createStore)(reducer);

const enhancedHistory = syncHistoryWithStore(hashHistory, store);

const routes = getRoutes(store);

render(
  <Provider store={store}>
    <Router history={enhancedHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);


if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducer', () => {
    // eslint-disable-next-line global-require
    const nextRootReducer = require('./reducer').default;

    store.replaceReducer(nextRootReducer);
  });
}
