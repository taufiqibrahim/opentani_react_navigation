import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    /*position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height,*/
  },
  loader: {
    flex: 4,
    justifyContent: 'flex-end',
  },
  footer: {
    flex: 3
  },
  none: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 0,
  }
})