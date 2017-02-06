import { createAction, createAsyncAction } from 'redux-action-tools';
import { startAsyncValidation, stopAsyncValidation } from 'redux-form';
import { routerActions } from 'react-router-redux';
import auth from '../../shared/api/auth';
import userStorage from '../../shared/storage/user';
import actionTypes from '../constants/actionTypes';

const LOGIN_FORM = 'login';

const loginAction = createAsyncAction(actionTypes.LOGIN, (user, dispatch) => {
  dispatch(startAsyncValidation(LOGIN_FORM));

  return auth
    .login(user)
    .then(data => userStorage.setUser(data))
    .then(data => {
      dispatch(stopAsyncValidation(LOGIN_FORM));
      dispatch(routerActions.push('/'));
      return data;
    })
    .catch(err => {
      dispatch(stopAsyncValidation(LOGIN_FORM, {
        username: err.message,
      }));
      throw err;
    });
});

const ensureUser = createAction(actionTypes.ENSURE_USER);
const logout = createAsyncAction(actionTypes.LOGOUT, (data, dispatch) => {
  return userStorage.removeUser()
    .then(() => {
      dispatch(routerActions.push('/login'));
      return null;
    });
});

export default {
  loginAction,
  ensureUser,
  logout,
};
