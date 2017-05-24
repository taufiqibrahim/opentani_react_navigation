import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Button from '../Button/Button';
import {
  COLOR_GREEN,
  COLOR_BACKGND,
} from '../../styles/ColorPalette';
import text_styles from '../../styles/TextStyles';

export default class OnboardingFinal extends Component {
  constructor(props) {
    super(props);
    this.state =  { 
      
     };
  }

  onSignupBtn(){
    console.log(this.props)
    //this.props.navigation.navigate('Main');
  }

  render(){
    return(
      <View style={styles.wrapper}>
        <View style={styles.boxUpper}>
          <Text style={[text_styles.title, {color: COLOR_GREEN}]}>
            {this.props.onboard_title}
          </Text>
          <Text style={text_styles.body}>
            {this.props.onboard_subtitle}
          </Text>
        </View>
        <View style={styles.boxLower}>
          <View style={styles.buttonWrapper}>
            <Button 
              btnStyle={styles.buttonStyles} 
              txtStyle={styles.buttonTextStyle} 
              btnLabel='BERGABUNG'
              btnOnPress={this.props.btnOnPress}
            />
          </View>
        </View>
        <View style={styles.footer} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // Wrapper layout
  wrapper: {
    flex: 1,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  // Footer
  footer: {
    flex: 1,
    backgroundColor: COLOR_BACKGND,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 32,
  },
  // Upper Box
  boxUpper: {
    flex: 2,
    backgroundColor: COLOR_BACKGND,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  // Lower Box
  boxLower: {
    flex: 1,
    backgroundColor: COLOR_BACKGND,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  // Button wrapper
  buttonWrapper: {
    backgroundColor: 'transparent',
    flex: 2,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 64,

  },
  // Button
  buttonStyles: {
    height: 48,
    backgroundColor: COLOR_GREEN,
    borderRadius: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Button Text Style
  buttonTextStyle: {
    fontFamily: 'sans-serif',
    fontSize: 24,
    color: COLOR_BACKGND,
  }
})