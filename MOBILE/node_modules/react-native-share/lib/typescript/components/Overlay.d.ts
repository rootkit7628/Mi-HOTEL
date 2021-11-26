import * as React from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
export interface OverlayProps {
    visible: boolean;
}
interface State {
    fadeAnim: Animated.Value;
    overlayStyle: StyleProp<ViewStyle>;
}
declare class Overlay extends React.Component<OverlayProps, State> {
    state: {
        fadeAnim: Animated.Value;
        overlayStyle: {
            backgroundColor: string;
            height: number;
            position: "absolute";
            width: number;
        };
    };
    UNSAFE_componentWillReceiveProps(newProps: OverlayProps): void;
    onAnimatedEnd(): void;
    render(): JSX.Element;
}
export default Overlay;
