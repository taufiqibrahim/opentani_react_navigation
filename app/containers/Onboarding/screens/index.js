import uiText from '../../../config/uiLanguage.json';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import styles from './Styles';
import SwiperComponent from '../../../components/Swiper';
import Stories from './Stories';
import End from './End';

class OnboardingScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  onButtonPressed () {
    console.log(this.props)
  }

  render(){
    return(
      <SwiperComponent
        {...this.props}
        paginationDotStyle={styles.paginationDotStyle}
        paginationActiveDotStyle={styles.paginationActiveDotStyle}
        
        swiperLeftButtonStyle={styles.buttonStyles}
        swiperLeftButtonTextStyle={styles.buttonTextStyle}
        swiperRightButtonStyle={styles.buttonStyles}
        swiperRightButtonTextStyle={styles.buttonTextStyle}
      >
        <View 
          style={styles.slide}
        >
            <Stories
              onboard_title={uiText.onboarding.page_1.title}
              onboard_subtitle={uiText.onboarding.page_1.descriptor}
            />
        </View>
        <View 
          style={styles.slide}
        >
            <Stories
              onboard_title={uiText.onboarding.page_2.title}
              onboard_subtitle={uiText.onboarding.page_2.descriptor}
            />
        </View>
        <View 
          style={styles.slide}
        >
            <Stories
              onboard_title={uiText.onboarding.page_3.title}
              onboard_subtitle={uiText.onboarding.page_3.descriptor}
            />
        </View>
        <View 
          style={styles.slide}
        >
          <End
            {...this.props}
            onboard_title={'opentani'}
            onboard_subtitle={'Bikin pertanian keren lagi'}
            buttonLabel={'Bawa saya ke dalam aplikasi'}
          />
        </View>
      </SwiperComponent>
    )
  }
}

export default connect()(OnboardingScreen)