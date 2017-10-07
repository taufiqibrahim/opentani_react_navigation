import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  COLOR_GREEN,
  COLOR_LIGHT,
  COLOR_DEEP_ORANGE,
  COLOR_DARK
} from '../../../styles/ColorPalette';
import TextStyles from '../../../styles/TextStyles';
import { ButtonSS } from '../../../styles/ButtonStyles';

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
  buttonAnimWrapper: {
    flex: 1,
    marginTop: 8,
  },
  askResendOtpTextStyle: {
    paddingBottom: 8,
  },
  buttonResendOtpStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_LIGHT,
    height: height/20,
    width: 20,
    borderRadius: height/100,
    borderWidth: 1,
    borderColor: COLOR_GREEN,
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
  padding: {
    paddingTop: 8,
  }
})