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

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_LIGHT,
  },
  fullScreen: {
    flex: 1,
    width: width,
    height: height,
  },
  slide: {
    backgroundColor: 'transparent',
  },
  onboardingControlPagination: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onboardingControlOuter: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'stretch',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height*0.125,
  },
  onboardingControlInner: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  onboardingButtonWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: 'black',
  }
});