'use strict'

import uiText from '../../../config/uiLanguage.json';

// Libraries imports
import React, {Component} from 'react';
import { 
  Text,
  StyleSheet,
  Keyboard,
  View,
} from 'react-native';
import Typeform from '../../../components/Form/Typeform';
import StandardLoader from '../../../components/Loader/StandardLoader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/';
import { NavigationActions } from 'react-navigation';

// Styles imports
import {
  COLOR_LIGHT,
  COLOR_GREEN,
  COLOR_DARK_GREEN,
} from '../../../styles/ColorPalette';
import TextStyles from '../../../styles/TextStyles';
import styles from './Styles';

class LoginOTPScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state={
    isLoading: false,
    isResendOtpRequested: false,
    buttonShow: false,
    hideValidationMessage: true,
    validationMessage: null,
    otpOnScreen: null,
    data: {
      userName: this.props.data.userName,
      name: this.props.data.name,
      email: this.props.data.email,
      phone: this.props.data.phone,
      phoneOnScreen: this.props.data.phoneOnScreen,
      otp: this.props.data.otp,
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

    this.setState({data: newData});
    this.props.actions.loginFormFill(newData);
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

  onButtonSubmitPressed() {
    let tos = {
      otp: this.state.data.otp,
      userName: this.state.data.userName,
    };
    this.props.actions.loginVerification(tos);
  }

  onButtonResendOtpPressed() {
    let tos = {
      otp: this.state.data.otp,
      userName: this.state.data.userName,
    };
    this.props.actions.loginVerification(tos);
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
      <View style={styles.container}>
        <Typeform
          title={<Text style={[TextStyles.TITLESMALL, styles.title]}>{uiText.login.title.otp}</Text>}
          subtitle={
            <Text style={[TextStyles.H3, styles.subtitle]}>
              {uiText.login.question.activationInfo}
              <Text style={styles.highlighted}>{trans}</Text>
              {' '}
              {uiText.login.question.to}
              {' '}
              <Text style={styles.highlighted}>{desti}</Text>
              {'. '}
              {uiText.login.question.activationCommand}
            </Text>
          }
          inputAutoFocus={false}
          inputSecureTextEntry={true}
          inputPlaceholder={uiText.login.placeholder.otp}
          inputPlaceholderColor= {styles.textInputPlaceholder}
          inputTextStyle={[TextStyles.INPUT, styles.textInput]}
          inputKeyboardType='phone-pad'
          inputMaxLength={10}
          maskValue={this.state.otpOnScreen}
          onChangeTextHandler={this.onChangeTextHandler.bind(this)}
          onSubmitEditingHandler={this.onSubmitEditingHandler.bind(this)}
          onTouchableWithoutFeedbackPress={this.onTouchableWithoutFeedbackPress.bind(this)}
          
          hideValidationMessage={this.state.hideValidationMessage}
          validationMessage={this.state.validationMessage}
          validationMessageStyle={[TextStyles.BODY, styles.validationMessage]}
          validationIconName={'md-warning'}
          validationIconSize={24}
          
          buttonShow={this.state.buttonShow}
          buttonLabel={
            this.state.isResendOtpRequested 
            ? 'Tidak menerima '+trans+'?\nKirim ulang'
            : 'Verifikasi'
          }
          buttonStyles={
            this.state.isResendOtpRequested
            ? styles.buttonResendOtpStyles
            : styles.buttonStyles
          }
          buttonTextStyle={
            this.state.isResendOtpRequested
            ? [TextStyles.H3, styles.buttonResendOtpTextStyle]
            : [TextStyles.H3, styles.buttonTextStyle]}
          buttonOnPress={
            this.state.isResendOtpRequested
            ? this.onButtonResendOtpPressed.bind(this)
            : this.onButtonSubmitPressed.bind(this)
          }
        />

        {this.state.isLoading ? <StandardLoader loaderColor={COLOR_LIGHT}/> : null }

      </View>
    )
  }
}

function mapStateToProps(state) {
  const data = {
    userName: state.login.userName,
    name: state.login.name,
    email: (state.login.email === null) ? state.appState.email : state.login.email,
    phone: (state.login.phone === null) ? state.appState.phone : state.login.phone,
    phoneOnScreen: (state.login.phoneOnScreen === null) ? state.appState.phoneOnScreen : state.login.phoneOnScreen,
    otpTransport: (state.login.otpTransport === null) ? state.appState.otpTransport : state.login.otpTransport,
  }

  return { data }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( Object.assign( {}, loginActions ), dispatch ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginOTPScreen);