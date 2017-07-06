import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import StandardButton from '../Button/StandardButton';
import CircleButton from '../Button/CircleButton';
import FadeInView from '../AnimatedView/FadeInView';
import {
  COLOR_GREEN,
  COLOR_BACKGND,
  COLOR_LIGHT,
  COLOR_TEXT_LIGHT,
} from '../../styles/ColorPalette';

export default class Optionform extends Component {

  renderButtons = () => {
    const data = this.props.buttonData;
    const r = this.props.buttonRadius;
    return data.map((k, i) => {
      return (
        <View key={i}>
          <CircleButton
            buttonLabel={k.label}
            buttonStyle={{
              width: r * 2,
              height: r * 2,
              borderRadius: r,
              borderWidth: 2,
              borderColor: this.props.buttonBorderColor,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            buttonOnPress={() => this.props.buttonOnPress(k.route, k.label)} //No bind required. use arrow func instead
            iconName={k.icon}
            iconStyle={this.props.buttonIconStyle}
            iconTxtStyle={this.props.buttonIconTxtStyle}
          />
        </View>
      )
    });
  }
  render(){
    return (
      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={styles.wrapper}
      >
        <View style={styles.boxUpper}>
          <Text style={this.props.subtitleTextStyle}>
            {this.props.subtitle}
          </Text>
        </View>
        <View style={styles.formWrapper}>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
            {this.renderButtons()}
          </View>
        </View>
        <View style={styles.boxLower}>
          <View style={styles.buttonWrapper}>
            {
              this.props.buttonShow
              ?
              <FadeInView>
                <StandardButton 
                  buttonStyle={this.props.buttonStyles} 
                  buttonTextStyle={this.props.buttonTextStyle} 
                  buttonLabel={this.props.buttonLabel}
                  buttonOnPress={this.props.buttonOnPress}
                /> 
              </FadeInView>
              :
              <View>
              </View>
            }
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  // Wrapper layout
  wrapper: {
    flex: 1,
    backgroundColor: COLOR_GREEN,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  // Upper Box
  boxUpper: {
    flex: 4,
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    paddingHorizontal: 32,
    marginBottom: 24,
  },
  formWrapper: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    paddingHorizontal: 32,
  },
  // Lower Box
  boxLower: {
    flex: 4,
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  // Footer
  footer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 32,
  },
  // Button wrapper
  buttonWrapper: {
    backgroundColor: 'transparent',
    flex: 2,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 72,
  },
})