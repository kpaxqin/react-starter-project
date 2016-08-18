import React from 'react';
import { FormControl as Input, FormGroup, Button } from 'react-bootstrap';
import { reduxForm, propTypes } from 'redux-form';

function LoginForm(props) {
  const { fields: { name }, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup validationState={name.error ? 'error' : undefined}>
        <Input
          type="text"
          label="name"
          value={name.value || ''}
          onChange={name.onChange}
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
  fields: ['name'],
  validate(value) {
    const errors = {};
    if (value.name === '1234') {
      errors.name = 'error';
    }

    return errors;
  },
})(LoginForm);

export default ReduxLoginForm;

