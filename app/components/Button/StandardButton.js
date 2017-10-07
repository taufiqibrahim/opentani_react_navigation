import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class StandardButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.props.buttonOnPress}
          style={this.props.buttonStyle}
        >
          <View style={styles.container}>
            <View style={styles.leftCol}>
              <Text 
              style={this.props.buttonTextStyle}
              >
                {this.props.buttonLabel}
              </Text>
            </View>
            {
              this.props.useRightIcon
              ?
              (
                <View style={styles.rightCol}>
                  <Icon name={this.props.iconName} style={this.props.iconStyle} />
                </View>
              )
              : null
            }
          </View>
        </TouchableHighlight>
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  rightCol: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  leftCol: {
    flex: 5,
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'center',
  }
})