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

const { width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: COLOR_LIGHT,
  },
  subtitle: {
    color: COLOR_DARK,
    textAlign: 'center',
  },
  textInput: {
    color: COLOR_DARK,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textInputPlaceholder: {
    color: COLOR_DARK,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
  },
  validationMessage: {
    color: COLOR_DARK,
    textAlign: 'left',
  },
  highlighted: {
    fontWeight: 'bold',
    color: COLOR_GREEN,
  },
  buttonStyles: {
    height: height/10,
    backgroundColor: COLOR_LIGHT,
    borderRadius: height/100,
    borderWidth: 1,
    borderColor: COLOR_GREEN,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: COLOR_GREEN,
  },
  buttonResendOtpStyles: {
    height: height/10,
    backgroundColor: COLOR_LIGHT,
    borderRadius: height/100,
    borderWidth: 2,
    borderColor: COLOR_GREEN,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',  
  },
  buttonResendOtpTextStyle: {
    color: COLOR_GREEN,
  },
  circleButtonIconStyle: {
    color: COLOR_GREEN,
    textAlign: 'center'
  },
  circleButtonTextStyle: {
    color: COLOR_GREEN,
    textAlign: 'center'
  },
})