import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import userStorage from '../storage/user';
import accountActions from '../../account/actions';

function connectAuthCheck(Content) {
  class CheckLogin extends Component {
    constructor() {
      super();
      this.state = {
        authed: false,
      };
    }
    componentWillMount() {
      userStorage.getUser()
        .then(user => {
          this.props.saveUser(user);
          this.setState({ authed: true });
        })
        .catch(() => {
          this.props.replace('login');
        });
    }
    render() {
      const { authed } = this.state;
      return (
        authed ? <Content {...this.props} /> : null
      );
    }
  }

  CheckLogin.propTypes = {
    saveUser: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  };

  return connect(state => state, {
    ...routerActions,
  })(CheckLogin);
}

export function ensureLoggedIn(store) {
  return (nextState, replace, next) => {
    userStorage.getUser()
      .then(user => {
        store.dispatch(accountActions.ensureUser(user));
        next();
      })
      .catch(() => {
        replace('/login');
        next();
      });
  };
}

export function ensureNotLoggedIn(nextState, replace, next) {
  userStorage.getUser()
    .then(() => {
      replace('/');
      next();
    })
    .catch(() => {
      next();
    });
}

export default connectAuthCheck;

