'use strict'

import uiText from '../../../config/uiLanguage.json';

// Libraries imports
import React, {Component} from 'react';
import { 
  Text,
  StyleSheet,
  Keyboard,
} from 'react-native';
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
  COLOR_PLACEHOLDER_ON_GREEN,
} from '../../../styles/ColorPalette';
import TextStyles from '../../../styles/TextStyles';
import styles from './Styles';

class SignupNameScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state={
    buttonShow: false,
    hideValidationMessage: true,
    validationMessage: null,
    data: {
      name: this.props.data.name,
      email: this.props.data.email,
      phone: this.props.data.phone,
      phoneOnScreen: this.props.data.phoneOnScreen,
      otpTransport: this.props.data.otpTransport,
    }
  }

  validateName = (name) => {
    if (name != null && name.length >= 3) {
      return true
    } else {
      return false
    }
  }

  onSubmitEditingHandler = (text) => {
    if (!this.state.data.name || this.state.data.name === '') {
      this.setState({validationMessage: uiText.validationErrorMessage.nameIsEmpty})
    } else {
      this.setState({validationMessage: uiText.validationErrorMessage.nameInvalid})
    }
    let t = this.validateName(this.state.data.name);
    this.setState({hideValidationMessage: t, buttonShow: t})
  }

  onChangeTextHandler(text) {
    let newData = this.state.data;
    newData.name = text;
    this.setState({data: newData});
    this.props.actions.signupFormFill(newData);
  }

  onTouchableWithoutFeedbackPress = (text) => {
    console.log('onTouchableWithoutFeedbackPress');
    Keyboard.dismiss();
    this.onSubmitEditingHandler(text);
  }

  onButtonPressed () {
    const navigateActions = NavigationActions.navigate({
      routeName: 'Signup',
      params: {},
      action: NavigationActions.navigate({ routeName: 'SignupChooseComm' })
    });
    this.props.navigation.dispatch(navigateActions);
  }

	render(){
		return(
      <Typeform
        inputAutoFocus
        subtitle={uiText.signup.question.personName}
        subtitleTextStyle={[TextStyles.SUBTITLE, {color: COLOR_TEXT_LIGHT, textAlign: 'left'}]}
        inputPlaceholder={uiText.signup.placeholder.personName}
        inputPlaceholderColor= {COLOR_PLACEHOLDER_ON_GREEN}
        inputTextStyle={[TextStyles.INPUT, {color: COLOR_TEXT_LIGHT, textAlign: 'left', fontSize: 36, fontWeight: 'bold'}]}
        inputKeyboardType='email-address'
        inputAutoCapitalize='words'
        inputMaxLength={254}
        onChangeTextHandler={this.onChangeTextHandler.bind(this)}
        onSubmitEditingHandler={this.onSubmitEditingHandler.bind(this)}
        onTouchableWithoutFeedbackPress={this.onTouchableWithoutFeedbackPress.bind(this)}
        hideValidationMessage={this.state.hideValidationMessage}
        validationMessage={this.state.validationMessage}
        buttonShow={this.state.buttonShow}
        buttonLabel='Lanjut'
        buttonStyles={styles.buttonStyles}
        buttonTextStyle={[TextStyles.H1, styles.buttonTextStyle]}
        buttonOnPress={this.onButtonPressed.bind(this)}
      />
    )
	}
}

function mapStateToProps(state) {
  const data = {
    name: state.signup.name,
    email: state.signup.email,
    phone: state.signup.phone,
    phoneOnScreen: state.signup.phoneOnScreen,
    otpSentVia: state.signup.otpSentVia,
  }

  return { data }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( Object.assign( {}, signupActions ), dispatch ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupNameScreen);