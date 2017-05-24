import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwiperComponent from '../../components/Swiper/Swiper';
import Stories_1 from './Stories_1';
import End from './End';

export default class OnboardingScreen extends Component {
  static navigationOptions = {
    title: 'First Onboarding',
    header: null,
  };

  onSkipBtn = () => {
    console.log('onSkipBtn pressed.')
    this.props.navigation.navigate('Main')
  }

  onSignupBtn = () => {
    console.log(this.props)
    this.props.navigation.navigate('Main');
  }

  render(){
    return(
      <SwiperComponent
        onSkipBtn={this.onSkipBtn.bind(this)}
        // btnOnPress={'this.props.onSkipBtn.bind(this)'}
      >
        <View 
          style={styles.slide}
        >
            <Stories_1
              onboard_title={'Peta Lahan'}
              onboard_subtitle={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'}
            />
        </View>
        <View 
          style={styles.slide}
        >
            <Stories_1
              onboard_title={'Database Varietas'}
              onboard_subtitle={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'}
            />
        </View>
        <View 
          style={styles.slide}
        >
            <Stories_1
              onboard_title={'Pantau Harga Terkini'}
              onboard_subtitle={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'}
            />
        </View>
        <View 
          style={styles.slide}
        >
            <End
              onboard_title={'opentani'}
              onboard_subtitle={'Daftarkan diri Anda untuk manfaat penuh dari Opentani'}
              btnOnPress={this.onSignupBtn.bind(this)}
            />
        </View>
      </SwiperComponent>
    )
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})