import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userStateActions from '../../../stateManager/actions/';
import { NavigationActions } from 'react-navigation';
import StandardButton from '../../../components/Button/StandardButton';
import {
  COLOR_GREEN,
  COLOR_LIGHT,
} from '../../../styles/ColorPalette';
import styles from './Styles';
import text_styles from '../../../styles/TextStyles';

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

    this.props.actions.onboardingFinished();
    this.props.navigation.dispatch(navigateActions);    
  }

  render(){
    
    return(
      <View style={styles.container}>
        <View style={styles.boxUpper}>
          <Text style={[text_styles.XL, {color: COLOR_LIGHT}]}>
            {this.props.onboard_title}
          </Text>
        </View>
        <View style={styles.boxLower}>
          <Text style={text_styles.GUIDE}>
            {this.props.onboard_subtitle}
          </Text>
        </View>
        <View style={styles.boxLower}>
          <View style={{flex:1, flexDirection: 'row'}}>
            <View style={styles.buttonWrapper}>
              <StandardButton 
                buttonStyle={[styles.buttonStyles, {borderColor: COLOR_LIGHT}]} 
                buttonTextStyle={[styles.buttonTextStyle, {color: COLOR_LIGHT}]}
                buttonLabel={this.props.buttonLabel}
                buttonOnPress={this.handle.bind(this)}
              />
            </View>
          </View>
        </View>
        <View style={styles.boxLower} />
        <View style={styles.boxLower} />
        <View style={styles.footer} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  const data = {
    isOnboard: state.userState.isOnboard,
  }

  return { data }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( Object.assign( {}, userStateActions ), dispatch ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (End);