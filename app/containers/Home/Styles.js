import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_PRIMARY, COLOR_SECONDARY, COLOR_OPENTANI_GREEN,
  COLOR_OPENTANI_GREY, COLOR_OPENTANI_DARKGREY, COLOR_OPENTANI_DARKESTGREY,
  COLOR_DEV, COLOR_OPENTANI_LIGHTGREY
} from '../../styles/ColorPalette';

const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
  // Set width & height to the screen size
  // Main container
  container: {
    flex: 1,
    backgroundColor: COLOR_OPENTANI_LIGHTGREY,
    // position: 'relative',
  },
  fullScreen: {
    flex: 1,
    width: width,
    height: height,
  },
  // Header Wrapper
  headerWrapper: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Descriptor Wrapper
  descriptorWrapper: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  // Menu Wrapper
  menuWrapper: {
    flex: 8,
    backgroundColor: COLOR_OPENTANI_LIGHTGREY,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  // Grid Body
  gridBody: {
    flex: 1,
  },
  // Grid Horizontal
  gridHorizontal: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  // Grid Wrapper
  gridWrapper: {
    flex: 1,
    padding: 8,

  },
  // Grid Button
  gridStyles: {
    flex: 1,
    flexDirection: 'column',
    elevation: 2,
    backgroundColor: COLOR_PRIMARY,
    borderRadius: 4,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Icon
  iconStyle: {
    fontFamily: 'sans-serif',
    fontSize: 56,
    fontWeight: 'normal',
    color: COLOR_OPENTANI_GREEN,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 8,
  },
  // Icon Text Style
  iconTxtStyle: {
    fontFamily: 'sans-serif-light',
    fontSize: 14,
    fontWeight: 'bold',
    color: COLOR_OPENTANI_DARKESTGREY,
    alignSelf: 'center',
    textAlign: 'center',
  },  
});