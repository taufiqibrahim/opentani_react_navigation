import React, { Component } from 'react';
import { 
  Text,
  TouchableHighlight,
  Animated, 
} from 'react-native';

export default class Button extends Component {
  spring() {
    const a = new Animated.Value(0.3);
    Animated.spring(
      a, {
        toValue: 1,
        friction: 3,
      }
    ).start();
  }
  componentDidMount() {
    this.spring();
  }
  render() {
    return (
      <Animated.View>
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
      </Animated.View>
    ) 
  }
}