'use strict'

import uiText from '../../../config/uiLanguage.json';

// Libraries imports
import React, {Component} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Optionform from '../../../components/Form/Optionform';
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

class LoginChooseCommScreen extends Component {
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
    this.props.actions.loginFormFill(newData);
    const navigateActions = NavigationActions.navigate({
      routeName: 'Login',
      params: {},
      action: NavigationActions.navigate({ routeName: route })
    });
    this.props.navigation.dispatch(navigateActions);
  }

  render(){
    return(
      <View style={[styles.container, {backgroundColor: COLOR_LIGHT}]}>
        <Optionform
          title={<Text style={[TextStyles.TITLESMALL, styles.title]}>{uiText.login.title.chooseComm}</Text>}
          subtitle={
            <Text style={[TextStyles.H3, styles.subtitle]}>
              {'Selamat datang kembali.'}
              <Text style={styles.highlighted}>
                {this.props.data.name}
              </Text>
              <Text>
                {'\n'}
              </Text>
              <Text>
                {'\n'}{uiText.login.question.otpTransportQuestion}
              </Text>
            </Text>
          }
          subtitleTextStyle={[TextStyles.SUBTITLE, styles.subtitle]}

          buttonRadius={64}
          buttonBorderColor={COLOR_GREEN}
          buttonIconStyle={[TextStyles.TITLE, styles.circleButtonIconStyle]}
          buttonIconTxtStyle={[TextStyles.BODY, styles.circleButtonTextStyle]}
          buttonData={[
            {label: 'Email', icon: 'md-mail', route: 'LoginEmail'}, 
            {label: 'SMS', icon: 'md-text', route: 'LoginPhone'}
          ]}
          buttonOnPress={this.onButtonPressed.bind(this)}   //Bind is required
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  const data = {
    name: state.login.name,
    email: state.login.email,
    phone: state.login.phone,
    phoneOnScreen: state.login.phoneOnScreen,
    otpTransport: state.login.otpTransport,
    userName: state.login.userName,
  }

  return { data }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( Object.assign( {}, loginActions ), dispatch ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginChooseCommScreen)