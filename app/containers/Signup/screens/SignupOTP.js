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
import Icon from 'react-native-vector-icons/Ionicons';

import Typeform from '../../../components/Form/Typeform';
import StandardLoader from '../../../components/Loader/StandardLoader';
import StandardButton from '../../../components/Button/StandardButton';
import FadeInView from '../../../components/AnimatedView/FadeInView';
import ModalView from '../../../components/Modal/';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signupActions from '../actions/';
import { NavigationActions } from 'react-navigation';

// Styles imports
import {
  COLOR_LIGHT,
  COLOR_GREEN,
  COLOR_DARK_GREEN,
} from '../../../styles/ColorPalette';
import TextStyles from '../../../styles/TextStyles';
import { ButtonSS } from '../../../styles/ButtonStyles';
import { MS, ModalSS } from '../../../styles/ModalStyles';
import styles from '../styles/';

class SignupOTPScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state={
    isLoading: this.props.data.isLoading,
    isModalVisible: this.props.data.isModalVisible,
    isResendOtpRequesting: this.props.data.isResendOtpRequesting,
    isResendOtpRequested: this.props.data.isResendOtpRequested,
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
      modalMessage: this.props.data.modalMessage,
    }
  }

  _showModal = () => this.props.actions.signupModalShow
  _hideModal = () => {this.props.actions.hideModal()}

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
    this.props.actions.signupFormFill(newData);
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

  renderIcon (iconData) {
    return(
      <Icon 
        name={iconData.iconName} 
        size={MS.ICON_SIZE}
        style={MS.ICON_STYLE}
      />
    )
  }

  renderButtons = () => {
    let state = this.state;
    let props = this.props;

    if ( state.isLoading ) {
      return ( <StandardLoader loaderColor={COLOR_LIGHT} /> )
    } 
    else if (state.buttonShow) {
      return (
        <FadeInView 
          style={{
            flex: 1,
            marginTop: 8,
          }}
        >
          <StandardButton
            buttonStyle={ButtonSS.buttonFillLarge}
            buttonTextStyle={[TextStyles.H1, ButtonSS.buttonTextFillLarge]}
            buttonLabel={uiText.signup.button.otpVerify}
            buttonOnPress={this.onButtonPressed.bind(this)}
          />
        </FadeInView>
      )
    }
    else 
      return null
  }

  onButtonPressed() {
    let tos = {
      otp: this.state.data.otp,
      userName: this.state.data.userName,
    };
    this.props.actions.signupVerification(tos);
  }

  renderBottomButtons = () => {
    let state = this.state;
    let props = this.props;

    if ( state.isLoading ) {
      return ( <StandardLoader loaderColor={COLOR_LIGHT} /> )
    } 
    else {
      return (
        <StandardButton
          buttonStyle={ButtonSS.buttonLineSmall}
          buttonTextStyle={[TextStyles.SMALL, ButtonSS.buttonTextLineSmall]}
          buttonLabel={uiText.signup.button.noOtpReceived}
          buttonOnPress={this.onButtonReqResendOtpPressed.bind(this)}
        />
      )
    }
  }

  onButtonReqResendOtpPressed = () => {
    let message = uiText.signup.modal.resendOtpSuccess;
    let data = {...this.props.data, ...{message: message}};

    this.props.actions.signupReqResendOtp(data);
  }

  render() {
    let iconData = {
      iconName: 'ios-checkmark-circle-outline'
    }

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
          title={<Text style={[TextStyles.TITLESMALL, styles.title]}>{uiText.signup.title.otp}</Text>}
          subtitle={
            <Text style={[TextStyles.H3, styles.subtitle]}>
              <Text>
                {'\n'}
                {uiText.signup.question.activationInfo}{' '}{trans}
              </Text>
              <Text>
                {' '}
                {uiText.signup.question.to}
                {' '}
              </Text>
              <Text style={styles.highlighted}>
                {desti}
              </Text>
              <Text>
                {'. '}{'\n'}
                {uiText.signup.question.activationCommand}
              </Text>
            </Text>
          }
          inputAutoFocus={false}
          inputSecureTextEntry={true}
          inputPlaceholder={uiText.signup.placeholder.otp}
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

          renderButtons={this.renderButtons()}
          renderBottomButtons={this.renderBottomButtons()}
        />

        <ModalView
          animationIn={MS.ANIMATION_IN}
          animationInTiming={MS.ANIMATION_IN_TIMING}
          animationOutTiming={MS.ANIMATION_OUT_TIMING}
          isVisible={this.props.data.isModalVisible}
          hideOnBack={this.props.modalHideOnBack}
          onBackButtonPress={this.props.modalBackButtonPressed}

          modalSingleButton={true}
          modalIconItem={this.renderIcon(iconData)}
          modalMessage={this.props.data.modalMessage}
          modalTopAreaStyle={ModalSS.modalTopAreaStyle}
          modalBottomAreaStyle={ModalSS.modalBottomAreaStyle}

          modalButtonStyle={ModalSS.modalButtonStyle}
          modalButtonTextStyle={[TextStyles.H2, ModalSS.modalButtonTextStyle]}
          modalButtonLabel={'OK'}
          modalButtonOnPress={this._hideModal}
        />

       </View> 
    )
  }
}

function mapStateToProps(state) {
  const data = {
    isLoading: state.signup.isLoading,
    isModalVisible: state.signup.isModalVisible,
    modalMessage: state.signup.modalMessage,
    userName: (state.signup.userName === null) ? state.appState.userName : state.signup.userName,
    name: state.signup.name,
    email: (state.signup.email === null) ? state.appState.email : state.signup.email,
    phone: (state.signup.phone === null) ? state.appState.phone : state.signup.phone,
    phoneOnScreen: (state.signup.phoneOnScreen === null) ? state.appState.phoneOnScreen : state.signup.phoneOnScreen,
    otpTransport: (state.signup.otpTransport === null) ? state.appState.otpTransport : state.signup.otpTransport,
  }

  return { data }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( Object.assign( {}, signupActions ), dispatch ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupOTPScreen);