import {
  SIGNUP_FORM_FILL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  isSignedIn: false,
  isSigningIn: false,
  isFillingForm: false,
  name: null,
  phone: null,
}

export default function signup(state = initialState, action) {
  switch(action.type) {
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
    default:
      return state;
  }
}