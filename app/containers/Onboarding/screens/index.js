import uiText from '../../../config/uiLanguage.json';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';

import SwiperComponent from '../../../components/Swiper';
import Stories from './Stories';
import End from './End';

import {
  COLOR_GREEN,
  COLOR_LIGHT,
  COLOR_DEEP_ORANGE
} from '../../../styles/ColorPalette';
import TextStyles from '../../../styles/TextStyles';
import { ButtonSS } from '../../../styles/ButtonStyles';
import styles from '../styles/';

class OnboardingScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  onButtonPressed () {
  }

  render(){
    return(
      <SwiperComponent
        {...this.props}
        paginationDotStyle={styles.paginationDotStyle}
        paginationActiveDotStyle={styles.paginationActiveDotStyle}
        
        swiperLeftButtonStyle={ButtonSS.buttonFillLarge}
        swiperLeftButtonTextStyle={[TextStyles.H2, ButtonSS.buttonTextFillLarge]}
        swiperLeftButtonLabel={'Lewati'}
        swiperRightButtonStyle={ButtonSS.buttonFillLarge}
        swiperRightButtonTextStyle={[TextStyles.H2, ButtonSS.buttonTextFillLarge]}
        swiperRightButtonLabel={'Berikut'}
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
            buttonTextStyle={[TextStyles.H2, {color: COLOR_GREEN,}]}
            buttonLabel={'BERGABUNG'}
          />
        </View>
      </SwiperComponent>
    )
  }
}

export default connect()(OnboardingScreen)