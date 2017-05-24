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

class SignupNameScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state={
    buttonShow: false,
    data: {
      name: null,
      phone: null,
    }
  }

  onChangeTextHandler(text) {
    let newData = this.state.data;
    newData.name = text;
    this.setState({data: newData});
    this.props.actions.signupFormFill(newData);
    if (text.length >= 3) { this.setState({buttonShow: true}) }
    if (text.length < 3) { this.setState({buttonShow: false}) }
  }

  onButtonPressed () {
    const navigateActions = NavigationActions.navigate({
      routeName: 'Signup',
      params: {},
      action: NavigationActions.navigate({ routeName: 'SignupPhone' })
    });
    this.props.navigation.dispatch(navigateActions);
  }

	render(){
		return(
      <Typeform
        subtitle='Siapa nama Anda?'
        subtitleTextStyle={[TextStyles.SUBTITLE, {color: COLOR_TEXT_LIGHT, textAlign: 'left'}]}
        inputPlaceholder='Oemar Bakrie'
        inputPlaceholderColor= {COLOR_PLACEHOLDER_ON_GREEN}
        inputTextStyle={[TextStyles.INPUT, {color: COLOR_TEXT_LIGHT, textAlign: 'left', fontSize: 36, fontWeight: 'bold'}]}
        inputAutoCapitalize='words'
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupNameScreen)

const styles = StyleSheet.create({
  // Button
  buttonStyles: {
    height: 56,
    //flex: 1,
    backgroundColor: COLOR_GREEN,
    borderRadius: 24,
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