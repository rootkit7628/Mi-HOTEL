import * as React from 'react';
import { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from 'react-native';
export interface ButtonProps {
    onPress: () => void;
    iconSrc: ImageSourcePropType;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    children: React.ReactNode;
}
declare const Button: ({ buttonStyle, onPress, iconSrc, textStyle, children }: ButtonProps) => JSX.Element;
export default Button;
