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

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: COLOR_LIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 32,
  },
  boxUpper: {
    flex: 6,
    backgroundColor: COLOR_LIGHT,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  boxLower: {
    flex: 4,
    backgroundColor: COLOR_LIGHT,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingLeft: 32,
    paddingRight: 32,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})