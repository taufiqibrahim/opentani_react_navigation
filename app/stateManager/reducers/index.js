import {REHYDRATE} from 'redux-persist/constants';
import {
  ONBOARDING_FINISHED,
  SIGNUP_ONGOING,
  SIGNUP_SUCCESS,
  SIGNUP_VERIFIED,
  LOGIN_ONGOING,
  LOGIN_SUCCESS,
  LOGIN_VERIFIED,
  LOGOUT_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  rehydrated: false,
  isOnboard: false,
  isSignedUp: false,
  isSignedUpOngoing: false,
  isSignedUpAndVerified: false,
  isLoggedIn: false,
  isLoggedInOngoing: false,
  isLoggedInAndVerified: false,
  otpTransport: null,
  userName: null,
  email: null,
  phone: null,
  phoneOnScreen: null,
}

export default function appState(state = initialState, action) {
  switch(action.type) {
    case REHYDRATE:
      return {...state, ...action.payload.appState, rehydrated: true}
    case ONBOARDING_FINISHED:
      return Object.assign({}, state, {
        isOnboard: true,
      })
    case SIGNUP_ONGOING:
      return Object.assign({}, state, {
        isSignedUp: false,
        isSignedUpOngoing: true,
        isSignedUpAndVerified: false,
      })
    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isSignedUp: true,
        isSignedUpOngoing: false,
        isSignedUpAndVerified: false,
        otpTransport: action.otpTransport,
        userName: action.userName,
        email: action.email,
        phone: action.phone,
        phoneOnScreen: action.phoneOnScreen,
      })
    case SIGNUP_VERIFIED:
      return Object.assign({}, state, {
        isSignedUp: false,
        isSignedUpOngoing: false,
        isSignedUpAndVerified: true,
        token: action.token,
      })
    case LOGIN_ONGOING:
      return Object.assign({}, state, {
        isLoggedIn: false,
        isLoggedInOngoing: true,
        isLoggedInAndVerified: false,
        otpTransport: action.otpTransport,
        userName: action.userName,
        email: action.email,
        phone: action.phone,
        phoneOnScreen: action.phoneOnScreen,
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        isLoggedInOngoing: false,
        isLoggedInAndVerified: false,
        otpTransport: action.otpTransport,
        userName: action.userName,
        email: action.email,
        phone: action.phone,
        phoneOnScreen: action.phoneOnScreen,
      })
    case LOGIN_VERIFIED:
      return Object.assign({}, state, {
        isLoggedIn: false,
        isLoggedInOngoing: false,
        isLoggedInAndVerified: true,
        otpTransport: null,
        userName: null,
        email: null,
        phone: null,
        phoneOnScreen: null,
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isSignedUp: false,
        isSignedUpOngoing: false,
        isSignedUpAndVerified: false,
        isLoggedIn: false,
        isLoggedInOngoing: false,
        isLoggedInAndVerified: false,
        otpTransport: null,
        userName: null,
        email: null,
        phone: null,
        phoneOnScreen: null,
      })
    default:
      return state;
  }
}