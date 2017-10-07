'use strict'

/*
 * Modal Styling Global
 * Author: Taufiq Ibrahim
 * Implemented by: Taufiq Ibrahim
 * Date: 2017-09-17 23:11
 */
import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  COLOR_GREEN,
  COLOR_LIGHT,
  COLOR_DARK,
  COLOR_DARK_GREEN,
  COLOR_DEEP_ORANGE
} from './ColorPalette';
import { PADDING, MARGIN } from './SpacingStyles';

const { width, height} = Dimensions.get('window');
const borderWidth = 1;

export const ButtonSS = StyleSheet.create({

	buttonNegative: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    marginRight: MARGIN.H/2,
	},
	buttonTextNegative: {
		color: COLOR_GREEN,
	},
	buttonPositive: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    marginLeft: MARGIN.H/2,
	},
	buttonTextPositive: {
		color: COLOR_LIGHT,
	},

  buttonFillLarge: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: COLOR_GREEN,
    borderColor: COLOR_GREEN,
    height: height/10,
    borderRadius: height/100,
    borderWidth: 1,
  },
	buttonTextFillLarge: {
		color: COLOR_LIGHT,
	},

	buttonLineLarge: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderColor: COLOR_GREEN,
    height: height/10,
    borderRadius: height/100,
    borderWidth: 1,
	},

	buttonTextLineLarge: {
		color: COLOR_GREEN,
	},

	buttonLineSmall: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderColor: COLOR_GREEN,
    height: height/20,
    borderRadius: height/100,
    borderWidth: 1,
	},

	buttonTextLineSmall: {
		color: COLOR_GREEN,
	},
	
})