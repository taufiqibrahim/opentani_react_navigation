import {
  ONBOARDING_FINISHED
} from './actionTypes';
import { NavigationActions } from 'react-navigation';

export function onboardingFinished() {
  return {
    type: ONBOARDING_FINISHED,
  }
}

export function navigateAfterBoot(data) {
  const navigateActions = NavigationActions.navigate({
    routeName: data.routeStack,
    params: {},
    action: NavigationActions.navigate({ routeName: data.routeName })
  }); 
  return dispatch => {
    dispatch(navigateActions);
  }
}

