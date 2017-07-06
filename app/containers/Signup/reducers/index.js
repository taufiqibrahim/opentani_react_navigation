import {
  SIGNUP_FORM_FILL,
  SIGNUP_CHECK_EXISTS,
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
  phoneOnScreen: null,
  email: null,
  otpTransport: null,
}

export default function signup(state = initialState, action) {
  switch(action.type) {
    case SIGNUP_FORM_FILL:
      return Object.assign({}, state, {
        isSignedIn: false,
        isSigningIn: false,
        isFillingForm: true,
        name: action.name,
        phone: action.phone,
        phoneOnScreen: action.phoneOnScreen,
        email: action.email,
        otpTransport: action.otpTransport,
      })
    case SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isSignedIn: false,
        isSigningIn: true,
        isFillingForm: false,
        name: action.name,
        phone: action.phone,
        phoneOnScreen: action.phoneOnScreen,
        email: action.email,
        otpTransport: action.otpTransport,
      })
    default:
      return state;
  }
}