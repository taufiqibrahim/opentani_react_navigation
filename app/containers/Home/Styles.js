import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_LIGHT,
} from '../../styles/ColorPalette';
import TextStyles from '../../styles/TextStyles';


const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: COLOR_OPENTANI_LIGHTGREY,
  },
  fullScreen: {
    flex: 1,
    width: width,
    height: height,
  },
  headerWrapper: {
    flex: 1,
    //backgroundColor: COLOR_PRIMARY,
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptorWrapper: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  // Menu Wrapper
  menuWrapper: {
    flex: 8,
    //backgroundColor: COLOR_OPENTANI_LIGHTGREY,
    backgroundColor: '#00C85333',
    opacity: 10,
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
    //elevation: 2,
    //backgroundColor: COLOR_PRIMARY,
    backgroundColor: 'transparent',
    borderRadius: 2,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Icon
  iconStyle: {
    fontFamily: 'sans-serif',
    fontSize: 56,
    fontWeight: 'normal',
    color: COLOR_LIGHT,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 8,
  },
  // Icon Text Style
  iconTxtStyle: {
    fontFamily: 'sans-serif-light',
    fontSize: 16,
    fontWeight: 'normal',
    color: COLOR_LIGHT,
    alignSelf: 'center',
    textAlign: 'center',
  },  
});