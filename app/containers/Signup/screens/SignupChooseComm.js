'use strict'

import uiText from '../../../config/uiLanguage.json';

// Libraries imports
import React, {Component} from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Optionform from '../../../components/Form/Optionform';

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
import styles from '../styles/';

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
      userName: this.props.data.userName,
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
      <View style={[styles.container, {backgroundColor: COLOR_LIGHT}]}>
        <Optionform
          title={<Text style={[TextStyles.TITLESMALL, styles.title]}>{uiText.signup.title.chooseComm}</Text>}
          subtitle={
            <Text style={[TextStyles.H2, styles.subtitle]}>
              {'Halo, '}
              <Text style={styles.highlighted}>
                {this.props.data.name}
              </Text>
              <Text>
                {'\n'}
              </Text>
              <Text>
                {'\n'}{uiText.signup.question.otpTransportQuestion}
              </Text>
            </Text>
          }
          subtitleTextStyle={[TextStyles.SUBTITLE, styles.subtitle]}

          buttonRadius={64}
          buttonBorderColor={COLOR_GREEN}
          buttonIconStyle={[TextStyles.TITLE, styles.circleButtonIconStyle]}
          buttonIconTxtStyle={[TextStyles.BODY, styles.circleButtonTextStyle]}
          buttonData={[
            {label: 'Email', icon: 'md-mail', route: 'SignupEmail'}, 
            {label: 'SMS', icon: 'md-text', route: 'SignupPhone'}
          ]}
          buttonOnPress={this.onButtonPressed.bind(this)}   //Bind is required
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupChooseCommScreen)