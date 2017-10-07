import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import StandardButton from '../Button/StandardButton'
import styles from './Styles';
import TextStyles from '../../styles/TextStyles';

const { width, height} = Dimensions.get('window');

export default class SwiperComponent extends Component {

  componentDidMount(){
    //console.log(this.props)
  }
  // Props for ScrollView component
  static defaultProps = {
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    bounces: false,
    scrollsToTop: false,
    removeClippedSubviews: true,
    automaticallyAdjustContentInsets: false,
    index: 0,
  }

  state = this.initState(this.props);

  initState(props){
    // Get total number of slides
    const total = props.children ? props.children.length || 1 : 0,
      // Current index
      index = total > 1 ? Math.min(props.index, total - 1) : 0,
      // Current offset
      offset = width * index;

    const state = {
      total,
      index,
      offset,
      width,
      height,
    };

    // Component internals as a class property and not state to avoid rerenders
    this.internals = {
      isScrolling: false,
      offset,
      total,
    };

    return state;
  }

  /**
   * Scroll begin handler
   * @param {object} e native event
   */
  onScrollBegin = e => {
    this.internals.isScrolling = true;
  }

  /**
   * Scroll end handler
   * @param {object} e native event
   */
  onScrollEnd = e => {
    this.internals.isScrolling = false;
    // Update index
    this.updateIndex(
      e.nativeEvent.contentOffset ? e.nativeEvent.contentOffset.x
      // When scrolled with .scrollTo() on Android there is no contentOffset
      : e.nativeEvent.position * this.state.width
    );
  }

  /**
   * Drag end handler
   * @param {object} e native event
   */
  onScrollEndDrag = e => {
    const { contentOffset: { x: newOffset } } = e.nativeEvent,
      { children } = this.props,
      { index } = this.state,
      { offset } = this.internals;

    // Update internal isScrolling state
    // if swiped right on the last slide
    // or left on the first slide
    if ( offset === newOffset && 
         (index === 0 || index === children.length - 1)
       ) {
      this.internals.isScrolling = false;
    }
  }

  /**
   * Update index after scroll
   * @param {object} offset content offset
   */
  updateIndex = (offset) => {
    const state = this.state,
      diff = offset - this.internals.offset,
      step = state.width;

    let index = state.index;

    // Do nothing if offset did not change
    if (!diff) {
      return;
    }
    // Make sure index always integer
    index = parseInt(index + Math.round(diff / step), 10);
    // Update internal offset
    this.internals.offset = offset;
    // Update index in the state
    this.setState({index});
  }

  /**
   * Swipe one slide forward
   * @param 
   */
  swipe = () => {
    // Ignore if already scrolling OR if there are less than 2 slides
    if (this.internals.isScrolling || this.state.total < 2) {
      return;
    }

    const state = this.state,
      diff = this.state.index + 1,
      x = diff * state.width,
      y = 0;

    // Call scrollTo() on ScrollView component to perform the SWIPE
    this.ScrollView && this.ScrollView.scrollTo({ x, y, animated: true });
    // Update internal scroll state
    this.internals.isScrolling = true;
    // Trigger onScrollEnd manually on Android
    if (Platform.OS === 'android'){
      setImmediate(() => {
        this.onScrollEnd({
          nativeEvent: {
            position: diff
          }
        })
      })
    }
  }

  /**
   * Render ScrollView component
   * @param {array} slides to be swiped
   */
  renderScrollView = pages => {
    return(
      <ScrollView
        ref={component => { this.ScrollView = component; }}
        {...this.props}
        //contentContainerStyle={[styles.wrapper, this.props.style]}
        onScrollBeginDrag={this.onScrollBegin}
        onMomentumScrollEnd={this.onScrollEnd}
        onScrollEndDrag={this.onScrollEndDrag}
      >
        {pages.map((page, i) => 
          // Render each slide inside a View
          <View
            //style={[styles.fullScreen, styles.slide]}
            style={styles.fullScreen}
            key={i}
          >
            {page}
          </View>
        )}
      </ScrollView>
    );
  }

  /**
   * Render Pagination Indicator
   * @param 
   */
  renderPagination = () => {
    if (this.state.total <= 1){
      return null;
    }

    const ActiveDot = <View style={[this.props.paginationDotStyle, this.props.paginationActiveDotStyle]} />
    const Dot = <View style={this.props.paginationDotStyle} />;

    let dots = [];

    for (let key = 0; key < this.state.total; key++){
      dots.push(key === this.state.index
        // Active dot
        ? React.cloneElement(ActiveDot, { key })
        // Other dots
        : React.cloneElement(Dot, { key })
      );
    }

    return(
      <View
        pointerEvents="none"
        style={styles.onboardingControlOuter}
      >
        <View style={styles.onboardingControlInner}>
        </View>
        <View style={styles.onboardingControlInner}>
          <View style={styles.onboardingControlPagination}>
            {dots}
          </View>
        </View>
        <View style={styles.onboardingControlInner}>
        </View>
      </View>
    )
  }

  /**
   * Render CONTINUE or DONE button
   * @param 
   */
  renderButton = () => {
    const lastScreen = this.state.index === this.state.total - 1;

    return(
      <View
        pointerEvents="box-none"
        style={styles.onboardingControlOuter}
      >
        <View style={styles.onboardingControlInner}>
          <View style={styles.onboardingButtonWrapper}>
            {lastScreen
              ? null
              : (
                  <View style={styles.buttonWrapper}>
                    <StandardButton
                      buttonStyle={this.props.swiperLeftButtonStyle}
                      buttonTextStyle={[TextStyles.BODY, styles.buttonTextStyle, this.props.swiperLeftButtonTextStyle]}
                      buttonLabel={this.props.swiperLeftButtonLabel}
                      buttonOnPress={this.onSkipBtn}
                    />
                  </View>
                )
            }
          </View>
        </View>
        <View style={styles.onboardingControlInner}>
        </View>
        <View style={styles.onboardingControlInner}>
          <View style={styles.onboardingButtonWrapper}>
            {lastScreen
              ? null
              : (
                  <View style={styles.buttonWrapper}>
                    <StandardButton
                      buttonStyle={this.props.swiperRightButtonStyle}
                      buttonTextStyle={[TextStyles.BODY, styles.buttonTextStyle, this.props.swiperRightButtonTextStyle]}
                      buttonLabel={this.props.swiperRightButtonLabel}
                      buttonOnPress={this.onNextBtn}
                    />
                  </View>
                )
            }
          </View>
        </View>
      </View>
    )
  }

  onSkipBtn = () => {
    const state = this.state,
      targetX = ( state.total - 1 ) * state.width;  
    // Scroll to the last slide
    this.ScrollView && this.ScrollView.scrollTo({ x: targetX, y: 0, animated: true });
    this.updateIndex(targetX);
  }

  onNextBtn = () => {
    this.swipe();
  }

  /**
   * Render the component
   * @param 
   */
  render = ({ children } = this.props) => {
    return(
      <View
        style={styles.container}
        //style={[styles.container, styles.fullScreen]}
      >
        {/* Render screens*/}
        { this.renderScrollView(children) }
        {/* Render pagination*/}
        { this.renderPagination() }
        {/* Render button*/}
        { this.renderButton() }
      </View>
    )
  }
}