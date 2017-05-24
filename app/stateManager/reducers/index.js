/*import {
  SIGNUP_FORM_FILL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions/actionTypes';*/

const initialState = {
  isOnboard: false,
  isSignedIn: false,
}

export default function userState(state = initialState, action) {
  switch(action.type) {
    /* TODO ADD OTHER STATE
    case SIGNUP_FORM_FILL:
      return Object.assign({}, state, {
        isSignedIn: false,
        isSigningIn: false,
        isFillingForm: true,
        name: action.name,
      })
    case SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isSignedIn: false,
        isSigningIn: true,
        isFillingForm: false,
        name: action.name,
      })
    */
    default:
      return state;
  }
}