import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.btnOnPress}
        style={this.props.btnStyle}
      >
        <Text 
        style={this.props.txtStyle}
        >
          {this.props.btnLabel}
        </Text>
      </TouchableHighlight>
    ) 
  }
}