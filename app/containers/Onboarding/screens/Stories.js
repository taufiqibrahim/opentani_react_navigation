import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  COLOR_GREEN,
  COLOR_LIGHT,
} from '../../../styles/ColorPalette';
import styles from './Styles';
import TextStyles from '../../../styles/TextStyles';

export default class Stories extends Component {
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
          <Text style={[TextStyles.H1, {color: COLOR_GREEN}]}>{this.props.onboard_title}</Text>
          <Text style={TextStyles.BODY}>{this.props.onboard_subtitle}</Text>
        </View>
        <View style={styles.footer} />
      </View>
    )
  }
}