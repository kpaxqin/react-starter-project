import 'whatwg-fetch';

const baseUrl = process.env.config.server.url;

function fetch2(url, config) {
  return fetch(url, config)
    .then(response => Promise.all([response, response.json()]))
    .then(([response, responseJson]) => {
      const isSuccess = response.status >= 200 && response.status < 300;
      if (!isSuccess) {
        throw responseJson;
      }
      return responseJson;
    });
}

export default {
  login(user) {
    return fetch2(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  },
};

