import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import StandardButton from '../../../components/Button/StandardButton';
import {
  COLOR_GREEN,
  COLOR_LIGHT,
  COLOR_DEEP_ORANGE,
} from '../../../styles/ColorPalette';
import styles from './Styles';
import TextStyles from '../../../styles/TextStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';

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

  onEnterUnsigned () {
    const navigateActions = NavigationActions.navigate({
      routeName: 'Home',
      params: {},
      action: NavigationActions.navigate({ routeName: 'SignupName' })
    });
    this.props.navigation.dispatch(navigateActions);
  }

  render(){
    console.log(this.props);
    return(
      <View style={styles.container}>
        <View style={styles.boxUpper}>
          <Text style={[TextStyles.XL, {color: COLOR_GREEN}]}>
            {'opentani'}
          </Text>
        </View>
        <View style={styles.boxDescriptor}>
          <Text style={TextStyles.GUIDE}>
            {'Bergabunglah dengan komunitas opentani untuk manfaat penuh'}
          </Text>
        </View>
        <View style={styles.boxButton}>
          <View style={{flex:1, flexDirection: 'row'}}>
            <View style={styles.buttonWrapper}>
              <StandardButton 
                buttonStyle={styles.buttonNegative}
                buttonTextStyle={[TextStyles.H2, styles.buttonNegativeTextStyle]}
                buttonLabel='Pengguna baru' 
                buttonOnPress={this.onEnterSignup.bind(this)} 
              />
              <StandardButton 
                buttonStyle={styles.buttonPositive}
                buttonTextStyle={[TextStyles.H2, styles.buttonPositiveTextStyle]}
                buttonLabel='Masuk' 
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
                buttonStyle={styles.buttonUnsigned}
                buttonTextStyle={[TextStyles.H2, styles.buttonUnsignedTextStyle]}
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