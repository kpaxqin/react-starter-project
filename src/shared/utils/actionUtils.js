import _ from 'lodash';

export function getActionTypes(prefix, types) {
  const hasPrefix = arguments.length === 2;
  const target = hasPrefix ? types : prefix;

  return _.reduce(_.keys(target), (acc, k) => ({
    ...acc,
    [k]: hasPrefix ? `@@${prefix}/${k}` : k,
  }), {});
}

export default {
  getActionTypes,
};

