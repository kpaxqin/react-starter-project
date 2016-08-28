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
        .then(data => userStorage.setUser(data))
        .then(() => {
          dispatch(stopAsyncValidation(LOGIN_FORM));
          dispatch(routerActions.push('/'));
        })
        .catch(err => {
          dispatch(stopAsyncValidation(LOGIN_FORM, {
            username: err.message,
          }));
        }));

    dispatch(startAsyncValidation(LOGIN_FORM));
    dispatch(promiseThunk(user));
  };
}

export default {
  loginAction,
};
