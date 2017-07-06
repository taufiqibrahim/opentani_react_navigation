import React, {Component, PropTypes} from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  Easing,
} from 'react-native';
import StandardButton from '../../components/Button/StandardButton';
import {
  COLOR_LIGHT, COLOR_GREEN
} from '../../styles/ColorPalette'

const styles = StyleSheet.create({
  spinner: {
    marginTop: 20,
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
  // Button
  buttonStyles: {
    height: 56,
    backgroundColor: COLOR_GREEN,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: COLOR_LIGHT,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Button Text Style
  buttonTextStyle: {
    fontFamily: 'sans-serif',
    fontSize: 32,
    color: COLOR_LIGHT,
  }
})

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0),     // opacity 0
    }
  }

  componentDidMount() {
    Animated.timing(          // Use easing
      this.state.fadeAnim,    // The value to drive animation
      {
        toValue: 1,           // Target value
        duration: 2000,
      },
    ).start();

    //console.log(this.state)
  }



  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          
        }}
      >
        <Animated.View
          style={{ opacity: this.state.fadeAnim }}
        >
          <StandardButton 
            btnStyle={styles.buttonStyles}
            //{{ opacity: this.state.fadeAnim }} 
            buttonTextStyle={styles.buttonTextStyle} 
            btnLabel={'Pencet'}
            //btnOnPress={this.props.buttonOnPress}
          /> 
        </Animated.View>
        <Text>
        Press Here
        </Text>
        <Image
          style={{ width: 100, height: 100 }}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>
    )
  }
}