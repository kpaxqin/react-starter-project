import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import userStorage from '../storage/user';

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
    saveUser(user) {
      return {
        type: 'USER_FETCHED',
        payload: user,
      };
    },
  })(CheckLogin);
}

export default connectAuthCheck;

