import * as React from 'react';
import { Animated } from 'react-native';
export interface SheetProps {
    visible: boolean;
}
interface State {
    bottom: Animated.Value;
}
declare class Sheet extends React.Component<SheetProps, State> {
    state: {
        bottom: Animated.Value;
    };
    UNSAFE_componentWillReceiveProps(newProps: SheetProps): void;
    render(): JSX.Element;
}
export default Sheet;
