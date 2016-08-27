import React from 'react';
import { FormControl as Input, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { reduxForm, propTypes } from 'redux-form';

function showError(field) {
  return field.touched && field.error;
}

function LoginForm(props) {
  const { fields: { username, password }, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup validationState={showError(username) ? 'error' : undefined}>
        <Input
          type="text"
          label="username"
          value={username.value}
          onChange={username.onChange}
        />
        {
          showError(username) && <ControlLabel>{username.error}</ControlLabel>
        }
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          label="password"
          value={password.value}
          onChange={password.onChange}
        />
      </FormGroup>
      <Button
        type="submit"
      >
        submit
      </Button>
    </form>
  );
}

LoginForm.propTypes = propTypes;

const ReduxLoginForm = reduxForm({
  form: 'login',
  fields: ['username', 'password'],
  validate(value) {
    const errors = {};
    if (!value.username) {
      errors.username = 'User name is required';
    }

    return errors;
  },
}, () => ({
  initialValues: {
    username: 'admin',
    password: '123',
  },
}))(LoginForm);

export default ReduxLoginForm;

