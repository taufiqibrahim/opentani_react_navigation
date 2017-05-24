'use strict'

// Libraries imports
import React, {Component, PropTypes} from 'react';
import { StyleSheet } from 'react-native';
import Typeform from '../../../components/Form/Typeform';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signupActions from '../actions/';
import { NavigationActions } from 'react-navigation';

// Styles imports
import {
  COLOR_LIGHT,
  COLOR_GREEN,
  COLOR_TEXT_LIGHT,
  COLOR_TEXT_DARKER,
} from '../../../styles/ColorPalette';
import TextStyles from '../../../styles/TextStyles';

class SignupNameScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  onChangeTextHandler(text) {
    this.props.actions.signupFormFill(text);
  }

  onButtonPressed () {
    const navigateActions = NavigationActions.navigate({
      routeName: 'Signup',
      params: {},
      action: NavigationActions.navigate({ routeName: 'SignupPhone' })
    });
    this.props.navigation.dispatch(navigateActions);
  }

	render(){
		return(
      <Typeform
        subtitle='Siapa nama Anda?'
        subtitleTextStyle={[TextStyles.SUBTITLE, {color: COLOR_TEXT_LIGHT}]}
        inputPlaceholder='Nama Anda'
        inputPlaceholderColor= {COLOR_TEXT_LIGHT}
        inputTextStyle={[TextStyles.INPUT, {color: COLOR_TEXT_LIGHT}]}
        onChangeTextHandler={this.onChangeTextHandler.bind(this)}
        btnLabel='Lanjut'
        buttonStyles={styles.buttonStyles}
        buttonTextStyle={styles.buttonTextStyle}
        buttonOnPress={this.onButtonPressed.bind(this)}
      />
    )
	}
}

//export default SignupNameScreen

function mapStateToProps(state) {
  const name = state.signup.name

  return { name }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( Object.assign( {}, signupActions ), dispatch ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupNameScreen)

const styles = StyleSheet.create({
  // Button
  buttonStyles: {
    height: 56,
    backgroundColor: COLOR_GREEN,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: COLOR_LIGHT,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Button Text Style
  buttonTextStyle: {
    fontFamily: 'sans-serif',
    fontSize: 32,
    color: COLOR_LIGHT,
  }
})