import _ from 'lodash';

export function getActionTypes(prefix, types) {
  const hasPrefix = arguments.length === 2;
  const target = hasPrefix ? types : prefix;

  return _.reduce(_.keys(target), (acc, k) => ({
    ...acc,
    [k]: hasPrefix ? `@@${prefix}/${k}` : k,
  }), {});
}

class ActionHandler {
  constructor() {
    this.currentAction = undefined;
    this.handlers = {};
  }
  when(actionType, handler) {
    this.currentAction = actionType;
    this.handlers[actionType] = handler;
    return this;
  }
  done(handler) {
    this.handlers[`${this.currentAction}_COMPLETED`] = handler;
    return this;
  }
  failed(handler) {
    this.handlers[`${this.currentAction}_FAILED`] = handler;
    return this;
  }
  build(initValue = null) {
    return (state = initValue, action) => {
      // debugger
      const handler = this.handlers[action.type];

      if (typeof handler === 'function') {
        return handler(state, action);
      }

      return state;
    };
  }
}

export function handleActions() {
  return new ActionHandler();
}

export default {
  handleActions,
  getActionTypes,
};

