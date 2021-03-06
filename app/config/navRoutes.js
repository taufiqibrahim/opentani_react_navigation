import {
  StackNavigator,
} from 'react-navigation';

import OnboardingScreen from '../containers/Onboarding';

import SignupNameScreen from '../containers/Signup/screens/SignupName';
import SignupPhoneScreen from '../containers/Signup/screens/SignupPhone';

import MainScreen from '../containers/Main';

const OnboardingStack = StackNavigator({
	Onboarding: {screen: OnboardingScreen},
})

const SignupStack = StackNavigator({
	SignupName: {screen: SignupNameScreen},
  SignupPhone: {screen: SignupPhoneScreen}
},
{
  navigationOptions: {
    header: null,
    initialRouteName: 'SignupPhone',
  }
})

/*
 * Chain all the Routes
 */
const navRoutes = {
  //Onboarding: {screen: OnboardingStack},
  //Main: { screen: MainScreen},
  Signup: {screen: SignupStack},
  //SignupName: {screen: SignupNameScreen},
  //SignupPhone: {screen: SignupPhoneScreen},
  //Main: { screen: MainScreen},
}

export default navRoutes;