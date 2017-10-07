import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import StandardButton from '../../../components/Button/StandardButton';
import StandardLoader from '../../../components/Loader/StandardLoader';
import ModalView from '../../../components/Modal/';

import TextStyles from '../../../styles/TextStyles';
import { ButtonSS } from '../../../styles/ButtonStyles';
import { MS, ModalSS } from '../../../styles/ModalStyles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as profileActions from '../actions/';
import { NavigationActions } from 'react-navigation';

import styles from './Styles';

class ProfileMainScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    isLoading: this.props.data.isLoading,
    isModalVisible: false,
    buttonShow: true,
  }

  renderIcon (iconData) {
    return(
      <Icon 
        name={iconData.iconName} 
        size={MS.ICON_SIZE}
        style={MS.ICON_STYLE}
      />
    )
  }

  renderButtons () {
    return(
      <StandardButton
        buttonStyle={ButtonSS.buttonFillLarge}
        buttonTextStyle={[TextStyles.H1, ButtonSS.buttonTextFillLarge]}
        buttonLabel={'Logout'}
        buttonOnPress={this.onButtonPressed.bind(this)}
      />
    )
  }

  onButtonPressed () {
    this.props.actions.logout();
  }

  render() {
    let iconData = {
      iconName: 'ios-warning-outline'
    }
    return (
      <View style={styles.container}>
        <View style={styles.boxOne} />
        <View style={styles.boxTwo} />
        <View style={styles.boxThree} />
        <View style={styles.boxFour}>
          <View style={styles.buttonWrapper}>
            {this.renderButtons()}
          </View>
        </View>
        <View style={styles.boxFive} />

        <ModalView
          animationIn={MS.ANIMATION_IN}
          animationInTiming={MS.ANIMATION_IN_TIMING}
          animationOutTiming={MS.ANIMATION_OUT_TIMING}
          isVisible={true}
          hideOnBack={this.props.modalHideOnBack}
          onBackButtonPress={this.props.modalBackButtonPressed}

          modalSingleButton={false}
          modalIconItem={this.renderIcon(iconData)}
          modalMessage={'Modal ini'}
          modalTopAreaStyle={ModalSS.modalTopAreaStyle}
          modalBottomAreaStyle={ModalSS.modalBottomAreaStyle}

          modalButtonNegativeStyle={ModalSS.modalButtonNegativeStyle}
          modalButtonNegativeTextStyle={ModalSS.modalButtonNegativeTextStyle}
          modalButtonNegativeLabel={'BATAL'}
          modalButtonNegativeOnPress={this.props.modalButtonNegativeOnPress}

          modalButtonPositiveStyle={ModalSS.modalButtonPositiveStyle}
          modalButtonPositiveTextStyle={ModalSS.modalButtonPositiveTextStyle}
          modalButtonPositiveLabel={'KELUAR'}
          modalButtonPositiveOnPress={this.props.modalButtonPositiveOnPress}
        />

      </View>
    )
  }
}

function mapStateToProps(state) {
  const data = {
    isModalVisible: state.profile.isModalVisible,
    modalMessage: state.profile.modalMessage,
  }

  return { data }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( Object.assign( {}, profileActions ), dispatch ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProfileMainScreen);