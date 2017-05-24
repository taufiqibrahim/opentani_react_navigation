import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Button from '../../components/Button/Button';
import {
  COLOR_GREEN,
  COLOR_LIGHT,
} from '../../styles/ColorPalette';
import text_styles from '../../styles/TextStyles';

export default class End extends Component {
  constructor(props) {
    super(props);
    this.state =  { 
      
     };
  }

  onSignupBtn(){
    console.log(this.props)
    //this.props.navigation.navigate('Main');
  }

  render(){
    return(
      <View style={styles.wrapper}>
        <View style={styles.boxUpper}>
          <Text style={[text_styles.XL, {color: COLOR_GREEN}]}>
            {this.props.onboard_title}
          </Text>
        </View>
        <View style={styles.boxLower}>
          <Text style={text_styles.BODY}>
            {this.props.onboard_subtitle}
          </Text>
        </View>
        <View style={styles.boxLower}>
            <View style={{flex:1, flexDirection: 'row'}}>
              <View style={styles.buttonWrapper}>
                <Button 
                  buttonStyle={[styles.buttonStyles, {borderColor: COLOR_GREEN, backgroundColor: COLOR_GREEN}]} 
                  txtStyle={[styles.buttonTextStyle, {color: COLOR_LIGHT}]}
                  buttonLabel='Pengguna baru' 
                  //buttonOnPress={this.onSkipBtn} 
                />
              </View>
              <View style={styles.buttonWrapper}>
                <Button 
                  buttonStyle={[styles.buttonStyles, {borderColor: COLOR_GREEN}]} 
                  txtStyle={[styles.buttonTextStyle, {color: COLOR_GREEN}]}
                  buttonLabel='Masuk' 
                  //buttonOnPress={this.onSkipBtn} 
                />
              </View>
            </View>
        </View>
        <View style={styles.boxLower}>
          <Text style={text_styles.BODY}>
            Atau
          </Text>
        </View>
        <View style={styles.boxLower}>
            <View style={{flex:1, flexDirection: 'row'}}>
              <View style={styles.buttonWrapper}>
                <Button 
                  buttonStyle={[styles.buttonStyles, {borderColor: COLOR_GREEN}]} 
                  txtStyle={[styles.buttonTextStyle, {color: COLOR_GREEN}]}
                  buttonLabel='Coba Opentani Tanpa Mendaftar' 
                  //buttonOnPress={this.onSkipBtn} 
                />
              </View>
            </View>
        </View>
        <View style={styles.footer} />
      </View>
    )
  }
}

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
    flex: 2,
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