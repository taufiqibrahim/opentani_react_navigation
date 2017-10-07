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
import { validatePhone } from '../../../utilities/login';
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

class LoginPhoneScreen extends Component {
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
    this.props.actions.loginFormFill(newData);
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
    let data = this.state.data;
    this.props.actions.login(data);
  }

  render(){
    return(
      <View style={styles.container}>
        <Typeform
          title={<Text style={[TextStyles.TITLESMALL, styles.title]}>{uiText.login.title.phone}</Text>}
          subtitle={
            <Text style={[TextStyles.H3, styles.subtitle]}>
              <Text style={styles.highlighted}>
                {this.props.data.name}
              </Text>
              <Text>
                Silakan mengisi nomor telepon Anda
              </Text>
            </Text>
          }
          inputAutoFocus
          inputPlaceholder={uiText.login.placeholder.phone}
          inputPlaceholderColor= {styles.textInputPlaceholder}
          inputTextStyle={[TextStyles.INPUT, styles.textInput]}
          inputKeyboardType='phone-pad'
          inputMaxLength={14}
          maskValue={this.props.data.phoneOnScreen}
          onChangeTextHandler={this.onChangeTextHandler.bind(this)}
          onSubmitEditingHandler={this.onSubmitEditingHandler.bind(this)}
          onTouchableWithoutFeedbackPress={this.onTouchableWithoutFeedbackPress.bind(this)}
          
          hideValidationMessage={this.state.hideValidationMessage}
          validationMessage={this.state.validationMessage}
          validationMessageStyle={[TextStyles.BODY, styles.validationMessage]}
          validationIconName={'md-warning'}
          validationIconSize={24}
          
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPhoneScreen);