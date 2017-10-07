import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class WallScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  onEnterSignup () {
    const navigateActions = NavigationActions.navigate({
      routeName: 'Signup',
      params: {},
      action: NavigationActions.navigate({ routeName: 'Home' })
    });
    this.props.navigation.dispatch(navigateActions);
  }
  onEnterLogin () {
    const navigateActions = NavigationActions.navigate({
      routeName: 'Login',
      params: {},
      action: NavigationActions.navigate({ routeName: 'LoginChooseCommScreen' })
    });
    this.props.navigation.dispatch(navigateActions);
  }
  onEnterUnsigned () {
    const navigateActions = NavigationActions.navigate({
      routeName: 'Home',
      params: {},
      action: NavigationActions.navigate({ routeName: 'SignupName' })
    });
    this.props.navigation.dispatch(navigateActions);
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.boxUpper}>
          <Text style={[TextStyles.XL, {color: COLOR_GREEN}]}>
            {'opentani'}
          </Text>
        </View>
        <View style={styles.boxDescriptor}>
          <Text style={TextStyles.GUIDE}>
            {'Bergabunglah dengan komunitas Opentani untuk manfaat penuh'}
          </Text>
        </View>
        <View style={styles.boxButton}>
          <View style={styles.buttonWrapper}>
            <View style={{flex: 2}}>
              <StandardButton 
                buttonStyle={[ButtonSS.buttonLineLarge, ButtonSS.buttonNegative]}
                buttonTextStyle={[TextStyles.H2, ButtonSS.buttonTextLineLarge, ButtonSS.buttonTextNegative]}
                buttonLabel='Pengguna baru' 
                buttonOnPress={this.onEnterSignup.bind(this)} 
              />
            </View>
            <View style={{flex:1}}>
              <StandardButton 
                buttonStyle={[ButtonSS.buttonFillLarge, ButtonSS.buttonPositive]}
                buttonTextStyle={[TextStyles.H2, ButtonSS.buttonTextFillLarge, ButtonSS.buttonTextPositive]}
                buttonLabel='Masuk' 
                buttonOnPress={this.onEnterLogin.bind(this)}
              />
            </View>
          </View>
        </View>
        <View style={styles.boxOther}>
          <Text style={TextStyles.GUIDE}>
            Atau
          </Text>
        </View>
        <View style={styles.boxButton}>
          <View style={{flex:1, flexDirection: 'row'}}>
            <View style={styles.buttonWrapper}>
              <StandardButton 
                buttonStyle={[ButtonSS.buttonLineLarge, ButtonSS.buttonNegative, 
                  // {backgroundColor: COLOR_DEEP_ORANGE, borderColor: COLOR_DEEP_ORANGE}
                  ]}
                buttonTextStyle={[TextStyles.H2, ButtonSS.buttonTextLineLarge, ButtonSS.buttonTextNegative]}
                buttonLabel='Coba dulu. Bergabung nanti' 
                buttonOnPress={this.onEnterUnsigned.bind(this)} 
              />
            </View>
          </View>
        </View>
        <View style={styles.footer} />
      </View>
    )
  }
}

export default connect()(WallScreen);