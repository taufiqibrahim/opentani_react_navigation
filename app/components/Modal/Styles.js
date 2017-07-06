import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_GREEN,
  COLOR_LIGHT,
  COLOR_GREY,
} from '../../styles/ColorPalette';
import TextStyles from '../../styles/TextStyles';

const { width, height} = Dimensions.get('window');
const buttonMargin = 8;
const borderWidth = 2;

export default StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  whiteSpace: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  modalWrapper: {
    flex: 2,
    backgroundColor: COLOR_LIGHT,
  },
  buttonPositive: {
    flex: 1,
    backgroundColor: COLOR_LIGHT,
    borderRadius: height/100,
    borderWidth: borderWidth,
    borderColor: COLOR_LIGHT,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    //marginRight: buttonMargin,
  },
  buttonNegative: {
    flex: 1,
    backgroundColor: 'transparent',
    borderRadius: height/100,
    borderWidth: borderWidth,
    borderColor: COLOR_LIGHT,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: buttonMargin,
  },
  buttonPositiveTextStyle: {
    fontFamily: 'sans-serif',
    color: COLOR_GREEN,
    paddingHorizontal: 16,
  },
  buttonNegativeTextStyle: {
    fontFamily: 'sans-serif',
    color: COLOR_LIGHT,
    paddingHorizontal: 16,
  },
});