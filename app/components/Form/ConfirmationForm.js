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
import { PADDING, MARGIN } from '../../styles/SpacingStyles';

export default class ConfirmationForm extends Component {

  renderStruct = () => {
    const struct = this.props.struct;
        /*const struct=[
          {label: 'Nama', value: 'Omar'}, 
          {label: 'Email', value: 'omar@google.com'},
          //{label: 'Nomor telepon', value: '085287'},
        ];*/
    return struct.map((k, i) => {
      return (
        <View 
          key={i} 
          style={{
            flex: 1, 
            flexDirection: 'column', 
            alignItems: 'stretch', 
            justifyContent: 'flex-start',
            backgroundColor: 'transparent',
          }}
        >
          <View 
            style={{
              flex: 0.5,
              flexDirection: 'column',
              backgroundColor: 'transparent',
              alignItems: 'flex-start', 
              alignSelf: 'stretch',
              justifyContent: 'flex-start',
            }}
          >
            <View style={{flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-end'}}>
              <Text style={this.props.structLabelTextStyle}>{k.label}</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1, 
              flexDirection: 'column',
              backgroundColor: 'transparent',
              alignItems: 'flex-start', 
              alignSelf: 'stretch',
              marginBottom: 40,
              borderBottomColor: COLOR_DARK_GREEN, 
              borderBottomWidth: 1,
            }}
          >
            <View style={{flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-end', marginBottom: 8}}>
              <Text style={this.props.structValueTextStyle}>
                {k.value}
              </Text>
            </View>
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
          <View style={{flex:1, flexDirection: 'column', alignItems: 'stretch',}}>
            {this.renderStruct()}
          </View>
        </View>
        <View style={styles.boxLower}>
          <View style={styles.buttonWrapper}>
            {this.props.renderButtons}
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  boxUpper: {
    flex: 3,
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: PADDING.H,
  },
  formWrapper: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: PADDING.T,
    paddingHorizontal: PADDING.H,
  },
  boxLower: {
    flex: 3,
    backgroundColor: 'transparent',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: PADDING.H,
  },
  footer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: PADDING.H,
  },
  buttonWrapper: {
    backgroundColor: 'transparent',
    flex: 2,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
})