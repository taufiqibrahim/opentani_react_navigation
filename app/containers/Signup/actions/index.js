import {
  SIGNUP_FORM_FILL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from './actionTypes';

export function signupFormFill(name) {
  return {
    type: SIGNUP_FORM_FILL,
    name
  }
}