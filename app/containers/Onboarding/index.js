import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import SwiperComponent from '../../components/Swiper';
import Stories_1 from './Stories_1';
import End from './End';

class OnboardingScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  onButtonPressed () {
    console.log(this.props)
  }

  render(){
    console.log(this.props)
    return(
      <SwiperComponent
        {...this.props}
      >
        <View 
          style={styles.slide}
        >
            <Stories_1
              onboard_title={'Pemetaan Lahan'}
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
            {...this.props}
            onboard_title={'opentani'}
            onboard_subtitle={'Bikin pertanian keren lagi'}
            buttonLabel={'Sentuh untuk memulai'}
            //onButtonPressed={this.onButtonPressed()}
          />
        </View>
      </SwiperComponent>
    )
  }
}

export default connect()(OnboardingScreen)

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})