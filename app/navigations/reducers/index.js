import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../AppNavigator';

//const initialNavAction = NavigationActions.navigate({ routeName: 'SignupPhone' });
//const initialNavState = AppNavigator.router.getStateForAction(initialNavAction);
// const initialNavState = AppNavigator.router.getStateForAction('SignupPhone');

// export default function nav(state = initialNavState, action) {
  
//   return state;
//   console.log('NavReducer')

//   let nextState;
//   switch (action.type) {
//     case 'signupPhone':
//       nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({routeName:'SignupPhone'}));
//       break;

//     /* to do other stacks not yet implemented: LOGIN, LOGOUT
//     case LOGIN:
//       nextState = ...
//       break;
//     case LOGOUT:
//       nextState = ...
//       break;
//     */

//     default:
//       nextState = AppNavigator.router.getStateForAction(action, state);
//       console.log('default')
//       break;
//   }

//   return nextState || state;
// }

/*
const NavReducer = combineReducers({
  nav,
})

export default NavReducer;*/

export default function nav(state, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}