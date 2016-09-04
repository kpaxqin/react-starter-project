import actionTypes from '../../account/constants/actionTypes';
import { handleActions } from '../utils/actionUtils';

const { LOGIN, USER_ENSURED } = actionTypes;
const setUser = (state, action) => ({ ...action.payload });
const cleanUser = () => null;
const initUser = null;

const reducer = handleActions()
  .when(LOGIN)
  .done(setUser)
  .failed(cleanUser)
  .when(USER_ENSURED, setUser)
  .when('LOGOUT', cleanUser)
  .build(initUser);

export default reducer;
