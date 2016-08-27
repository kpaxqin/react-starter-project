
export default {
  setUser(user) {
    window.localStorage.setItem('user', JSON.stringify(user));
    return Promise.resolve(user);
  },
  getUser() {
    const user = JSON.parse(window.localStorage.getItem('user'));

    return user ? Promise.resolve(user) : Promise.reject();
  },
};

