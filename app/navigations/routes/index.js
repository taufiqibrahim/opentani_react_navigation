import {
  StackNavigator,
} from 'react-navigation';

import OnboardingScreen from '../../containers/Onboarding';

import SignupNameScreen from '../../containers/Signup/screens/SignupName';
import SignupPhoneScreen from '../../containers/Signup/screens/SignupPhone';

import MainScreen from '../../containers/Main';

const navOptions = {
  navigationOptions: {
    header: null
  },
}

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
  }
})

/*
 * Chain all the Routes
 */
const chainRoutes = {
  //Onboarding: {screen: OnboardingStack},
  //Main: { screen: MainScreen},
  Signup: {screen: SignupStack},
  //SignupName: {screen: SignupNameScreen},
  //SignupPhone: {screen: SignupPhoneScreen},
  //Main: { screen: MainScreen},
}

const navRoutes = StackNavigator({
  Root: {
    screen: StackNavigator({
      SignupName: { screen: SignupNameScreen },
      SignupPhone: {screen: SignupPhoneScreen},
    })
  }
});

export default navRoutes;