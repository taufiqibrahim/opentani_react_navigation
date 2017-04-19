'use strict'

import React, {Component, PropTypes} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator, StackRouter } from 'react-navigation';

/* 
 * Import Testing Routes
 */
// import MasterScreen from './containers/Master/Master';
// import DetailScreen from './containers/Detail/Detail';

// Import Production Routes
import OnboardingScreen from './containers/Onboarding/Onboarding';

// StackNavigator
/*const App = StackNavigator({
  Master: { screen: MasterScreen},
  Detail: { screen: DetailScreen},
})*/
const App = StackNavigator({
  Onboarding: {screen: OnboardingScreen}
})

// StackRouter
/*const App = StackRouter({
  FirstOnboarding: {
    screen: FirstOnboardingScreen,
  },
}, {
  initialRouteName: 'FirstOnboarding',
})
*/
export default App