import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  PROFILE_LOADER_SHOW,
  PROFILE_LOADER_HIDE,
  PROFILE_MODAL_SHOW,
  PROFILE_MODAL_HIDE,
} from '../actions/actionTypes';

const initialState = {
  isLoggingOut: false,
  isLoggedOut: false,
  isLoading: false,
  isModalVisible: false,
  modalMessage: null,
}

export default function logout(state = initialState, action) {
  switch(action.type) {
    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        isLoggedOut: false,
        isLoggingOut: true,
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isLoggedOut: true,
        isLoggingOut: false,
      })
    case PROFILE_LOADER_SHOW:
      return Object.assign({}, state, {
        isLoading: true,
      })
    case PROFILE_LOADER_HIDE:
      return Object.assign({}, state, {
        isLoading: false,
      })
    case PROFILE_MODAL_SHOW:
      return Object.assign({}, state, {
        isModalVisible: true,
        modalMessage: action.modalMessage,
      })
    case PROFILE_MODAL_HIDE:
      return Object.assign({}, state, {
        isModalVisible: false,
      })
    default:
      return state;
  }
}