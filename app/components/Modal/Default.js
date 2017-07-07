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
                  <Icon name={'signal-cellular-off'} size={64} />
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
            <View style={{
              flex: 1, 
              flexDirection: 'row', 
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <StandardButton 
                buttonStyle={styles.buttonNegative}
                buttonTextStyle={[TextStyles.BODY, styles.buttonNegativeTextStyle]}
                buttonLabel={'Daftar nanti saja'}
                buttonOnPress={this.props.modalButtonNegativeOnPress}
              />
              <StandardButton 
                buttonStyle={styles.buttonPositive} 
                butonTextStyle={[TextStyles.BODY, styles.buttonPositiveTextStyle]}
                buttonLabel={'Coba lagi'}
                buttonOnPress={this.props.modalButtonPositiveOnPress}
              />
            </View>
          </View>
        </View>
        <View style={styles.whiteSpace}></View>
      </View>
    )
  }
}