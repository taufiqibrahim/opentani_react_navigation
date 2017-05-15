import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import Button from '../Button/Button';
import {
  COLOR_GREEN,
  COLOR_BACKGND,
  COLOR_TEXT_LIGHT,
} from '../../styles/ColorPalette';

export default class Typeform extends Component {
	render(){
    return (
      <View style={styles.wrapper}>
        <View style={styles.boxUpper}>
          <Text style={this.props.subtitleTextStyle}>
            {this.props.subtitle}
          </Text>
        </View>
        <View style={styles.formWrapper}>
          <TextInput
            style={this.props.inputTextStyle}
            placeholder={this.props.inputPlaceholder}
            placeholderTextColor={this.props.inputPlaceholderColor}
            onChangeText={(text) => this.props.onChangeTextHandler(text)}
          />
        </View>
        <View style={styles.boxLower}>
          <View style={styles.buttonWrapper}>
            <Button 
              btnStyle={this.props.buttonStyles} 
              txtStyle={this.props.buttonTextStyle} 
              btnLabel={this.props.btnLabel}
              btnOnPress={this.props.buttonOnPress}
            />
          </View>
        </View>
      </View>
    )
  }
}

/*
mapStateToProps = (state) => {
  const name = state.signup.name

  return { name }
}

mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators( Object.assign( {}, signupActions ), dispatch ),
  }
}
*/

const styles = StyleSheet.create({
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
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  formWrapper: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    paddingHorizontal: 32,
  },
  // Lower Box
  boxLower: {
    flex: 4,
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
    paddingHorizontal: 32,
  },
})