import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_GREEN,
  COLOR_LIGHT
} from '../../../styles/ColorPalette';

const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
  // Button
  buttonStyles: {
    height: height/10,
    backgroundColor: COLOR_LIGHT,
    borderRadius: height/20,
    borderWidth: 2,
    borderColor: COLOR_GREEN,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Button Text Style
  buttonTextStyle: {
    fontFamily: 'sans-serif',
    fontSize: 30,
    color: COLOR_GREEN,
  }
})