import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_GREEN,
  COLOR_LIGHT,
  COLOR_DEEP_ORANGE,
  COLOR_DARK_GREEN
} from '../../../styles/ColorPalette';
import {
  MARGIN,
  PADDING
} from '../../../styles/SpacingStyles';
import text_styles from '../../../styles/TextStyles';

const { width, height} = Dimensions.get('window');
const buttonMargin = 8;
const borderWidth = 1;
const borderRadius = height/100;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_GREEN,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 32,
  },
  boxUpper: {
    flex: 6,
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: PADDING.H,
  },
  boxLower: {
    flex: 4,
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: PADDING.H,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrimary: {
    color: COLOR_LIGHT,
  },
  textSecondary: {
    color: COLOR_LIGHT,
  },
  buttonWrapper: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  paginationDotStyle: {
    backgroundColor: COLOR_DARK_GREEN,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  paginationActiveDotStyle: {
    backgroundColor: COLOR_LIGHT,
  }, 
})