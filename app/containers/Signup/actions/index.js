import {
  SIGNUP_FORM_FILL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
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

