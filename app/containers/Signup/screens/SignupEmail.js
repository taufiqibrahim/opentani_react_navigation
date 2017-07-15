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
import StandardLoader from '../../../components/Loader/StandardLoader';
import { validateEmail } from '../../../utilities/inputValidator';
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
import styles from './Styles';

class SignupEmailScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state={
    isLoading: false,
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

  _showModal = () => this.setState({isModalVisible: true})
  _hideModal = () => this.setState({isModalVisible: false})

  onSubmitEditingHandler = async (text) => {
    this._hideModal();
    this.setState({isLoading: true});
    let res = await validateEmail(this.state.data.email);
    this.setState({isLoading: false});
    if (res.isExists !== undefined) {
      let t = (res.validationErrorMessage == null) ? true : false;
      //this._hideModal();
      this.setState({validationMessage: res.validationErrorMessage});
      this.setState({hideValidationMessage: t, buttonShow: t})
    } else {
      this._showModal();
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

  onButtonPressed () {
    const navigateActions = NavigationActions.navigate({
      routeName: 'Signup',
      params: {},
      action: NavigationActions.navigate({ routeName: 'SignupSubmitConfirmation' })
    });
    this.props.navigation.dispatch(navigateActions);
  }

  render(){
    return(
      <View style={styles.container}>
        <Typeform
          inputAutoFocus
          subtitle={
            <Text>
              {'Baik, '}
              <Text style={{fontWeight: 'bold'}}>
                {this.props.data.name}
              </Text>
              <Text style={{fontSize: 24}}>
                {'\n'}Silakan masukkan email Anda
              </Text>
            </Text>
          }
          subtitleTextStyle={[TextStyles.SUBTITLE, {color: COLOR_TEXT_LIGHT, textAlign: 'left'}]}
          inputPlaceholder={uiText.signup.placeholder.email}
          inputPlaceholderColor= {COLOR_PLACEHOLDER_ON_GREEN}
          inputTextStyle={[TextStyles.INPUT, {color: COLOR_TEXT_LIGHT, textAlign: 'left', fontSize: 30, fontWeight: 'bold',}]}
          inputKeyboardType='email-address'
          inputMaxLength={254}
          onChangeTextHandler={this.onChangeTextHandler.bind(this)}
          onSubmitEditingHandler={this.onSubmitEditingHandler.bind(this)}
          onTouchableWithoutFeedbackPress={this.onTouchableWithoutFeedbackPress.bind(this)}
          hideValidationMessage={this.state.hideValidationMessage}
          validationMessage={this.state.validationMessage}
          
          buttonShow={this.state.buttonShow}
          buttonLabel='Lanjut'
          buttonStyles={styles.buttonStyles}
          buttonTextStyle={[TextStyles.H1, styles.buttonTextStyle]}
          buttonOnPress={this.onButtonPressed.bind(this)}
          
          modalVisible={this.state.isModalVisible}
          modalMessage={'Gagal menyambungkan ke server'}
          modalBackButtonPressed={this._hideModal.bind(this)}
          modalButtonNegativeOnPress={this._hideModal.bind(this)}
          modalButtonPositiveOnPress={this.onSubmitEditingHandler.bind(this)}
        />

        {this.state.isLoading ? <StandardLoader loaderColor={COLOR_LIGHT}/> : null }
      
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupEmailScreen);