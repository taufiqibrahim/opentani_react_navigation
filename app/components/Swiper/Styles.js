import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_GREEN,
  COLOR_LIGHT,
  COLOR_GREY,
} from '../../styles/ColorPalette';

const { width, height} = Dimensions.get('window');

const lowerHalf = 0.125*height;
const widthByThree = 0.3*width;

export default StyleSheet.create({
  // Set width & height to the screen size
  // Main container
  container: {
    flex: 1,
    backgroundColor: COLOR_LIGHT,
    // position: 'relative',
  },
  fullScreen: {
    flex: 1,
    width: width,
    height: height,
  },
  // Slide
  slide: {
    backgroundColor: 'transparent',
  },
  // Pagination indicator
  pagination: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  // Pagination dot
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
  // Active dot
  activeDot: {
    backgroundColor: COLOR_GREEN,
  },
  // Button wrapper
  buttonWrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'stretch',
    position: 'absolute',
    bottom: lowerHalf,
    left: 0,
    right: 0,
    paddingHorizontal: widthByThree,
  },
  // Button
  buttonStyles: {
    flex: 1,
    flexDirection: 'column',
    height: 36,
    backgroundColor: COLOR_LIGHT,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: COLOR_GREEN,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Button Text
  buttonTextStyle: {
    color: COLOR_GREEN,
  },
});