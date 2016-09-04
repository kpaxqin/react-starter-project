import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import actions from '../actions';

const style = {
  width: 500,
  marginTop: 200,
};

class Login extends Component {
  onSubmit = (user) => {
    this.props.loginAction(user);
  };

  render() {
    return (
      <div className="login container" style={style}>
        <LoginForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

Login.propTypes = {
  loginAction: PropTypes.func,
};

export default connect(state => state, {
  ...actions,
})(Login);
