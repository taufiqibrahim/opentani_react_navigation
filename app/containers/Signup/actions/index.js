import {
  SIGNUP_FORM_FILL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_VERIFICATION_REQUEST,
  SIGNUP_VERIFICATION_SUCCESS,
  SIGNUP_VERIFICATION_FAILURE,
  LOADER_SHOW,
  LOADER_HIDE,
} from './actionTypes';
import { apiPostSignup } from '../services/apiPostSignup';
import { apiPostSignupVerification } from '../services/apiPostSignupVerification';
import { NavigationActions } from 'react-navigation';

export function signupFormFill(data) {
  return {
    type: SIGNUP_FORM_FILL,
    userName: data.userName,
    name: data.name,
    email: data.email,
    phone: data.phone,
    phoneOnScreen: data.phoneOnScreen,
    otpTransport: data.otpTransport,
    otp: data.otp,
  }
}

export function signupRequest(data) {
  return {
    type: SIGNUP_REQUEST,
    userName: data.userName,
    name: data.name,
    email: data.email,
    phone: data.phone,
    phoneOnScreen: data.phoneOnScreen,
    otpTransport: data.otpTransport,
    otp: data.otp,
  }
}

export function signupSuccess(response) {
  return dispatch => {
    dispatch({
      type: SIGNUP_SUCCESS,
      response,
    })
  }
}

export function signupFailure(error) {
  return {
    type: SIGNUP_FAILURE,
    error,
  }
}

export function signup(data) {
  const navigateActions = NavigationActions.navigate({
    routeName: 'Signup',
    params: {},
    action: NavigationActions.navigate({ routeName: 'SignupOTP' })
  }); 
  return dispatch => {

    // Process start
    dispatch(signupRequest(data));
    dispatch(signupLoaderShow());
    // Dispatching API call
    apiPostSignup(data)
    .then((response) => {    
      if ( response.code == undefined ) {
        // SIGNUP FAILURE WITH NO RESPONSE FROM API
        dispatch(signupFailure(response));
      }
      if ( response.code >= 200 && response.code < 300 ) {
        // SIGNUP OK
        dispatch(signupSuccess(response));
        dispatch(navigateActions);
      }
      else if ( response.code >= 300 ) {
        // SIGNUP FAILURE WITH RESPONSE FROM API
        dispatch(signupFailure(response));
      }
    })
    .catch((error) => {
      console.log(error);
    })
    // Process ended
    dispatch(signupLoaderHide());
  }
}

export function signupVerificationRequest(data) {
  return {
    type: SIGNUP_VERIFICATION_REQUEST,
    userName: data.userName,
    otp: data.otp,
  }
}

export function signupVerificationSuccess(response) {
  return dispatch => {
    dispatch({
      type: SIGNUP_VERIFICATION_SUCCESS,
      response,
    })
  }
}

export function signupVerificationFailure(error) {
  return {
    type: SIGNUP_VERIFICATION_FAILURE,
    error,
  }
}

export function signupVerification(data) {
  const navigateActions = NavigationActions.navigate({
    routeName: 'Home',
    params: {},
    action: NavigationActions.navigate({ routeName: 'Home' })
  }); 
  return dispatch => {

    // Process start
    dispatch(signupVerificationRequest(data));
    dispatch(signupLoaderShow());
    // Dispatching API call
    apiPostSignupVerification(data)
    .then((response) => {    
      if ( response.code == undefined ) {
        // SIGNUP FAILURE WITH NO RESPONSE FROM API
        dispatch(signupVerificationFailure(response));
      }
      if ( response.code >= 200 && response.code < 300 ) {
        // SIGNUP OK
        dispatch(signupVerificationSuccess(response));
        dispatch(navigateActions);
      }
      else if ( response.code >= 300 ) {
        // SIGNUP FAILURE WITH RESPONSE FROM API
        dispatch(signupVerificationFailure(response));
      }
    })
    .catch((error) => {
      console.log(error);
    })
    // Process ended
    dispatch(signupLoaderHide());
  }
}

export function signupLoaderShow() {
  return {
    type: LOADER_SHOW,
  }
}

export function signupLoaderHide() {
  return {
    type: LOADER_HIDE,
  }
}