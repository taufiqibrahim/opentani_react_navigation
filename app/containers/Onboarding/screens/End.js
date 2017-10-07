import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appStateActions from '../../../stateManager/actions/';
import { NavigationActions } from 'react-navigation';
import StandardButton from '../../../components/Button/StandardButton';

import {
  COLOR_GREEN,
  COLOR_LIGHT,
  COLOR_DEEP_ORANGE
} from '../../../styles/ColorPalette';
import TextStyles from '../../../styles/TextStyles';
import { ButtonSS } from '../../../styles/ButtonStyles';
import styles from '../styles/';

class End extends Component {
  static navigationOptions = {
    header: null,
  }

  handle() {
    const navigateActions = NavigationActions.navigate({
      routeName: 'Wall',
      params: {},
      action: NavigationActions.navigate({ routeName: 'Wall' })
    });

    this.props.actions.appOnboardingFinished();
    this.props.navigation.dispatch(navigateActions);    
  }

  render(){
    
    return(
      <View style={styles.container}>
        <View style={styles.boxUpper}>
          <Text style={[TextStyles.XL, {color: COLOR_LIGHT}]}>
            {this.props.onboard_title}
          </Text>
        </View>
        <View style={styles.boxLower}>
          <Text style={[TextStyles.GUIDE, {color: COLOR_LIGHT}]}>
            {this.props.onboard_subtitle}
          </Text>
        </View>
        <View style={styles.boxLower} />
        <View style={styles.boxLower} />
        <View style={styles.boxLower}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.buttonWrapper}>
              <StandardButton 
                buttonStyle={[ButtonSS.buttonFillLarge, {backgroundColor: COLOR_LIGHT, borderColor: COLOR_LIGHT, }]} 
                buttonTextStyle={this.props.buttonTextStyle}
                buttonLabel={this.props.buttonLabel}
                buttonOnPress={this.handle.bind(this)}
              />
            </View>
          </View>
        </View>
        <View style={styles.footer} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  const data = {
    isOnboard: state.appState.isOnboard,
  }

  return { data }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( Object.assign( {}, appStateActions ), dispatch ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (End);