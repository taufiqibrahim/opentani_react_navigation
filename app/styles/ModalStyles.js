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

export const MS = {
  ICON_SIZE: 48,
  ANIMATION_IN: 'slideInUp',
  ANIMATION_IN_TIMING: 600,
  ANIMATION_OUT_TIMING: 600,

}

export const ModalSS = StyleSheet.create({

  modalTopAreaStyle: {
    backgroundColor: COLOR_LIGHT,
  },
  modalBottomAreaStyle: {
    backgroundColor: COLOR_GREEN,
  },

  modalButtonStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: height/16,
    borderRadius: height/100,
    borderWidth: borderWidth,
    borderColor: COLOR_LIGHT,
    marginHorizontal: MARGIN.H,
  },
  modalButtonTextStyle: {
    color: COLOR_LIGHT,
  },
  
  modalButtonNegativeStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: height/16,
    borderRadius: height/100,
    borderWidth: borderWidth,
    borderColor: COLOR_LIGHT,
    marginHorizontal: MARGIN.H,
  },
  modalButtonNegativeTextStyle: {
    color: COLOR_LIGHT,
  },
  
  modalButtonPositiveStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_DEEP_ORANGE,
    height: height/16,
    borderRadius: height/100,
    borderWidth: borderWidth,
    borderColor: COLOR_DEEP_ORANGE,
    marginHorizontal: MARGIN.H,
  },
  modalButtonPositiveTextStyle: {
    color: COLOR_LIGHT,
  },
})