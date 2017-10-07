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

import { validateEmail } from '../../../utilities/signup';

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

class SignupEmailScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state={
    isLoading: this.props.data.isLoading,
    isModalVisible: false,
    buttonShow: false,
    hideValidationMessage: true,
    validationMessage: null,
    data: {
      name: this.props.data.name,
      email: this.props.data.email,
      phone: this.props.data.phone,
      phoneOnScreen: this.props.data.phoneOnScreen,
      otpTransport: this.props.data.otpTransport,
      userName: this.props.data.userName,
      errorEmail: this.props.data.errorEmail,
    }
  }

  _showModal = (message) => this.props.actions.signupModalShow(message);
  _hideModal = () => this.props.actions.signupModalHide();

  onSubmitEditingHandler = async (text) => {
    this.props.actions.signupLoaderShow();
    let res = await validateEmail(this.state.data.email);
    this.props.actions.signupLoaderHide();
    if (res.isExists !== undefined) {
      let t = (res.validationErrorMessage == null) ? true : false;
      this.setState({validationMessage: res.validationErrorMessage});
      this.setState({hideValidationMessage: t, buttonShow: t})
    } else {
      this._showModal({message: uiText.signup.modal.failConnectToServer});
    }
  }

  onChangeTextHandler = (text) => {
    if (!this.state.hideValidationMessage) { this.setState({hideValidationMessage: true}) }

    let newData = this.state.data;
    newData.email = text;
    newData.userName = text;
    
    this.setState({data: newData});
    this.props.actions.signupFormFill(newData);
  }

  onTouchableWithoutFeedbackPress = (text) => {
    Keyboard.dismiss();
    this.onSubmitEditingHandler(text);
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
    if ( this.state.isLoading ) {
      return ( <StandardLoader loaderColor={COLOR_GREEN} /> )
    }
    else {
      return (
        this.state.buttonShow
        ?
        (
          <FadeInView 
            style={{
              flex: 1,
              marginTop: 8,
            }}
          >
            <StandardButton
              buttonStyle={ButtonSS.buttonFillLarge}
              buttonTextStyle={[TextStyles.H1, ButtonSS.buttonTextFillLarge]}
              buttonLabel={uiText.signup.button.next}
              buttonOnPress={this.onButtonPressed.bind(this)}
            />
          </FadeInView>
        )
        : null
      )
    }
  }

  onButtonPressed () {
    const navigateActions = NavigationActions.navigate({
      routeName: 'Signup',
      params: {},
      action: NavigationActions.navigate({ routeName: 'SignupSubmitConfirmation' })
    });
    this.props.navigation.dispatch(navigateActions);
  }

  render(){
    let iconData = {
      iconName: 'ios-warning-outline'
    }

    return(
      <View style={styles.container}>
        <Typeform
          title={<Text style={[TextStyles.TITLESMALL, styles.title]}>{uiText.signup.title.email}</Text>}
          subtitle={
            <Text style={[TextStyles.H2, styles.subtitle]}>
              {'Baik, '}
              <Text style={styles.highlighted}>
                {this.props.data.name}
              </Text>
              <Text>
                {'\n'}Silakan masukkan email Anda
              </Text>
            </Text>
          }
          inputAutoFocus
          inputPlaceholder={uiText.signup.placeholder.email}
          inputPlaceholderColor= {styles.textInputPlaceholder}
          inputTextStyle={[TextStyles.INPUTSMALL, styles.textInput]}
          inputKeyboardType='email-address'
          inputMaxLength={254}
          onChangeTextHandler={this.onChangeTextHandler.bind(this)}
          onSubmitEditingHandler={this.onSubmitEditingHandler.bind(this)}
          onTouchableWithoutFeedbackPress={this.onTouchableWithoutFeedbackPress.bind(this)}
          
          hideValidationMessage={this.state.hideValidationMessage}
          validationMessage={this.state.validationMessage}
          validationMessageStyle={[TextStyles.BODY, styles.validationMessage]}
          validationIconName={'md-warning'}
          validationIconSize={24}

          renderButtons={this.renderButtons()}
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
    name: state.signup.name,
    email: state.signup.email,
    phone: state.signup.phone,
    phoneOnScreen: state.signup.phoneOnScreen,
    otpTransport: state.signup.otpTransport,
    userName: state.signup.userName,
  }

  return { data }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( Object.assign( {}, signupActions ), dispatch ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupEmailScreen);