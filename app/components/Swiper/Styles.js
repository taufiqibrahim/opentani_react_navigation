import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_GREEN,
  COLOR_BACKGND,
  COLOR_GREY,
} from '../../styles/ColorPalette';

const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
  // Set width & height to the screen size
  // Main container
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGND,
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
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    // position: 'absolute',
    bottom: 0,
    paddingHorizontal: 8,
    paddingBottom: 64,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  // Button
  buttonStyles: {
    flex: 1,
    flexDirection: 'column',
    height: 36,
    backgroundColor: 'transparent',
    borderRadius: 8,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8, 
    marginBottom: 8,
  },
  // Button Text
  buttonTextStyle: {
    color: COLOR_GREEN,
  },
  // OK Button
  okButtonStyles: {
    flex: 1,
    flexDirection: 'column',
    height: 36,
    backgroundColor: COLOR_GREEN,
    borderRadius: 8,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8, 
    marginBottom: 8,
  },
  // Dummy
  dummySpacerStyles: {
    flex: 1,
    flexDirection: 'column',
    height: 36,
    backgroundColor: 'transparent',
    borderRadius: 8,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8, 
    marginBottom: 8,
  },
});