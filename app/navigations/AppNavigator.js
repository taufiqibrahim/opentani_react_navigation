import {
  StackNavigator,
} from 'react-navigation';

import BootScreen from '../containers/Boot/screens';
import OnboardingScreen from '../containers/Onboarding/screens';
import WallScreen from '../containers/Wall/screens/';

import SignupNameScreen from '../containers/Signup/screens/SignupName';
import SignupChooseCommScreen from '../containers/Signup/screens/SignupChooseComm';
import SignupEmailScreen from '../containers/Signup/screens/SignupEmail';
import SignupPhoneScreen from '../containers/Signup/screens/SignupPhone';
import SignupSubmitConfirmationScreen from '../containers/Signup/screens/SignupSubmitConfirmation';
import SignupOTPScreen from '../containers/Signup/screens/SignupOTP';

import LoginChooseCommScreen from '../containers/Login/screens/LoginChooseComm';
import LoginEmailScreen from '../containers/Login/screens/LoginEmail';
import LoginPhoneScreen from '../containers/Login/screens/LoginPhone';
import LoginOTPScreen from '../containers/Login/screens/LoginOTP';

import HomeScreen from '../containers/Home';

import ProfileMainScreen from '../containers/Profile/screens/ProfileMain';

const navOptions = {
  navigationOptions: {
    header: null
  },
}

const BootStack = StackNavigator({
  Boot: {screen: BootScreen},
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

const LoginStack = StackNavigator({
  LoginChooseComm: {screen: LoginChooseCommScreen},
  LoginEmail: {screen: LoginEmailScreen},
  LoginPhone: {screen: LoginPhoneScreen},
  LoginOTP: {screen: LoginOTPScreen},
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

const ProfileStack = StackNavigator({
  ProfileMain: {screen: ProfileMainScreen},
},{
  navigationOptions: {
    header: null,
  }
})

export const AppNavigator = StackNavigator({
  Boot: {screen: BootStack},
  Onboarding: {screen: OnboardingStack},
  Wall: {screen: WallStack},
  Signup: {screen: SignupStack},
  SignupVerification: {screen: SignupOTPScreen},
  Login: {screen: LoginStack},
  LoginVerification: {screen: LoginOTPScreen},
  Home: { screen: HomeStack},
  Profile: { screen: ProfileStack }
});