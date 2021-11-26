"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _Overlay = _interopRequireDefault(require("./Overlay"));

var _Sheet = _interopRequireDefault(require("./Sheet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class ShareSheet extends React.Component {
  componentDidMount() {
    this.backButtonHandler = this.backButtonHandler.bind(this);

    _reactNative.BackHandler.addEventListener('hardwareBackPress', this.backButtonHandler);
  }

  componentWillUnmount() {
    _reactNative.BackHandler.removeEventListener('hardwareBackPress', this.backButtonHandler);
  }

  backButtonHandler() {
    if (this.props.visible) {
      this.props.onCancel();
      return true;
    }

    return false;
  }

  render() {
    const {
      style = {},
      overlayStyle = {},
      ...props
    } = this.props;
    return /*#__PURE__*/React.createElement(_Overlay.default, props, /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [styles.actionSheetContainer, overlayStyle]
    }, /*#__PURE__*/React.createElement(_reactNative.TouchableOpacity, {
      style: styles.button,
      onPress: this.props.onCancel
    }), /*#__PURE__*/React.createElement(_Sheet.default, {
      visible: this.props.visible
    }, /*#__PURE__*/React.createElement(_reactNative.View, {
      style: [styles.buttonContainer, style]
    }, this.props.children))));
  }

}

var _default = ShareSheet;
exports.default = _default;

const styles = _reactNative.StyleSheet.create({
  actionSheetContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 0,
    paddingTop: 10
  },
  buttonContainer: {
    backgroundColor: 'white',
    overflow: 'hidden',
    paddingBottom: 5,
    paddingTop: 5
  },
  button: {
    flex: 1
  }
});
//# sourceMappingURL=ShareSheet.js.map