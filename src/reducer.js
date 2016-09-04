import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import sharedReducers from './shared/reducers';

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  ...sharedReducers,
});
