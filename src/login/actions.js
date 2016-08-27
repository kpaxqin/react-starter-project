import { createPromiseThunk } from 'redux-promise-thunk';
import { startAsyncValidation, stopAsyncValidation } from 'redux-form';
import { routerActions } from 'react-router-redux';
import auth from '../shared/api/auth';
import userStorage from '../shared/storage/user';

const LOGIN_FORM = 'login';
function loginAction(user) {
  return function loginActionThunk(dispatch) {
    const promiseThunk = createPromiseThunk('LOGIN', () => auth
        .login(user)
        .then(data => {
          dispatch(stopAsyncValidation(LOGIN_FORM));

          return userStorage.setUser(data);
        })
        .then(data => {
          dispatch(routerActions.push('/dashboard'));
          return data;
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
