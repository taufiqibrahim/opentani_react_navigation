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
} from './actionTypes';
import { apiPostLogin } from '../services/apiPostLogin';
import { apiPostLoginVerification } from '../services/apiPostLoginVerification';
import {
  appLoginOngoing,
  appLoginSuccess,
  appLoginVerified,
} from '../../../stateManager/actions';
import { NavigationActions } from 'react-navigation';

export function loginFormFill(data) {
  return {
    type: LOGIN_FORM_FILL,
    userName: data.userName,
    name: data.name,
    email: data.email,
    phone: data.phone,
    phoneOnScreen: data.phoneOnScreen,
    otpTransport: data.otpTransport,
    otp: data.otp,
  }
}

export function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    userName: data.userName,
    name: data.name,
    email: data.email,
    phone: data.phone,
    phoneOnScreen: data.phoneOnScreen,
    otpTransport: data.otpTransport,
    otp: data.otp,
  }
}

export function loginSuccess(response) {
  return dispatch => {
    dispatch({
      type: LOGIN_SUCCESS,
      response,
    })
  }
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  }
}

export function login(data) {
  const navigateActions = NavigationActions.navigate({
    routeName: 'Login',
    params: {},
    action: NavigationActions.navigate({ routeName: 'LoginOTP' })
  }); 
  return dispatch => {

    // Process start
    dispatch(loginRequest(data));
    dispatch(loginLoaderShow());
    // Dispatching API call
    apiPostLogin(data)
    .then((response) => {    
      if ( response.code == undefined ) {
        // LOGIN FAILURE WITH NO RESPONSE FROM API
        dispatch(loginFailure(response));
      }
      if ( response.code >= 200 && response.code < 300 ) {
        // LOGIN OK
        dispatch(loginSuccess(response));
        dispatch(appLoginSuccess(data));  // Update app state
        dispatch(navigateActions);
      }
      else if ( response.code >= 300 ) {
        // LOGIN FAILURE WITH RESPONSE FROM API
        dispatch(loginFailure(response));
      }
    })
    .catch((error) => {
      console.log(error);
    })
    // Process ended
    dispatch(loginLoaderHide());
  }
}

export function loginVerificationRequest(data) {
  return {
    type: LOGIN_VERIFICATION_REQUEST,
    userName: data.userName,
    otp: data.otp,
  }
}

export function loginVerificationSuccess(response) {
  return dispatch => {
    dispatch({
      type: LOGIN_VERIFICATION_SUCCESS,
      response,
    })
  }
}

export function loginVerificationFailure(error) {
  return {
    type: LOGIN_VERIFICATION_FAILURE,
    error,
  }
}

export function loginVerification(data) {
  const navigateActions = NavigationActions.navigate({
    routeName: 'Home',
    params: {},
    action: NavigationActions.navigate({ routeName: 'Home' })
  }); 
  return dispatch => {

    // Process start
    dispatch(loginVerificationRequest(data));
    dispatch(loginLoaderShow());
    // Dispatching API call
    apiPostLoginVerification(data)
    .then((response) => {    
      if ( response.code == undefined ) {
        // LOGIN FAILURE WITH NO RESPONSE FROM API
        dispatch(loginVerificationFailure(response));
      }
      if ( response.code >= 200 && response.code < 300 ) {
        // LOGIN OK
        dispatch(loginVerificationSuccess(response));
        dispatch(appLoginVerified()); // Update app state
        dispatch(navigateActions);
      }
      else if ( response.code >= 300 ) {
        // LOGIN FAILURE WITH RESPONSE FROM API
        dispatch(loginVerificationFailure(response));
      }
    })
    .catch((error) => {
      console.log(error);
    })
    // Process ended
    dispatch(loginLoaderHide());
  }
}

export function loginLoaderShow() {
  return {
    type: LOADER_SHOW,
  }
}

export function loginLoaderHide() {
  return {
    type: LOADER_HIDE,
  }
}