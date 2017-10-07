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
import StandardButton from '../../../components/Button/StandardButton';
import FadeInView from '../../../components/AnimatedView/FadeInView';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signupActions from '../actions/';
import { NavigationActions } from 'react-navigation';

// Styles imports
import {
  COLOR_GREEN,
  COLOR_LIGHT,
  COLOR_DEEP_ORANGE
} from '../../../styles/ColorPalette';
import TextStyles from '../../../styles/TextStyles';
import { ButtonSS } from '../../../styles/ButtonStyles';
import styles from '../styles/';

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
      userName: this.props.data.userName,
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
    Keyboard.dismiss();
    this.onSubmitEditingHandler(text);
  }

  renderButtons = () => {
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
      <View style={styles.container}>
        <Typeform
          title={<Text style={[TextStyles.TITLESMALL, styles.title]}>{uiText.signup.title.name}</Text>}
            subtitle={
              <Text style={[TextStyles.H2, styles.subtitle]}>
                {uiText.signup.question.personName}
              </Text>
            }
          inputAutoFocus
          inputPlaceholder={uiText.login.placeholder.personName}
          inputPlaceholderColor= {styles.textInputPlaceholder}
          inputTextStyle={[TextStyles.INPUT, styles.textInput]}

          inputAutoCapitalize='words'
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
      </View>
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
    userName: state.signup.userName,
  }

  return { data }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( Object.assign( {}, signupActions ), dispatch ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupNameScreen);