import {REHYDRATE} from 'redux-persist/constants';
import {
  ONBOARDING_FINISHED,
} from '../actions/actionTypes';

const initialState = {
  rehydrated: false,
  isOnboard: false,
  isSignedIn: false,
}

export default function userState(state = initialState, action) {
  switch(action.type) {
    /* TODO ADD OTHER STATE
      
    */
    case REHYDRATE:
      return {...state, ...action.payload.userState, rehydrated: true}
    case ONBOARDING_FINISHED:
      return Object.assign({}, state, {
        isOnboard: true,
      })
    default:
      return state;
  }
}