import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import LoginForm from './LoginForm';

const style = {
  width: 500,
  marginTop: 200,
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.push('/dashboard');
  }

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
  push: PropTypes.func,
};

export default connect(state => state, routerActions)(Login);
