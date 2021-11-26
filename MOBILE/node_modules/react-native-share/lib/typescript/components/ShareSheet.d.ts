import * as React from 'react';
import type { ViewStyle, StyleProp } from 'react-native';
export interface ShareSheetProps {
    visible: boolean;
    onCancel: () => void;
    children: React.ReactChildren;
    style?: StyleProp<ViewStyle>;
    overlayStyle?: StyleProp<ViewStyle>;
}
declare class ShareSheet extends React.Component<ShareSheetProps> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    backButtonHandler(): boolean;
    render(): JSX.Element;
}
export default ShareSheet;
