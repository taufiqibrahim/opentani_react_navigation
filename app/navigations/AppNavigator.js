import {
  StackNavigator,
} from 'react-navigation';
import OnboardingScreen from '../containers/Onboarding/screens';
import WallScreen from '../containers/Wall/screens/'
import SignupNameScreen from '../containers/Signup/screens/SignupName';
import SignupChooseCommScreen from '../containers/Signup/screens/SignupChooseComm';
import SignupEmailScreen from '../containers/Signup/screens/SignupEmail';
import SignupPhoneScreen from '../containers/Signup/screens/SignupPhone';
import SignupSubmitConfirmationScreen from '../containers/Signup/screens/SignupSubmitConfirmation';
import SignupOTPScreen from '../containers/Signup/screens/SignupOTP';
import HomeScreen from '../containers/Home';

import TestScreen from '../components/Loader/StandardLoader';

const navOptions = {
  navigationOptions: {
    header: null
  },
}

const TestStack = StackNavigator({
  Test: {screen: TestScreen},
})

const OnboardingStack = StackNavigator({
  Onboarding: {screen: OnboardingScreen},
})

const WallStack = StackNavigator({
  Wall: {screen: WallScreen},
})

const SignupStack = StackNavigator({
  SignupName: {screen: SignupNameScreen},
  SignupChooseComm: {screen: SignupChooseCommScreen},
  SignupEmail: {screen: SignupEmailScreen},
  SignupPhone: {screen: SignupPhoneScreen},
  SignupSubmitConfirmation: {screen: SignupSubmitConfirmationScreen},
  SignupOTP: {screen: SignupOTPScreen},
},
{
  navigationOptions: {
    header: null,
  }
})

const HomeStack = StackNavigator({
  Home: {screen: HomeScreen},
},{
  navigationOptions: {
    header: null,
  }
})

export const AppNavigator = StackNavigator({
  //Test: {screen: TestStack},
  //Onboarding: {screen: OnboardingStack},
  //Wall: {screen: WallStack},

  //Signup: {screen: SignupStack},
    //SignupEmail: {screen: SignupEmailScreen},
    //SignupChooseComm: {screen: SignupChooseCommScreen},
    //SignupPhone: {screen: SignupPhoneScreen},
    //SignupSubmitConfirmation: {screen: SignupSubmitConfirmationScreen},
    SignupOTP: {screen: SignupOTPScreen},
  Home: { screen: HomeStack},

});