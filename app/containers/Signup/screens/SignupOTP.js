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

class SignupOTPScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state={
    buttonShow: false,
    hideValidationMessage: true,
    validationMessage: null,
    otpOnScreen: null,
    data: {
      name: this.props.data.name,
      email: this.props.data.email,
      phone: this.props.data.phone,
      phoneOnScreen: this.props.data.phoneOnScreen,
      otp: null,
      otpTransport: this.props.data.otpTransport,
    }
  }

  validate = (otp) => {
    if (otp != null && otp.length >= 4) {
      return true
    } else {
      return false
    }
  }

  onSubmitEditingHandler = (text) => {
    let data = this.state.data;
    if (!data.otp || data.otp === '') {
      this.setState({validationMessage: uiText.validationErrorMessage.otpIsEmpty})
    } else {
      this.setState({validationMessage: uiText.validationErrorMessage.otpInvalid})
    }
    let t = this.validate(this.state.data.otp);
    this.setState({hideValidationMessage: t, buttonShow: t})
  }
  
  onChangeTextHandler(text) {
    if (!this.state.hideValidationMessage) { this.setState({hideValidationMessage: true}) }

    let newData = this.state.data;
    newData.otp = text.replace(/\D/g,'');
    this.setState({otpOnScreen: this.otpFormatter(newData.otp)});
  }

  onTouchableWithoutFeedbackPress = (text) => {
    Keyboard.dismiss();
    this.onSubmitEditingHandler(text);
  }

  otpFormatter = (otp) => {
    otp = otp.replace(/(.)(?=.)/g, "$1  ")
    /**
     *  (.) Matches a single character. Captures in group 1 ($1)
     *  (?=.) Positive look ahead. Checks if the captured character is followed by another character.
     *  "$1 " Replacement string. $1 Contains the character captured in group 1, followed by a space
     *   g Global modifier. Applies the replace globally for all the matches within the string.
     */
    
    return otp;
  }

  otpFormatter2 = (otp) => {
    let n = otp.length;
    let res = otp.split("");
  }

  onButtonPressed() {
    console.log('onButtonPressed')
  }

  render(){
    let trans = this.props.data.otpTransport;
    let desti = null;
    if (trans == 'Email') {
      desti = this.props.data.email
    } 
    else if (trans == 'SMS') {
      desti = this.props.data.phoneOnScreen
    }

    return(
      <Typeform
        subtitle={
          <Text>
            <Text style={{fontWeight: 'bold'}}>{'Masukkan OTP'}</Text>
            <Text style={{fontSize: 20}}>
              {'\n'}{'\n'}{'One Time Password (OTP) telah dikirim melalui '}{trans}{' ke '}{desti}. Silakan masukkan di sini untuk memverifikasi.
            </Text>
          </Text>
        }
        inputAutoFocus={false}
        inputSecureTextEntry={true}
        subtitleTextStyle={[TextStyles.SUBTITLE, {color: COLOR_TEXT_LIGHT, textAlign: 'left'}]}
        inputPlaceholder={uiText.placeholder.otp}
        inputPlaceholderColor= {COLOR_PLACEHOLDER_ON_GREEN}
        inputTextStyle={[TextStyles.INPUT, {color: COLOR_TEXT_LIGHT, textAlign: 'center', fontSize: 36, fontWeight: 'bold'}]}
        inputKeyboardType='phone-pad'
        inputMaxLength={10}
        maskValue={this.state.otpOnScreen}
        onChangeTextHandler={this.onChangeTextHandler.bind(this)}
        onSubmitEditingHandler={this.onSubmitEditingHandler.bind(this)}
        onTouchableWithoutFeedbackPress={this.onTouchableWithoutFeedbackPress.bind(this)}
        hideValidationMessage={this.state.hideValidationMessage}
        validationMessage={this.state.validationMessage}
        buttonShow={this.state.buttonShow}
        buttonLabel='Verifikasi'
        buttonStyles={styles.buttonStyles}
        buttonTextStyle={styles.buttonTextStyle}
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
    otpTransport: state.signup.otpTransport,
  }

  return { data }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( Object.assign( {}, signupActions ), dispatch ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupOTPScreen);