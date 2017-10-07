import { combineReducers } from 'redux';
import nav from '../navigations/reducers/'
import appState from '../stateManager/reducers';
import signup from '../containers/Signup/reducers/';
import login from '../containers/Login/reducers/';
import profile from '../containers/Profile/reducers/';

export default combineReducers({
  nav: nav,
  appState,
  signup,
  login,
  profile,

  // nav: nav,

})