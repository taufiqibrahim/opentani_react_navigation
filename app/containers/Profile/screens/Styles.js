import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_GREEN,
  COLOR_LIGHT,
  COLOR_DARK,
  COLOR_DARK_GREEN
} from '../../../styles/ColorPalette';
import { PADDING, MARGIN } from '../../../styles/SpacingStyles';

const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_LIGHT
  },
  boxOne: {flex: 4, backgroundColor: COLOR_GREEN},
  boxTwo: {flex: 3},
  boxThree: {flex: 4},
  boxFour: {
    flex: 3,
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    paddingHorizontal: PADDING.H,
  },
  boxFive: {flex: 2},
  buttonStyle: {
    flex: 1,
    height: height/10,
    backgroundColor: COLOR_LIGHT,
    borderRadius: height/100,
    borderWidth: 1,
    borderColor: COLOR_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },
})