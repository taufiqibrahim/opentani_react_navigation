'use strict'

// Libraries imports
import React, {Component} from 'react';
import { Text, StyleSheet } from 'react-native';
import Typeform from '../../../components/Form/Typeform';
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

class SignupPhoneScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state={
    buttonShow: false,
    data: {
      name: this.props.data.name,
      phone: null,
    }
  }
  
  onChangeTextHandler(text) {
    let newData = this.state.data;
    newData.phone = text;
    this.setState({data: newData});
    this.props.actions.signupFormFill(newData);
    if (text.length >= 10) { this.setState({buttonShow: true}) }
    if (text.length < 10) { this.setState({buttonShow: false}) }
  }

  onButtonPressed() {
    console.log('onButtonPressed')
  }

  render(){
    return(
      <Typeform
        subtitle={
          <Text>
            Halo, 
            <Text style={{fontWeight: 'bold'}}>
              {this.props.data.name}
            </Text>
            <Text style={{fontSize: 24}}>
              {'\n'}
            </Text>
            <Text style={{fontSize: 24}}>
              {'\n'}Silakan mengisi nomor telepon Anda
            </Text>
          </Text>
        }
        subtitleTextStyle={[TextStyles.SUBTITLE, {color: COLOR_TEXT_LIGHT, textAlign: 'left'}]}
        inputPlaceholder='08XXXXXXXXXX'
        inputPlaceholderColor= {COLOR_TEXT_LIGHT}
        inputTextStyle={[TextStyles.INPUT, {color: COLOR_TEXT_LIGHT, textAlign: 'left', fontSize: 36, fontWeight: 'bold'}]}
        inputKeyboardType='phone-pad'
        onChangeTextHandler={this.onChangeTextHandler.bind(this)}
        buttonShow={this.state.buttonShow}
        buttonLabel='Lanjut'
        buttonStyles={styles.buttonStyles}
        buttonTextStyle={styles.buttonTextStyle}
        buttonOnPress={this.onButtonPressed.bind(this)}
      />
    )
  }
}

function mapStateToProps(state) {
  const data = {
    name: state.signup.name,
    phone: state.signup.phone
  }

  return { data }
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