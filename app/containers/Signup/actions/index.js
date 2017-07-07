import {
  SIGNUP_FORM_FILL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOADER_SHOW,
  LOADER_HIDE,
} from './actionTypes';

export function signupFormFill(data) {
  return {
    type: SIGNUP_FORM_FILL,
    name: data.name,
    email: data.email,
    phone: data.phone,
    phoneOnScreen: data.phoneOnScreen,
    otpTransport: data.otpTransport,
  }
}

export function signupLoaderShow() {
  return {
    type: LOADER_SHOW,
    isLoading: true,
  }
}

export function signupLoaderHide() {
  return {
    type: LOADER_HIDE,
    isLoading: false,
  }
}