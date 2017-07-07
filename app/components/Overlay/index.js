import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width, height} = Dimensions.get('window');

export default class Overlay extends Component {
  render() {
    return (
      <View 
        style={{
          flex: 1,
          backgroundColor: 'black',
          opacity: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: height,
        }}
      >
      </View>
    )
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})*/