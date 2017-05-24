import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={this.props.buttonOnPress}
          style={this.props.buttonStyle}
        >
          <Text 
          style={this.props.txtStyle}
          >
            {this.props.buttonLabel}
          </Text>
        </TouchableHighlight>
      </View>
    ) 
  }
}