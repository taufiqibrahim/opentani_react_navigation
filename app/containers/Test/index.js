import React, {Component, PropTypes} from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  Easing,
} from 'react-native';
import Button from '../../components/Button/Button';
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
const SPRING_CONFIG = { tension: -10, friction: 7}; //Soft spring

export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0),     // opacity 0
      springAnim: new Animated.Value(0),   // animation value for spring
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

    console.log(this.state)
  }



  render() {
    this.anim = this.anim || new Animated.Value(0);
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: this.state.fadeAnim,   // Bind the animation
        }}
      >
        <Button 
          btnStyle={{ opacity: this.state.fadeAnim }} 
          txtStyle={styles.buttonTextStyle} 
          btnLabel={'Pencet'}
          //btnOnPress={this.props.buttonOnPress}
        /> 
        <Text
          // onPress={ () => {
          //   Animated.spring(
          //     this.anim,
          //     {
          //       toValue: 1,
          //       velocity: 3,
          //       tension: 5,  // slow
          //       friction: 7,   // oscillate a lot
          //     },
          //   ).start();
          //   console.log(this.anim)
          // }}
        >
        Press Here
        </Text>
        <Animated.Image
          style={[
            { width: 100, height: 100 },
            // {
            //   transform: [
            //     {
            //       scale: this.anim.interpolate({
            //         inputRange: [0.5,1],
            //         outputRange: [0.5, 1],
            //       })
            //     }
            //   ]
            // }
          ]}
          //style={{ width: 100, height: 100 }}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>
    )
  }
}

//source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}