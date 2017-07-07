import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './Styles';

export default class StandardLoader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={true}
          color={this.props.loaderColor}
          size='large'
          style={styles.loader}
        />
        <View style={styles.footer}/>
      </View>
    )
  }
}