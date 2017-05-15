'use strict'

import React, {Component, PropTypes} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import getStore from './reduxManager/store';
import AppWithNavigationState from './AppWithNavigationState';

const store = getStore();

export default class App extends Component {
  render(){
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
  }
}