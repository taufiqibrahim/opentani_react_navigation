import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import FormValidator from './FormValidator';
import StandardButton from '../Button/StandardButton';
import FadeInView from '../AnimatedView/FadeInView';

import {
  COLOR_GREEN,
  COLOR_BACKGND,
  COLOR_LIGHT,
} from '../../styles/ColorPalette';
import { MS, ModalSS } from '../../styles/ModalStyles';
import { PADDING, MARGIN } from '../../styles/SpacingStyles';

export default class Typeform extends Component {

  state = {
    isKeyboardVisible: false,
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({isKeyboardVisible: true});
  }

  _keyboardDidHide = () => {
    this.setState({isKeyboardVisible: false});
  }

	render(){
    const isKeyboardVisible = this.state.isKeyboardVisible
    return (
      <TouchableWithoutFeedback
        onPress={(text) => this.props.onTouchableWithoutFeedbackPress(text)}
      >
        <View style={styles.container}>
          
          <View style={isKeyboardVisible ? styles.boxOneShrinked : styles.boxOne}>
            {this.props.title}
          </View>
          
          <View style={styles.boxTwo}>
            {this.props.subtitle}
          </View>
          
          <View style={styles.boxThree}>
            <View style={styles.boxThreeOne}>
              <View style={styles.textInput}>
                <TextInput
                  value={this.props.maskValue}
                  style={this.props.inputTextStyle}
                  keyboardType={this.props.inputKeyboardType}
                  autoCapitalize={this.props.inputAutoCapitalize}
                  placeholder={this.props.inputPlaceholder}
                  placeholderTextColor={this.props.inputPlaceholderColor}
                  maxLength={this.props.inputMaxLength}
                  onChangeText={(text) => this.props.onChangeTextHandler(text)}
                  onSubmitEditing={(text) => this.props.onSubmitEditingHandler(text)}
                  autoFocus={this.props.inputAutoFocus}
                  secureTextEntry={this.props.inputSecureTextEntry}
                />
              </View>
            </View>
            
            <View style={styles.boxThreeTwo}>
              {
                this.props.hideValidationMessage 
                ? (<View />) 
                : (
                    <View>
                      <FormValidator 
                        validationMessage={this.props.validationMessage}
                        validationMessageStyle={this.props.validationMessageStyle}
                        validationIconName={this.props.validationIconName}
                        validationIconSize={this.props.validationIconSize}
                      />
                      </View>)
              }
            </View>
          </View>
          
          <View style={styles.boxFour}>
            <View style={styles.buttonWrapper}>
              {this.props.renderButtons}
            </View>
          </View>

          <View style={isKeyboardVisible ? styles.boxFiveShrinked: styles.boxFive}>
            <View style={styles.buttonWrapper}>
              {isKeyboardVisible ? null : this.props.renderBottomButtons}
            </View>
          </View>

        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_LIGHT,
  },
  boxOne: {
    flex: 4,
    backgroundColor: COLOR_GREEN,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: PADDING.T,
    paddingBottom: PADDING.B,
    paddingHorizontal: PADDING.H,
  },
  boxOneShrinked: {
    flex: 1,
    backgroundColor: COLOR_GREEN,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: PADDING.T,
    paddingBottom: PADDING.B,
    paddingHorizontal: PADDING.H,
  },
  boxTwo: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    paddingTop: PADDING.T * 2,
    paddingHorizontal: PADDING.H,
  },
  boxThree: {
    flex: 4,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    paddingHorizontal: PADDING.H,
  },
  boxThreeOne: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    paddingTop: PADDING.T,
  },
  boxThreeTwo: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
  },
  boxFour: {
    flex: 3,
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: PADDING.H,
  },
  boxFive: {
    flex: 2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: PADDING.T,
    paddingHorizontal: PADDING.H,
  },
  boxFiveShrinked: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: PADDING.T,
    paddingHorizontal: PADDING.H,
  },
  textInput: {
    height: Dimensions.get('window').height / 10,
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
  },
  buttonWrapper: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
})  