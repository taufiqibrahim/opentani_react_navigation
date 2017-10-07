import {
  ONBOARDING_FINISHED,
  SIGNUP_ONGOING,
  SIGNUP_SUCCESS,
  SIGNUP_VERIFIED,
  LOGIN_ONGOING,
  LOGIN_SUCCESS,
  LOGIN_VERIFIED,
  LOGOUT_SUCCESS,
} from './actionTypes';
import { NavigationActions } from 'react-navigation';

export function navigateAfterBoot(route) {
  const navigateActions = NavigationActions.reset({
    //routeName: route.routeStack,
    //params: {},
    index: 0,
    key: null,
    actions: [
      NavigationActions.navigate({
        routeName: route.routeStack,
        params: {},
        action: NavigationActions.navigate({ routeName: route.routeName, key: route.routeName })
      })
    ]
  }); 
  return dispatch => {
    dispatch(navigateActions);
  }
}
export function appOnboardingFinished() {
  return {
    type: ONBOARDING_FINISHED,
  }
}
export function appSignupOngoing() {
  return {
    type: SIGNUP_ONGOING,
  }
}
export function appSignupSuccess(cred) {
  return {
    type: SIGNUP_SUCCESS,
    otpTransport: cred.otpTransport,
    userName: cred.userName,
    email: cred.email,
    phone: cred.phone,
    phoneOnScreen: cred.phoneOnScreen,
  }
}
export function appSignupVerified() {
  return {
    type: SIGNUP_VERIFIED,
  }
}
export function appLoginOngoing() {
  return {
    type: LOGIN_ONGOING,
  }
}
export function appLoginSuccess(cred) {
  return {
    type: LOGIN_SUCCESS,
    otpTransport: cred.otpTransport,
    userName: cred.userName,
    email: cred.email,
    phone: cred.phone,
    phoneOnScreen: cred.phoneOnScreen,
  }
}
export function appLoginVerified() {
  return {
    type: LOGIN_VERIFIED,
  }
}
export function appLogoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  }
}