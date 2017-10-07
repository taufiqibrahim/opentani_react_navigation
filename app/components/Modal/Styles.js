import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_GREEN,
  COLOR_LIGHT,
  COLOR_GREY,
} from '../../styles/ColorPalette';
import {
  MARGIN,
} from '../../styles/SpacingStyles';
import TextStyles from '../../styles/TextStyles';

const { width, height} = Dimensions.get('window');
const buttonMargin = 8;
const borderWidth = 2;

export default StyleSheet.create({
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
  buttonWrapper: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonPositive: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_LIGHT,
    height: height/16,
    borderRadius: height/100,
    borderWidth: borderWidth,
    borderColor: 'transparent',
    marginHorizontal: MARGIN.H,
  },
  buttonNegative: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: height/16,
    borderRadius: height/100,
    borderWidth: borderWidth,
    borderColor: 'transparent',
    marginHorizontal: MARGIN.H,
  },
  buttonPositiveTextStyle: {
    color: COLOR_GREEN,
  },
  buttonNegativeTextStyle: {
    color: COLOR_LIGHT,
  },
});