import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import Button from '../../components/Button'

class MasterScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
    header: {
      visible: false,
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>This is Master Screen</Text>
        <Button 
        onPress={() => navigate('Detail')}
        btnLabel='Go to Detail'/>
      </View>
    )
  }
}

export default MasterScreen