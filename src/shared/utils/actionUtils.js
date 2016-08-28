import _ from 'lodash';

export function getActionTypes(prefix, types) {
  const hasPrefix = arguments.length === 2;

  return _.reduce(_.keys(types), (acc, v, k) => ({
    ...acc,
    [k]: hasPrefix ? `${prefix}/${k}` : k,
  }), {});
}

export default {
  getActionTypes,
};

