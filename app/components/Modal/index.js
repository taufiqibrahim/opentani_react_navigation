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
import Modal from 'react-native-modal';
import StandardButton from '../Button/StandardButton';
import TextStyles from '../../styles/TextStyles';
import styles from './Styles';

export default class ModalView extends Component {

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

  renderModalContainer () {
    return (
      <View style={styles.container}>
        <View style={styles.whiteSpace}></View>
        <View style={styles.modalWrapper}>
          <View
            style={[
              {
                flex: 4,
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8,
              },
              this.props.modalTopAreaStyle
            ]}
          >
            <View style={{flex: 1, alignItems: 'center'}}>
              <View>
                <Text>
                  {this.props.modalIconItem}
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
            style={[
              {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 8,
              },
              this.props.modalBottomAreaStyle
            ]}
          >
            {this.renderButton(this.props.modalSingleButton)}
          </View>
        </View>
        <View style={styles.whiteSpace}></View>
      </View>
    )
  }

  render () {
    return (
      <Modal 
        animationIn={this.props.modalAnimationIn}
        animationInTiming={this.props.modalAnimationInTiming}
        animationOutTiming={this.props.modalAnimationOutTiming}
        isVisible={this.props.isVisible}
        hideOnBack={this.props.modalHideOnBack}
        onBackButtonPress={this.props.modalBackButtonPressed}
      >
        {this.renderModalContainer()}
      </Modal>
    )
  }
}