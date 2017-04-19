import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  COLOR_PRIMARY, COLOR_SECONDARY, COLOR_OPENTANI_GREEN,
  COLOR_OPENTANI_GREY, COLOR_OPENTANI_DARKGREY, COLOR_OPENTANI_DARKESTGREY,
  COLOR_DEV, COLOR_OPENTANI_LIGHTGREY
} from '../../styles/ColorPalette';
import text_styles from '../../styles/TextStyles';

export default class Onboarding1 extends Component {
  constructor(props) {
    super(props);
    this.state =  { 
      
     };
  }

  render(){
    return(
      <View style={styles.wrapper}>
        <View style={styles.boxUpper}>
          <Text>Image here</Text>
        </View>
        <View style={styles.boxLower}>
          <Text style={[text_styles.h1, {color: COLOR_OPENTANI_GREEN}]}>{this.props.onboard_title}</Text>
          <Text style={text_styles.body}>{this.props.onboard_subtitle}</Text>
        </View>
        <View style={styles.footer} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: COLOR_PRIMARY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 32,
  },
  boxUpper: {
    flex: 6,
    backgroundColor: COLOR_DEV,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  boxLower: {
    flex: 4,
    backgroundColor: COLOR_PRIMARY,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingLeft: 32,
    paddingRight: 32,
  },
})