import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import GridButton from '../../components/Button/GridButton';
import styles from './Styles.js';
import textStyles from '../../styles/TextStyles'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Opentani'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {/*<View style={styles.headerWrapper}>
          <Text style={textStyles.title}>OPENTANI</Text>
        </View>*/}

        {/*
        <View style={styles.descriptorWrapper}>
          <Text>Descriptor Wrapper</Text>
        </View>
        */}
        <View style={styles.menuWrapper}>
          {/*<Text>Menu Wrapper</Text>*/}

          <View style={styles.gridBody}>
            <View style={styles.gridHorizontal}>
              <View style={styles.gridWrapper}>
                <GridButton 
                  iconName='ios-flag-outline' iconStyle={styles.iconStyle} 
                  iconTxtStyle={styles.iconTxtStyle} 
                  btnStyle={styles.gridStyles} btnLabel='Lahan'
                />
              </View>
              <View style={styles.gridWrapper}>
                <GridButton 
                  iconName='ios-create-outline' iconStyle={styles.iconStyle} 
                  iconTxtStyle={styles.iconTxtStyle} 
                  btnStyle={styles.gridStyles} btnLabel='Aktivitas'
                />
              </View>
            </View>
          </View>


          <View style={styles.gridBody}>
            <View style={styles.gridHorizontal}>
              <View style={styles.gridWrapper}>
                <GridButton 
                  iconName='ios-calculator-outline' iconStyle={styles.iconStyle} 
                  iconTxtStyle={styles.iconTxtStyle} 
                  btnStyle={styles.gridStyles} btnLabel='Pantau Harga'
                />
              </View>
              <View style={styles.gridWrapper}>
                <GridButton 
                  iconName='ios-bulb-outline' iconStyle={styles.iconStyle} 
                  iconTxtStyle={styles.iconTxtStyle} 
                  btnStyle={styles.gridStyles} btnLabel='Varietas'
                />
              </View>
            </View>
          </View>

          <View style={styles.gridBody}>
            <View style={styles.gridHorizontal}>
              <View style={styles.gridWrapper}>
                <GridButton 
                  iconName='ios-person-outline' iconStyle={styles.iconStyle} 
                  iconTxtStyle={styles.iconTxtStyle} 
                  btnStyle={styles.gridStyles} btnLabel='Profil'
                />
              </View>
              <View style={styles.gridWrapper}>
                <GridButton 
                  iconName='ios-settings-outline' iconStyle={styles.iconStyle} 
                  iconTxtStyle={styles.iconTxtStyle} 
                  btnStyle={styles.gridStyles} btnLabel='Pengaturan'
                />
              </View>
            </View>
          </View>

        </View>
      </View>
    )
  }
}

export default HomeScreen