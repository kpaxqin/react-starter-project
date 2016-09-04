import { createReducer } from 'redux-action-tools';
import actionTypes from '../../account/constants/actionTypes';

const { LOGIN, ENSURE_USER } = actionTypes;
const setUser = (state, action) => ({ ...action.payload });
const cleanUser = () => null;
const initUser = null;

const reducer = createReducer()
  .when(LOGIN)
  .done(setUser)
  .failed(cleanUser)
  .when(ENSURE_USER, setUser)
  .when('LOGOUT', cleanUser)
  .build(initUser);

export default reducer;
