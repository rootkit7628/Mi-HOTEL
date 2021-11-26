import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {
  heightPercentToDp as hp,
  widthPercentToDp as wp,
} from '../utils/sizeUtils';
import COLORS from '../utils/colorUtils';

interface OrangeButtonProps {
  text: string | number;
  onPress?: () => void;
  style?: ViewStyle;
}

const OrangeButton = (props: OrangeButtonProps) => {
  const {text, onPress, style} = props;
  return (
    <TouchableOpacity
      style={[styles.orangeButtonStyle, style]}
      onPress={onPress}>
      <Text style={styles.startTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  orangeButtonStyle: {
    backgroundColor: COLORS.green,
    height: hp(6),
    width: wp(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2),
    shadowColor: COLORS.grey,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  startTextStyle: {
    color: COLORS.white,
    fontFamily: 'Arial',
    letterSpacing: wp(0.5),
  },
});

export default OrangeButton;
