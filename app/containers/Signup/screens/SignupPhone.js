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
import { validatePhone } from '../../../utilities/inputValidator';
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

class SignupPhoneScreen extends Component {
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
      errorPhone: this.props.data.errorPhone,
    },
  }

  _showModal = () => this.setState({isModalVisible: true})
  _hideModal = () => this.setState({isModalVisible: false})

  onSubmitEditingHandler = async (text) => {
    this._hideModal();
    this.setState({isLoading: true});
    let res = await validatePhone(this.state.data.phone);
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
    newData.phone = text.replace(/\D/g,'');
    newData.phoneOnScreen = this.phoneFormatter(newData.phone);
    
    this.setState({data: newData});
    this.props.actions.signupFormFill(newData);
  }

  onTouchableWithoutFeedbackPress = (text) => {
    Keyboard.dismiss();
    this.onSubmitEditingHandler(text);
  }

  phoneFormatter = (phone) => {
    let len = (phone !== null && phone !== '') ? phone.length : 0;
    // Simple add spaces every 4 digits
    if (len > 0 && len <= 4) {
      phone = phone
    } else if (len > 4 && len <= 8) {
      phone = phone.substring(0,4)+'-'+phone.substring(4,8)
    } else if (len > 8) {
      phone = phone.substring(0,4)+'-'+phone.substring(4,8)+'-'+phone.substring(8,12)
    }

    return phone;
  }

  onButtonPressed () {
    const navigateActions = NavigationActions.navigate({
      routeName: 'Signup',
      params: {},
      action: NavigationActions.navigate({ routeName: 'SignupOTP' })
    });
    this.props.navigation.dispatch(navigateActions);
  }

  render(){
    return(
      <View style={styles.container}>
        <Typeform
          subtitle={
            <Text>
              {'Baik, '}
              <Text style={{fontWeight: 'bold'}}>
                {this.props.data.name}
              </Text>
              <Text style={{fontSize: 24}}>
                {'\n'}Silakan mengisi nomor telepon Anda
              </Text>
            </Text>
          }
          inputAutoFocus
          subtitleTextStyle={[TextStyles.SUBTITLE, {color: COLOR_TEXT_LIGHT, textAlign: 'left'}]}
          inputPlaceholder={uiText.signup.placeholder.phone}
          inputPlaceholderColor= {COLOR_PLACEHOLDER_ON_GREEN}
          inputTextStyle={[TextStyles.INPUT, {color: COLOR_TEXT_LIGHT, textAlign: 'left', fontSize: 36, fontWeight: 'bold'}]}
          inputKeyboardType='phone-pad'
          inputMaxLength={14}
          maskValue={this.props.data.phoneOnScreen}
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
  }

  return { data }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( Object.assign( {}, signupActions ), dispatch ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPhoneScreen);