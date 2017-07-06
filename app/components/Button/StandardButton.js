import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class StandardButton extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={this.props.buttonOnPress}
          style={this.props.buttonStyle}
        >
          <Text 
          style={this.props.buttonTextStyle}
          >
            {this.props.buttonLabel}
          </Text>
        </TouchableHighlight>
      </View>
    ) 
  }
}