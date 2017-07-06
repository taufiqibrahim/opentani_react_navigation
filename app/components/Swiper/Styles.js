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
  dot: {
    backgroundColor: COLOR_GREY,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: COLOR_GREEN,
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
    //borderWidth: 2,
    //borderColor: 'red',
  },
  onboardingButtonWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyles: {
    flex: 1,
    flexDirection: 'row',
    height: 36,
    backgroundColor: COLOR_LIGHT,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: COLOR_GREEN,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: COLOR_GREEN,
  }
});