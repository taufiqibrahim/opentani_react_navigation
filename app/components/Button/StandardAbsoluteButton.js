import React, { Component } from 'react';
import { 
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from 'react-native';
import StandardButton from './StandardButton';

const { width, height} = Dimensions.get('window');

export default class StandardAbsoluteButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          <View style={{flex: 1, flexDirection: 'column', height: 100}}>
            <StandardButton 
              buttonOnPress={this.props.buttonOnPress}
              buttonStyle={this.props.buttonStyle}
              buttonTextStyle={this.props.buttonTextStyle}
              buttonLabel={this.props.buttonLabel}
            />
          </View>
        </View>
        <View style={styles.footer} />
      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height,
  },
  buttonWrapper: {
    flex: 4,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footer: {
    flex: 3
  },
  none: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 0,
  }
})