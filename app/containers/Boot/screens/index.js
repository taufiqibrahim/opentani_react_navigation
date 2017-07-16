import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import TextStyles from '../../../styles/TextStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userStateActions from '../../../stateManager/actions/';
import { NavigationActions } from 'react-navigation';

class BootScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    rehydrated: null,
  }

  bootLoader = () => {
    const data = this.props.data;
    const actions = this.props.actions;

    /*
     * waiting until the rehydration completed by listening to this.props.data.rehydrated
     * initial routing logic is implemented here
     */
      if ( data.isOnboard ) {
        actions.navigateAfterBoot({ routeStack: 'Wall', routeName: 'Wall' });
      }
      else actions.navigateAfterBoot({ routeStack: 'Onboarding', routeName: 'Onboarding' });
  }

  componentDidUpdate = (prevProps, prevState) => {
    const data = this.props.data;
    const actions = this.props.actions;
    const state = this.state;

    if ( state.rehydrated !==  data.rehydrated && data.rehydrated ) {
      this.setState({rehydrated: this.props.data.rehydrated});
      this.bootLoader();
    }
  }

  render(){
    return(
      <View style={styles.container}>
      </View>
    )
  }
}

function mapStateToProps(state) {
  const data = {
    rehydrated: state.userState.rehydrated,
    isOnboard: state.userState.isOnboard,
  }

  return { data }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( Object.assign( {}, userStateActions ), dispatch ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (BootScreen);