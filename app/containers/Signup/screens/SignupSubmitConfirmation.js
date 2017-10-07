'use strict'

import uiText from '../../../config/uiLanguage.json';

// Libraries imports
import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ConfirmationForm from '../../../components/Form/ConfirmationForm';
import StandardLoader from '../../../components/Loader/StandardLoader';
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
  COLOR_DARK,
  COLOR_DARK_GREEN
} from '../../../styles/ColorPalette';
import TextStyles from '../../../styles/TextStyles';
import { ButtonSS } from '../../../styles/ButtonStyles';
import styles from '../styles/';

class SignupSubmitConfirmationScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state={
    isLoading: this.props.data.isLoading,
    isModalVisible: this.props.data.isModalVisible,
    buttonShow: true,
    data: {
      name: this.props.data.name,
      email: this.props.data.email,
      phone: this.props.data.phone,
      phoneOnScreen: this.props.data.phoneOnScreen,
      otpTransport: this.props.data.otpTransport,
      userName: this.props.data.userName,
    }
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
              buttonLabel={uiText.signup.button.signup}
              buttonOnPress={this.onButtonPressed.bind(this)}
            />
          </FadeInView>
        )
        : null
      )
    }
  } 

  onButtonPressed = () => {
    let data = this.state.data;
    this.props.actions.signup(data);
  }

  render() {
    return(
      <View style={[styles.container, {backgroundColor: COLOR_LIGHT}]}>
        <ConfirmationForm
          subtitle={
            <Text style={[TextStyles.H2, styles.subtitle]}>
              {uiText.signup.question.submitConfirmation}
            </Text>
          }
          struct={
            (this.state.data.otpTransport === 'Email')
            ?
            [
              {label: 'Nama', value: this.props.data.name}, 
              {label: 'Email', value: this.props.data.email},
            ]
            :
            [
              {label: 'Nama', value: this.props.data.name}, 
              {label: 'Nomor telepon', value: this.props.data.phoneOnScreen},
            ]
          }
          structLabelTextStyle={[TextStyles.H3, {color: COLOR_DARK, textAlign: 'left'}]}
          structValueTextStyle={[TextStyles.H2, {color: COLOR_DARK, textAlign: 'left'}]}
          renderButtons={this.renderButtons()}
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupSubmitConfirmationScreen)