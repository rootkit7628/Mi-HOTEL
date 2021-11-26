function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Animated, StyleSheet } from 'react-native';
const DEFAULT_ANIMATE_TIME = 300;
const styles = StyleSheet.create({
  emptyOverlay: {
    backgroundColor: 'transparent',
    height: 0,
    position: 'absolute',
    width: 0
  },
  fullOverlay: {
    backgroundColor: 'transparent',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }
});

class Overlay extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      fadeAnim: new Animated.Value(0),
      overlayStyle: styles.emptyOverlay
    });
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.visible) {
      this.setState({
        overlayStyle: styles.fullOverlay
      });
    }

    return Animated.timing(this.state.fadeAnim, {
      toValue: newProps.visible ? 1 : 0,
      duration: DEFAULT_ANIMATE_TIME,
      useNativeDriver: false
    }).start(this.onAnimatedEnd.bind(this));
  }

  onAnimatedEnd() {
    if (!this.props.visible) {
      this.setState({
        overlayStyle: styles.emptyOverlay
      });
    }
  }

  render() {
    return /*#__PURE__*/React.createElement(Animated.View, {
      style: [this.state.overlayStyle, {
        opacity: this.state.fadeAnim
      }]
    }, this.props.children);
  }

}

export default Overlay;
//# sourceMappingURL=Overlay.js.map