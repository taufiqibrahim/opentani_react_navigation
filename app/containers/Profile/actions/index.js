import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  PROFILE_LOADER_SHOW,
  PROFILE_LOADER_HIDE,
  PROFILE_MODAL_SHOW,
  PROFILE_MODAL_HIDE,
} from './actionTypes';
import { apiPostLogout } from '../services/apiPostLogout';

export function logoutRequest(data) {
  return {
    type: LOGOUT_REQUEST,
    userName: data.userName,
    name: data.name,
    email: data.email,
    phone: data.phone,
    phoneOnScreen: data.phoneOnScreen,
    otpTransport: data.otpTransport,
    otp: data.otp,
  }
}

export function logoutSuccess(response) {
  return dispatch => {
    dispatch({
      type: LOGOUT_SUCCESS,
      response,
    })
  }
}

export function logoutFailure(error) {
  return {
    type: LOGOUT_FAILURE,
    error,
  }
}

export function logout(data) {

  return dispatch => {
    dispatch(profileModalShow());
  }
}

export function profileLoaderShow() {
  return {
    type: PROFILE_LOADER_SHOW,
  }
}

export function profileLoaderHide() {
  return {
    type: PROFILE_LOADER_HIDE,
  }
}

export function profileModalShow(response) {
  return {
    type: PROFILE_MODAL_SHOW,
    // modalMessage: response.message,
    modalMessage: 'You sure?'
  }
}

export function profileModalHide() {
  return {
    type: PROFILE_MODAL_HIDE,
  }
}

export function hideModal() {
  return dispatch => {
    dispatch(profileModalHide())
  }
}