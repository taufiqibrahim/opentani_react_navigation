import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  COLOR_GREEN,
  COLOR_LIGHT,
} from '../../styles/ColorPalette';
import text_styles from '../../styles/TextStyles';

export default class Stories_1 extends Component {
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
          <Text style={[text_styles.H1, {color: COLOR_GREEN}]}>{this.props.onboard_title}</Text>
          <Text style={text_styles.BODY}>{this.props.onboard_subtitle}</Text>
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
    flex: 3,
    backgroundColor: COLOR_LIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 32,
  },
  boxUpper: {
    flex: 6,
    backgroundColor: COLOR_LIGHT,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  boxLower: {
    flex: 4,
    backgroundColor: COLOR_LIGHT,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingLeft: 32,
    paddingRight: 32,
  },
})