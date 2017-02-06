import 'whatwg-fetch';
import _ from 'lodash';
import userStorage from '../storage/user';

const baseUrl = _.get(process.env.config, 'server.url');

function fetchApi(url, config) {
  const finalConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'API-TOKEN': userStorage.getToken(),
    },
    ...config,
  };
  // TODO: ignore baseUrl when the url string contains protocol like 'http://'
  const finalUrl = config.ignoreBaseUrl ? url : `${baseUrl}/${url}`;

  return fetch(finalUrl, finalConfig)
  .then((response) => {
    const responseJson = response.json();
    const isSuccess = response.status >= 200 && response.status < 300;
    if (!isSuccess) {
      throw responseJson;
    }
    return responseJson;
  });
}


export default fetchApi;

