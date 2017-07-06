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
const buttonMargin = 8;
const borderWidth = 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_LIGHT,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 8,
  },
  boxUpper: {
    flex: 2,
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  boxDescriptor: {
    flex: 3,
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  boxOther: {
    flex: 2,
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  boxButton: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPositive: {
    flex: 1,
    backgroundColor: COLOR_LIGHT,
    borderRadius: height/100,
    borderWidth: borderWidth,
    borderColor: COLOR_GREEN,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNegative: {
    flex: 1,
    backgroundColor: COLOR_GREEN,
    borderRadius: height/100,
    borderWidth: borderWidth,
    borderColor: COLOR_GREEN,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: buttonMargin,
  },
  buttonUnsigned: {
    flex: 1,
    backgroundColor: COLOR_DEEP_ORANGE,
    borderRadius: height/100,
    borderWidth: borderWidth,
    borderColor: COLOR_DEEP_ORANGE,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPositiveTextStyle: {
    fontFamily: 'sans-serif',
    color: COLOR_GREEN,
    paddingHorizontal: 24,
  },
  buttonNegativeTextStyle: {
    fontFamily: 'sans-serif',
    color: COLOR_LIGHT,
    paddingHorizontal: 24,
  },
  buttonUnsignedTextStyle: {
    fontFamily: 'sans-serif',
    color: COLOR_LIGHT,
    paddingHorizontal: 24,
  },
})