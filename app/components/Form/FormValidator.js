import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  COLOR_TEXT_LIGHT,
  COLOR_PLACEHOLDER_ON_GREEN,
} from '../../styles/ColorPalette';
import TextStyles from '../../styles/TextStyles';

export default class FormValidator extends Component {
  render() {
    return (

      <Text style={[TextStyles.BODY, {color: COLOR_TEXT_LIGHT, textAlign: 'left'}]}>
        <Icon name={'md-warning'} size={24} />
        {' '}{this.props.validationMessage}
      </Text>
    )
  }
}