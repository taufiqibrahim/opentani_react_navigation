import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StandardButton from '../Button/StandardButton';
import {
  COLOR_GREEN,
  COLOR_BACKGND,
  COLOR_LIGHT,
} from '../../styles/ColorPalette';
import TextStyles from '../../styles/TextStyles';
import styles from './Styles';

export default class DefaultModalView extends Component {

  renderButton () {
    if (this.props.modalSingleButton) {
      return (
        <View style={{
          flex: 1, 
          flexDirection: 'row', 
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <StandardButton 
            buttonStyle={this.props.modalButtonStyle}
            buttonTextStyle={this.props.modalButtonTextStyle}
            buttonLabel={this.props.modalButtonLabel}
            buttonOnPress={this.props.modalButtonOnPress}
          />
        </View> 
      )         
    } 
    else {
      return (
        <View style={{
          flex: 1, 
          flexDirection: 'row', 
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <StandardButton 
            buttonStyle={this.props.modalButtonNegativeStyle}
            buttonTextStyle={this.props.modalButtonNegativeTextStyle}
            buttonLabel={this.props.modalButtonNegativeLabel}
            buttonOnPress={this.props.modalButtonNegativeOnPress}
          />
          <StandardButton 
            buttonStyle={this.props.modalButtonPositiveStyle}
            buttonTextStyle={this.props.modalButtonPositiveTextStyle}
            buttonLabel={this.props.modalButtonPositiveLabel}
            buttonOnPress={this.props.modalButtonPositiveOnPress}
          />
        </View>     
      )
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.whiteSpace}></View>
        <View style={styles.modalWrapper}>
          <View
            style={{
              flex: 4,
              flexDirection: 'row',
              backgroundColor: COLOR_LIGHT,
              alignItems: 'center'
            }}
          >
            <View style={{flex: 1, alignItems: 'center'}}>
              <View>
                <Text>
                  {this.props.iconItem}
                </Text>
              </View>
              <View>
                <Text>
                  {this.props.modalMessage}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: COLOR_GREEN,
              alignItems: 'center',
              paddingVertical: 8,
            }}
          >
            {this.renderButton(this.props.modalSingleButton)}
          </View>
        </View>
        <View style={styles.whiteSpace}></View>
      </View>
    )
  }
}