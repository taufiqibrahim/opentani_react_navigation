import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Button from '../Button/Button';
import {
  COLOR_PRIMARY, COLOR_SECONDARY, COLOR_OPENTANI_GREEN,
  COLOR_OPENTANI_GREY, COLOR_OPENTANI_DARKGREY, COLOR_OPENTANI_DARKESTGREY,
  COLOR_DEV, COLOR_OPENTANI_LIGHTGREY
} from '../../styles/ColorPalette';
import text_styles from '../../styles/TextStyles';

export default class OnboardingFinal extends Component {
  constructor(props) {
    super(props);
    this.state =  { 
      
     };
  }

  render(){
    return(
      <View style={styles.wrapper}>
        <View style={styles.boxUpper}>
          <Text style={[text_styles.title, {color: COLOR_OPENTANI_GREEN}]}>
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
              txtStyle={styles.btnTextStyle} 
              btnLabel='Masuk' 
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
    backgroundColor: COLOR_PRIMARY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 32,
  },
  // Upper Box
  boxUpper: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  // Lower Box
  boxLower: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY,
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
    backgroundColor: COLOR_OPENTANI_GREEN,
    borderRadius: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Button Text Style
  buttonTextStyle: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    color: COLOR_PRIMARY,
  }
})