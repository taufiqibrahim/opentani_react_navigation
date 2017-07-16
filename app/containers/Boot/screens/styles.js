import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_GREEN,
  COLOR_LIGHT,
  COLOR_DEEP_ORANGE
} from '../../../styles/ColorPalette';
import text_styles from '../../../styles/TextStyles';

const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_GREEN,
  },
  iconStyle: {
    fontFamily: 'sans-serif',
    fontSize: 56,
    fontWeight: 'normal',
    color: COLOR_LIGHT,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 8,
  },
  iconTxtStyle: {
    fontFamily: 'sans-serif-light',
    fontSize: 16,
    fontWeight: 'normal',
    color: COLOR_LIGHT,
    alignSelf: 'center',
    textAlign: 'center',
  },  
});