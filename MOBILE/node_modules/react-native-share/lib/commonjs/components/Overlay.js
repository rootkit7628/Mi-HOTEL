"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DEFAULT_ANIMATE_TIME = 300;

const styles = _reactNative.StyleSheet.create({
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
      fadeAnim: new _reactNative.Animated.Value(0),
      overlayStyle: styles.emptyOverlay
    });
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.visible) {
      this.setState({
        overlayStyle: styles.fullOverlay
      });
    }

    return _reactNative.Animated.timing(this.state.fadeAnim, {
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
    return /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
      style: [this.state.overlayStyle, {
        opacity: this.state.fadeAnim
      }]
    }, this.props.children);
  }

}

var _default = Overlay;
exports.default = _default;
//# sourceMappingURL=Overlay.js.map