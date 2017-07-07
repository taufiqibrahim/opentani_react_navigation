import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import GridButton from '../../components/Button/GridButton';
import styles from './Styles.js';
import textStyles from '../../styles/TextStyles'
import { connect } from 'react-redux';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    console.log(this)
    return (
      <View style={styles.container}>
        <Image
          source={require('./img/home-background.png')}
          style={{flex: 1}}
        >
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
                    btnStyle={styles.gridStyles} btnLabel='Pemetaan Lahan'
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
        </Image>
      </View>
    )
  }
}

//export default HomeScreen
export default connect()(HomeScreen)