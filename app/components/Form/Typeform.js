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
import Modal from 'react-native-modal';
import DefaultModalView from '../Modal/Default';
import FormValidator from './FormValidator';
import StandardButton from '../Button/StandardButton';
import FadeInView from '../AnimatedView/FadeInView';
import {
  COLOR_GREEN,
  COLOR_BACKGND,
  COLOR_TEXT_LIGHT,
} from '../../styles/ColorPalette';

export default class Typeform extends Component {

	render(){
    //const 
    //console.log(this.props)
    return (
      <TouchableWithoutFeedback
        //onPress={Keyboard.dismiss}
        onPress={(text) => this.props.onTouchableWithoutFeedbackPress(text)}
      >
        <View style={styles.container}>
          <View style={styles.boxUpper}>
            <Text style={this.props.subtitleTextStyle}>
              {this.props.subtitle}
            </Text>
          </View>
          <View style={styles.formWrapper}>
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
            <View>
              {
                this.props.hideValidationMessage 
                ? (<View />) 
                : (<View><FormValidator validationMessage={this.props.validationMessage} /></View>)
              }
            </View>
          </View>
          <View style={styles.boxLower}>
            <View style={styles.buttonWrapper}>
              {
                this.props.buttonShow
                ?
                <FadeInView>
                  <StandardButton 
                    buttonStyle={this.props.buttonStyles} 
                    buttonTextStyle={this.props.buttonTextStyle} 
                    buttonLabel={this.props.buttonLabel}
                    buttonOnPress={this.props.buttonOnPress}
                  /> 
                </FadeInView>
                :
                <View />
              }
            </View>
          </View>
          <Modal 
            animationIn='slideInUp'
            animationInTiming={600}
            animationOutTiming={600}
            isVisible={this.props.modalVisible}
            hideOnBack
            onBackButtonPress={this.props.modalBackButtonPressed}
          >
            <DefaultModalView
              modalMessage={this.props.modalMessage}
              modalButtonNegativeOnPress={this.props.modalButtonNegativeOnPress}
              modalButtonPositiveOnPress={this.props.modalButtonPositiveOnPress}
            />
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_GREEN,
  },
  // Wrapper layout
  wrapper: {
    flex: 1,
    backgroundColor: COLOR_GREEN,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  // Upper Box
  boxUpper: {
    flex: 4,
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    paddingHorizontal: 32,
    paddingBottom: 24,
  },
  formWrapper: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    paddingHorizontal: 32,    
  },
  // Text input form wrapper
  textInput: {
    height: Dimensions.get('window').height / 10,
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
  },
  // Validation text
  validation: {
    flex: 0.5,
    backgroundColor: 'transparent',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
  },
  // Lower Box
  boxLower: {
    flex: 3,
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  // Footer
  footer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 32,
  },
  // Button wrapper
  buttonWrapper: {
    backgroundColor: 'transparent',
    flex: 2,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 72,
  },
})