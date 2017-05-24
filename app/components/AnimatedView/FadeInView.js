import React, {Component, PropTypes} from 'react';
import { 
  View,
  Animated,
} from 'react-native';

export default class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeInAnim: new Animated.Value(0),
    }
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeInAnim, {
        toValue: 1,
        duration: 1800,
      }
    ).start();
  }
  render() {
    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: this.state.fadeInAnim,
        }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}