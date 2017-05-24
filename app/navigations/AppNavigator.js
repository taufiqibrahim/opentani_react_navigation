import {
  StackNavigator,
} from 'react-navigation';
import OnboardingScreen from '../containers/Onboarding';
import SignupNameScreen from '../containers/Signup/screens/SignupName';
import SignupPhoneScreen from '../containers/Signup/screens/SignupPhone';
import HomeScreen from '../containers/Home';
import Test from '../containers/Test/TestFade';

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

const HomeStack = StackNavigator({
  Home: {screen: HomeScreen},
})

export const AppNavigator = StackNavigator({
  //Test: { screen: Test}
  Onboarding: {screen: OnboardingStack},

  //Main: { screen: MainScreen},
  //SignupName: {screen: SignupNameScreen},
  //SignupPhone: {screen: SignupPhoneScreen},
  
  //Signup: {screen: SignupStack},
  //Home: { screen: HomeStack},

});

//export default AppNavigator;