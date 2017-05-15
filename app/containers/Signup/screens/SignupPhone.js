'use strict'

// Libraries imports
import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import Typeform from '../../../components/Form/Typeform';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signupActions from '../actions/';

// Styles imports
import {
  COLOR_LIGHT,
  COLOR_GREEN,
  COLOR_TEXT_LIGHT,
  COLOR_TEXT_DARKER,
} from '../../../styles/ColorPalette';
import TextStyles from '../../../styles/TextStyles';

class SignupPhoneScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  static navigationOptions = {
    header: null,
  };
  
  onChangeTextHandler(text) {
    this.props.actions.signupFormFill(text);
  }

  onButtonPressed() {
    console.log('onButtonPressed')
  }

  render(){
    return(
      <Typeform
        subtitle='Halo?'
        subtitleTextStyle={[TextStyles.SUBTITLE, {color: COLOR_TEXT_LIGHT}]}
        inputPlaceholder='Nomor HP'
        inputPlaceholderColor= {COLOR_TEXT_LIGHT}
        inputTextStyle={[TextStyles.INPUT, {color: COLOR_TEXT_LIGHT}]}
        onChangeTextHandler={this.onChangeTextHandler.bind(this)}
        btnLabel='Lanjut'
        buttonStyles={styles.buttonStyles}
        buttonTextStyle={styles.buttonTextStyle}
        buttonOnPress={this.onButtonPressed.bind(this)}
      />
    )
  }
}

//export default SignupPhoneScreen

function mapStateToProps(state) {
  const name = state.signup.name

  return { name }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( Object.assign( {}, signupActions ), dispatch ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPhoneScreen)

const styles = StyleSheet.create({
  // Button
  buttonStyles: {
    height: 56,
    backgroundColor: COLOR_GREEN,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: COLOR_LIGHT,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Button Text Style
  buttonTextStyle: {
    fontFamily: 'sans-serif',
    fontSize: 32,
    color: COLOR_LIGHT,
  }
})