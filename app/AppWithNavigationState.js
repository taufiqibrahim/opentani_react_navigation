import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, BackAndroid } from 'react-native';
import { connect } from 'react-redux';
import {
  StackNavigator, 
  addNavigationHelpers, 
  NavigationActions
} from 'react-navigation';
import {AppNavigator} from './navigations/AppNavigator';

/*@connect(state => ({
  nav: state.nav
}))*/

class AppWithNavigationState extends Component {
  componentDidMount(){
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackAndroid.bind(this));
  }
  componentWillUnmount(){
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAndroid.bind(this));
  }

  // Handling Android Back Button
  handleBackAndroid(){
    const {nav, dispatch} = this.props;
    if (nav && nav.routes && nav.routes.length>1) {
      dispatch(NavigationActions.back());
      return true;
    }
    //return false;
    return true;
    console.log(this)
  }
  
  render() {
    return (
      <AppNavigator
        navigation={
          addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav
          })
        }
      />
    );
  }

}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);

/*export default class App extends Component {
  render(){
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
  }
}*/