import { combineReducers } from 'redux';
import nav from '../navigations/reducers/'
import userState from '../stateManager/reducers';
import signup from '../containers/Signup/reducers/';

export default combineReducers({
  nav: nav,
  userState,
  signup,
})