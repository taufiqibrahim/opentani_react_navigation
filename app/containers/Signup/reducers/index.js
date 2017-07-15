import {
  SIGNUP_FORM_FILL,
  SIGNUP_CHECK_EXISTS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_VERIFICATION_REQUEST,
  SIGNUP_VERIFICATION_SUCCESS,
  SIGNUP_VERIFICATION_FAILURE,
  LOADER_SHOW,
  LOADER_HIDE,
} from '../actions/actionTypes';

const initialState = {
  isFillingForm: false,
  isSigningIn: false,
  isSignedUp: false,
  isVerified: false,
  isLoading: false,
  userName: null,
  name: null,
  phone: null,
  phoneOnScreen: null,
  email: null,
  otpTransport: null,
  otp: null,
}

export default function signup(state = initialState, action) {
  switch(action.type) {
    case SIGNUP_FORM_FILL:
      return Object.assign({}, state, {
        isFillingForm: true,
        userName: action.userName,
        name: action.name,
        phone: action.phone,
        phoneOnScreen: action.phoneOnScreen,
        email: action.email,
        otpTransport: action.otpTransport,
        otp: action.otp,
      })
    case SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isSigningIn: true,
        userName: action.userName,
        name: action.name,
        phone: action.phone,
        phoneOnScreen: action.phoneOnScreen,
        email: action.email,
        otpTransport: action.otpTransport,
      })
    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isSignedUp: true,
        isSigningIn: false,
        isFillingForm: false,
      })
    case LOADER_SHOW:
      return Object.assign({}, state, {
        isLoading: true,
      })
    case LOADER_HIDE:
      return Object.assign({}, state, {
        isLoading: false,
      })
    default:
      return state;
  }
}