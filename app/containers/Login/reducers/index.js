import {
  LOGIN_FORM_FILL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_VERIFICATION_REQUEST,
  LOGIN_VERIFICATION_SUCCESS,
  LOGIN_VERIFICATION_FAILURE,
  LOADER_SHOW,
  LOADER_HIDE,
} from '../actions/actionTypes';

const initialState = {
  isFillingForm: false,
  isLoggingIn: false,
  isLoggedIn: false,
  isVerifying: false,
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

export default function login(state = initialState, action) {
  switch(action.type) {
    case LOGIN_FORM_FILL:
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
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoggingIn: true,
        userName: action.userName,
        name: action.name,
        phone: action.phone,
        phoneOnScreen: action.phoneOnScreen,
        email: action.email,
        otpTransport: action.otpTransport,
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        isLoggingIn: false,
        isFillingForm: false,
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isLoggedIn: false,
        isLoggingIn: false,
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
    case LOGIN_VERIFICATION_REQUEST:
      return Object.assign({}, state, {
        isVerifying: true,
      })
    case LOGIN_VERIFICATION_SUCCESS:
      return Object.assign({}, state, {
        isVerifying: false,
        isVerified: true,
      })
    case LOGIN_VERIFICATION_FAILURE:
      return Object.assign({}, state, {
        isVerifying: false,
      })
    default:
      return state;
  }
}