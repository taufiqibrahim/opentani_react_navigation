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
  COLOR_DARK_GREEN,
  COLOR_BACKGND,
  COLOR_LIGHT,
  COLOR_TEXT_LIGHT,
} from '../../styles/ColorPalette';

export default class ConfirmationForm extends Component {

  renderStruct = () => {
    const struct = this.props.struct;
        /*const struct=[
          {label: 'Nama', value: 'Omar'}, 
          {label: 'Tole', value: 'omar@google.com'},
          {label: 'Nomor telepon', value: '085287'},
        ]*/
    return struct.map((k, i) => {
      return (
        <View 
          key={i} 
          style={{
            flex: 1, 
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            justifyContent: 'flex-start',
            backgroundColor: 'transparent',
          }}
        >
          <View 
            style={{
              flex: 0.5, 
              alignItems: 'flex-end'
            }}
          >
            <Text 
              style={this.props.structLabelTextStyle}
            >
              {k.label}
            </Text>
          </View>
          <View 
            style={{
              flex: 1, 
              flexDirection: 'row',
              alignItems: 'flex-start', 
              alignSelf: 'stretch',
              marginBottom: 8,
              borderBottomColor: COLOR_DARK_GREEN, 
              borderBottomWidth: 1,
            }}
          >
            <Text style={this.props.structValueTextStyle}>
              {k.value}
            </Text>
          </View>
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
          <View style={{flex:1, flexDirection: 'column', alignItems: 'stretch'}}>
            {this.renderStruct()}
          </View>
        </View>
        <View style={styles.boxLower}>
          <View style={styles.buttonWrapper}>
            <StandardButton 
              buttonStyle={this.props.buttonStyles} 
              buttonTextStyle={this.props.buttonTextStyle} 
              buttonLabel={this.props.buttonLabel}
              buttonOnPress={this.props.buttonOnPress}
            /> 
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLOR_GREEN,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  boxUpper: {
    flex: 3,
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    paddingHorizontal: 32,
    marginBottom: 24,
  },
  formWrapper: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    paddingHorizontal: 32,
  },
  boxLower: {
    flex: 3,
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 32,
  },
  buttonWrapper: {
    backgroundColor: 'transparent',
    flex: 2,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 72,
  },
})