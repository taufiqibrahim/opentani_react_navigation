import React, {Component} from 'react';
import {
  Text,
} from 'react-native';

class DetailScreen extends Component {
  static navigationOptions = {
    title: 'Detail Screen',
  };

  render() {
    return <Text>Nah!! This is Detail Screen</Text>
  }
}

export default DetailScreen