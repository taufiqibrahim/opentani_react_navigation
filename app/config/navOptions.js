import { StyleSheet } from 'react-native';
import {
  COLOR_PRIMARY, 
  COLOR_SECONDARY, 
  COLOR_OPENTANI_GREEN,
  COLOR_DEV,
} from '../styles/ColorPalette';

/*
 * working on v1.0.0-beta9
 *
 */
const navOptions = {
  navigationOptions: {
    header: null
  },
}
/*
 * not working on 1.0.0-beta9

const navOptions = {
  navigationOptions: {
    header: {
      visible: true,
      style: {
        backgroundColor: COLOR_OPENTANI_GREEN,
      },
      titleStyle: {
        alignSelf: 'center',
        color: COLOR_PRIMARY,
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
      }
    }
  },
}
*/

export default navOptions;