'use strict'

import uiText from '../../../config/uiLanguage.json';

// Libraries imports
import React, {Component} from 'react';
import { Text, StyleSheet } from 'react-native';
import Optionform from '../../../components/Form/Optionform';
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

class SignupChooseCommScreen extends Component {
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

  onButtonPressed = (route, label) => {
    let newData = this.state.data;
    newData.otpTransport = label;
    this.props.actions.signupFormFill(newData);
    const navigateActions = NavigationActions.navigate({
      routeName: 'Signup',
      params: {},
      action: NavigationActions.navigate({ routeName: route })
    });
    this.props.navigation.dispatch(navigateActions);
  }

  render(){
    return(
      <Optionform
        subtitle={
          <Text>
            {'Halo, '}
            <Text style={{fontWeight: 'bold'}}>
              {this.props.data.name}
            </Text>
            <Text style={{fontSize: 24}}>
              {'\n'}
            </Text>
            <Text style={{fontSize: 24}}>
              {'\n'}{uiText.signup.question.otpTransportQuestion}
            </Text>
          </Text>
        }
        subtitleTextStyle={[TextStyles.SUBTITLE, {color: COLOR_TEXT_LIGHT, textAlign: 'left'}]}

        buttonRadius={70}
        buttonBorderColor={COLOR_LIGHT}
        buttonIconStyle={[TextStyles.TITLE, {color: COLOR_TEXT_LIGHT, textAlign: 'center'}]}
        buttonIconTxtStyle={[TextStyles.BODY, {color: COLOR_TEXT_LIGHT, textAlign: 'center'}]}
        buttonData={[
          {label: 'Email', icon: 'md-mail', route: 'SignupEmail'}, 
          {label: 'SMS', icon: 'md-text', route: 'SignupPhone'}
        ]}
        buttonOnPress={this.onButtonPressed.bind(this)}   //Bind is required

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

export default connect(mapStateToProps, mapDispatchToProps)(SignupChooseCommScreen)