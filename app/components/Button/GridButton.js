import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/SimpleLineIcons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

export default class GridButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.btnOnPress}
        style={this.props.btnStyle}
      >
        <View>
          <Icon name={this.props.iconName} style={this.props.iconStyle} />
          <Text style={this.props.iconTxtStyle}>{this.props.btnLabel}</Text>
        </View>
      </TouchableHighlight>
    ) 
  }
}