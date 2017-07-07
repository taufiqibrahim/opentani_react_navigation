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
import text_styles from '../../../styles/TextStyles';

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
  },
  boxLower: {
    flex: 4,
    backgroundColor: 'transparent',
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
    paddingHorizontal: 8,
  },
  buttonStyles: {
    height: 48,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 24,
    borderWidth: 2,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: COLOR_LIGHT,
    fontSize: 14,
    fontWeight: 'bold',
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