import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import Overlay from './Overlay';
import Sheet from './Sheet';

class ShareSheet extends React.Component {
  componentDidMount() {
    this.backButtonHandler = this.backButtonHandler.bind(this);
    BackHandler.addEventListener('hardwareBackPress', this.backButtonHandler);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backButtonHandler);
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
    return /*#__PURE__*/React.createElement(Overlay, props, /*#__PURE__*/React.createElement(View, {
      style: [styles.actionSheetContainer, overlayStyle]
    }, /*#__PURE__*/React.createElement(TouchableOpacity, {
      style: styles.button,
      onPress: this.props.onCancel
    }), /*#__PURE__*/React.createElement(Sheet, {
      visible: this.props.visible
    }, /*#__PURE__*/React.createElement(View, {
      style: [styles.buttonContainer, style]
    }, this.props.children))));
  }

}

export default ShareSheet;
const styles = StyleSheet.create({
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