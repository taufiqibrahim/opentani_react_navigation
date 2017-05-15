import React, { Component } from 'react';
import { Text, BackAndroid } from 'react-native';
import { Provider, connect } from 'react-redux';
import {
  StackNavigator, 
  addNavigationHelpers, 
  NavigationActions
} from 'react-navigation';

import navRoutes from './config/navRoutes';
import navOptions from './config/navOptions';
import getStore from './store';

const AppNavigator = StackNavigator(navRoutes, navOptions);

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return ( newState ? newState : state)
};

@connect(state => ({
  nav: state.nav
}))

class AppWithNavigationState extends Component {
  componentDidMount(){
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackAndroid.bind(this));
  }
  componentWillMount(){
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAndroid.bind(this));
  }

  // Handling Android Back Button
  handleBackAndroid(){
    /*console.log(this);
    console.log(this.props.nav);
    console.log(this.props.nav.routes);
    console.log(this.props.nav.routes.length);*/
    const {nav, dispatch} = this.props;
    if (nav && nav.routes && nav.routes.length>1) {
      dispatch(NavigationActions.back());
      return true;
    }
    return false;
  }
  render() {
    return (
        <AppNavigator
            navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav
            })}
        />
    );
  }
}

const store = getStore(navReducer);

export default class App extends Component {
  render(){
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
  }
}