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
import { PADDING, MARGIN } from '../../../styles/SpacingStyles';

const { width, height} = Dimensions.get('window');
const buttonMargin = 8;
const borderWidth = 1;
const borderRadius = height/100;

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
    paddingBottom: PADDING.B,
    paddingHorizontal: PADDING.H,
  },
  boxUpper: {
    flex: 2,
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: PADDING.H,
  },
  boxDescriptor: {
    flex: 3,
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: PADDING.H,
  },
  boxOther: {
    flex: 2,
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: PADDING.H,
  },
  boxButton: {
    flex: 1.2,
    backgroundColor: 'transparent',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: PADDING.H,
  },
  buttonWrapper: {
    flex: 1, 
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
})