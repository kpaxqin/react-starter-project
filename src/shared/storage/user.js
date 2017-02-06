import { isObject } from 'lodash';

const USER_STORAGE_KEY = 'user';

function setUser(user) {
  if (!isObject(user)) {
    throw new TypeError('user should be an object');
  }
  window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  return Promise.resolve(user);
}

function removeUser() {
  window.localStorage.removeItem(USER_STORAGE_KEY);

  return Promise.resolve(null);
}

function getUser() {
  const user = JSON.parse(window.localStorage.getItem(USER_STORAGE_KEY));

  return user ? Promise.resolve(user) : Promise.reject();
}

function getToken() {
  // TODO: Put token to another storage item so we don't call JSON.parse every time
  const user = JSON.parse(window.localStorage.getItem(USER_STORAGE_KEY));
  return user ? user.token : undefined;
}

export default {
  setUser,
  removeUser,
  getUser,
  getToken,
};

