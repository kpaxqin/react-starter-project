import React, { Component } from 'react';
import User from '../../user';

function connectAuthCheck(roles, Content) {
  return class AuthedComponent extends Component {
    constructor() {
      super();
      this.state = {
        authed: false,
      };
    }
    componentWillMount() {
      if (User.isLogin() && User.hasRole(roles)) {
        this.setState({ authed: true });
      } else {
        redirect('403');
      }
    }
    render() {
      const { authed } = this.state;
      return (
        authed ? <Content {...this.props} /> : null
      );
    }
  };
}

/*
  <Route
   path="dashboard"
   component={connectAuthCheck(['manager', 'admin'], Dashboard)}
  />
*/

export default connectAuthCheck;

