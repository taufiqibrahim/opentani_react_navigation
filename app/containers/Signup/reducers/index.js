import {
  SIGNUP_FORM_FILL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_VERIFICATION_REQUEST,
  SIGNUP_VERIFICATION_SUCCESS,
  SIGNUP_VERIFICATION_FAILURE,
  SIGNUP_RESEND_OTP_REQUEST,
  SIGNUP_RESEND_OTP_SUCCESS,
  SIGNUP_RESEND_OTP_FAILURE,
  SIGNUP_LOADER_SHOW,
  SIGNUP_LOADER_HIDE,
  SIGNUP_MODAL_SHOW,
  SIGNUP_MODAL_HIDE,
} from '../actions/actionTypes';

const initialState = {
  isFillingForm: false,
  isSigningIn: false,
  isSignedUp: false,
  isVerifying: false,
  isVerified: false,
  isResendOtpRequesting: false,
  isResendOtpRequested: false,
  isLoading: false,
  isModalVisible: false,
  modalMessage: null,
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

    case SIGNUP_VERIFICATION_REQUEST:
      return Object.assign({}, state, {
        isVerifying: true,
      })
    case SIGNUP_VERIFICATION_SUCCESS:
      return Object.assign({}, state, {
        isVerified: true,
        isVerifying: false,
        isFillingForm: false,
      })
    case SIGNUP_VERIFICATION_FAILURE:
      return Object.assign({}, state, {
        isVerified: false,
        isVerifying: false,
        isFillingForm: false,
      })

    case SIGNUP_RESEND_OTP_REQUEST:
      return Object.assign({}, state, {
        isResendOtpRequesting: true,
        isResendOtpRequested: false,
      })
    case SIGNUP_RESEND_OTP_SUCCESS:
      return Object.assign({}, state, {
        isResendOtpRequesting: false,
        isResendOtpRequested: true,
        otp: null,
      })
    case SIGNUP_RESEND_OTP_FAILURE:
      return Object.assign({}, state, {
        isResendOtpRequesting: false,
        isResendOtpRequested: false,
      })

    case SIGNUP_LOADER_SHOW:
      return Object.assign({}, state, {
        isLoading: true,
      })
    case SIGNUP_LOADER_HIDE:
      return Object.assign({}, state, {
        isLoading: false,
      })

    case SIGNUP_MODAL_SHOW:
      return Object.assign({}, state, {
        isModalVisible: true,
        modalMessage: action.modalMessage,
      })
    case SIGNUP_MODAL_HIDE:
      return Object.assign({}, state, {
        isModalVisible: false,
        modalMessage: null,
      })

    default:
      return state;
  }
}