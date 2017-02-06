import fetchApi from './fetchApi';

export default {
  login(user) {
    return fetchApi('auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  },
};

