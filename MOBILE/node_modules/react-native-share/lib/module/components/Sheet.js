function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Animated } from 'react-native';
const DEFAULT_BOTTOM = -300;
const DEFAULT_ANIMATE_TIME = 300;

class Sheet extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      bottom: new Animated.Value(DEFAULT_BOTTOM)
    });
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    return Animated.timing(this.state.bottom, {
      toValue: newProps.visible ? 0 : DEFAULT_BOTTOM,
      duration: DEFAULT_ANIMATE_TIME,
      useNativeDriver: false
    }).start();
  }

  render() {
    return /*#__PURE__*/React.createElement(Animated.View, {
      style: {
        bottom: this.state.bottom
      }
    }, this.props.children);
  }

}

export default Sheet;
//# sourceMappingURL=Sheet.js.map