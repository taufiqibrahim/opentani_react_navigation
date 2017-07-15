'use strict'

import uiText from '../../../config/uiLanguage.json';

// Libraries imports
import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ConfirmationForm from '../../../components/Form/ConfirmationForm';
import StandardLoader from '../../../components/Loader/StandardLoader';
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
  COLOR_DARK_GREEN,
} from '../../../styles/ColorPalette';
import styles from './Styles';
import TextStyles from '../../../styles/TextStyles';

class SignupSubmitConfirmationScreen extends Component {
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

  onButtonPressed = () => {
    let data = this.state.data;
    this.props.actions.signup(data);
  }

  render(){
    return(
      <View style={styles.container}>
        <ConfirmationForm
          subtitle={
            <Text>
              <Text style={{fontSize: 24}}>
                {uiText.signup.question.submitConfirmation}
              </Text>
            </Text>
          }
          subtitleTextStyle={[TextStyles.SUBTITLE, {color: COLOR_TEXT_LIGHT, textAlign: 'left'}]}
          struct={[
            {label: 'Nama', value: this.props.data.name}, 
            {label: 'Email', value: this.props.data.email},
            {label: 'Nomor telepon', value: this.props.data.phoneOnScreen},
          ]}
          structLabelTextStyle={[TextStyles.H3, {color: COLOR_DARK_GREEN, textAlign: 'left'}]}
          structValueTextStyle={[TextStyles.H2, {color: COLOR_LIGHT, textAlign: 'left'}]}

          buttonShow={this.state.buttonShow}
          buttonLabel='Kirim'
          buttonStyles={styles.buttonStyles}
          buttonTextStyle={[TextStyles.H1, styles.buttonTextStyle]}
          buttonOnPress={this.onButtonPressed.bind(this)}

        />

        {this.props.data.isLoading ? <StandardLoader loaderColor={COLOR_LIGHT}/> : null }

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
    isLoading: state.signup.isLoading,
  }

  return { data }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( Object.assign( {}, signupActions ), dispatch ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupSubmitConfirmationScreen)