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
} from '../../../styles/ColorPalette';
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
    this.props.navigation.dispatch(navigateActions);    
  }

  render(){
    console.log(this.props);
    return(
      <View style={styles.wrapper}>
        <View style={styles.boxUpper}>
          <Text style={[text_styles.XL, {color: COLOR_GREEN}]}>
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
                buttonStyle={[styles.buttonStyles, {borderColor: COLOR_GREEN}]} 
                buttonTextStyle={[styles.buttonTextStyle, {color: COLOR_GREEN}]}
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

//export default connect()(End)
export default End

const styles = StyleSheet.create({
  // Wrapper layout
  wrapper: {
    flex: 1,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  // Footer
  footer: {
    flex: 1,
    backgroundColor: COLOR_LIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 32,
  },
  // Upper Box
  boxUpper: {
    flex: 1.5,
    backgroundColor: COLOR_LIGHT,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  // Lower Box
  boxLower: {
    flex: 1,
    backgroundColor: COLOR_LIGHT,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  // Button wrapper
  buttonWrapper: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 8,
  },
  // Button
  buttonStyles: {
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Button Text Style
  buttonTextStyle: {
    fontFamily: 'sans-serif',
    fontSize: 16,
    color: COLOR_LIGHT,
  }
})