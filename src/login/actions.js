import { createPromiseThunk } from 'redux-promise-thunk';
import { startAsyncValidation, stopAsyncValidation } from 'redux-form';
import { routerActions } from 'react-router-redux';
import auth from '../shared/api/auth';

const LOGIN_FORM = 'login';
function loginAction(user) {
  return function loginActionThunk(dispatch) {
    const promiseThunk = createPromiseThunk('LOGIN', () => auth
        .login(user)
        .then(data => {
          dispatch(stopAsyncValidation(LOGIN_FORM));

          return data;
        })
        .then(() => {
          dispatch(routerActions.push('/dashboard'));
        })
        .catch(err => {
          dispatch(stopAsyncValidation(LOGIN_FORM, {
            username: err.message,
          }));
          throw err;
        }));

    dispatch(startAsyncValidation(LOGIN_FORM));
    dispatch(promiseThunk(user));
  };
}

export default {
  loginAction,
};
