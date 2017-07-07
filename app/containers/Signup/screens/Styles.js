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
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyles: {
    height: height/10,
    backgroundColor: COLOR_LIGHT,
    borderRadius: height/100,
    borderWidth: 2,
    borderColor: COLOR_GREEN,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: COLOR_GREEN,
  }
})