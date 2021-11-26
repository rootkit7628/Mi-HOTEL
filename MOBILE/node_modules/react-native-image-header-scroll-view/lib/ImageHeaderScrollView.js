"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageHeaderScrollView = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
exports.ImageHeaderScrollView = react_1.forwardRef(function (_a, ref) {
    var _b = _a.overlayColor, overlayColor = _b === void 0 ? 'black' : _b, _c = _a.disableHeaderGrow, disableHeaderGrow = _c === void 0 ? false : _c, _d = _a.foregroundParallaxRatio, foregroundParallaxRatio = _d === void 0 ? 1 : _d, _e = _a.maxHeight, maxHeight = _e === void 0 ? 125 : _e, _f = _a.maxOverlayOpacity, maxOverlayOpacity = _f === void 0 ? 0.3 : _f, _g = _a.minHeight, minHeight = _g === void 0 ? 80 : _g, _h = _a.minOverlayOpacity, minOverlayOpacity = _h === void 0 ? 0 : _h, _j = _a.renderFixedForeground, renderFixedForeground = _j === void 0 ? function () { return react_1.default.createElement(react_native_1.View, null); } : _j, _k = _a.foregroundExtrapolate, foregroundExtrapolate = _k === void 0 ? 'clamp' : _k, _l = _a.renderHeader, renderHeaderProps = _l === void 0 ? function () { return react_1.default.createElement(react_native_1.View, null); } : _l, _m = _a.ScrollViewComponent, ScrollViewComponentProps = _m === void 0 ? react_native_1.ScrollView : _m, _o = _a.scrollViewBackgroundColor, scrollViewBackgroundColor = _o === void 0 ? 'white' : _o, childrenStyle = _a.childrenStyle, style = _a.style, contentContainerStyle = _a.contentContainerStyle, useNativeDriver = _a.useNativeDriver, headerContainerStyle = _a.headerContainerStyle, headerImage = _a.headerImage, fixedForegroundContainerStyles = _a.fixedForegroundContainerStyles, renderTouchableFixedForegroundProps = _a.renderTouchableFixedForeground, renderForegroundProps = _a.renderForeground, onScrollProps = _a.onScroll, scrollViewProps = __rest(_a, ["overlayColor", "disableHeaderGrow", "foregroundParallaxRatio", "maxHeight", "maxOverlayOpacity", "minHeight", "minOverlayOpacity", "renderFixedForeground", "foregroundExtrapolate", "renderHeader", "ScrollViewComponent", "scrollViewBackgroundColor", "childrenStyle", "style", "contentContainerStyle", "useNativeDriver", "headerContainerStyle", "headerImage", "fixedForegroundContainerStyles", "renderTouchableFixedForeground", "renderForeground", "onScroll"]);
    var scrollY = react_1.useRef(new react_native_1.Animated.Value(0)).current;
    var _p = react_1.useState(0), pageY = _p[0], setPageY = _p[1];
    var containerRef = react_1.useRef(null).current;
    var scrollViewRef = react_1.useRef(null).current;
    react_1.useImperativeHandle(ref, function () { return ({
        getChildContext: function () {
            return {
                scrollY: scrollY,
                scrollPageY: pageY + minHeight,
            };
        },
    }); });
    var interpolateOnImageHeight = function (outputRange) {
        var headerScrollDistance = maxHeight - minHeight;
        return scrollY.interpolate({
            inputRange: [0, headerScrollDistance],
            outputRange: outputRange,
            extrapolate: 'clamp',
        });
    };
    var Header = function () {
        if (headerImage) {
            return (react_1.default.createElement(react_native_1.Image, { source: headerImage, style: {
                    height: maxHeight,
                    width: react_native_1.Dimensions.get('window').width,
                } }));
        }
        return renderHeaderProps();
    };
    var renderHeader = function () {
        var overlayOpacity = interpolateOnImageHeight([minOverlayOpacity, maxOverlayOpacity]);
        var headerScale = scrollY.interpolate({
            inputRange: [-maxHeight, 0],
            outputRange: [3, 1],
            extrapolate: 'clamp',
        });
        var headerTransformStyle = {
            height: maxHeight,
            transform: !disableHeaderGrow ? [{ scale: headerScale }] : undefined,
        };
        var overlayStyle = [
            styles.overlay,
            { opacity: overlayOpacity, backgroundColor: overlayColor },
        ];
        var disableOverlay = minOverlayOpacity === maxOverlayOpacity && maxOverlayOpacity === 0;
        return (react_1.default.createElement(react_native_1.Animated.View, { style: [styles.header, headerTransformStyle, headerContainerStyle] },
            Header(),
            !disableOverlay && react_1.default.createElement(react_native_1.Animated.View, { style: overlayStyle }),
            react_1.default.createElement(react_native_1.View, { style: [styles.fixedForeground, fixedForegroundContainerStyles] }, renderFixedForeground())));
    };
    var renderForeground = function () {
        var headerTranslate = scrollY.interpolate({
            inputRange: [0, maxHeight * 2],
            outputRange: [0, -maxHeight * 2 * foregroundParallaxRatio],
            extrapolate: foregroundExtrapolate,
        });
        var headerTransformStyle = {
            height: maxHeight,
            transform: [{ translateY: headerTranslate }],
        };
        if (!renderForegroundProps) {
            return react_1.default.createElement(react_native_1.View, null);
        }
        return (react_1.default.createElement(react_native_1.Animated.View, { style: [styles.header, headerTransformStyle] }, renderForegroundProps()));
    };
    var renderTouchableFixedForeground = function () {
        var height = interpolateOnImageHeight([maxHeight, minHeight]);
        if (!renderTouchableFixedForegroundProps) {
            return react_1.default.createElement(react_native_1.View, null);
        }
        if (useNativeDriver) {
            if (__DEV__) {
                console.warn('useNativeDriver=true and renderTouchableFixedForeground is not supported at the moment due to the animation of height unsupported with the native driver');
            }
            return null;
        }
        return (react_1.default.createElement(react_native_1.Animated.View, { style: [styles.header, styles.touchableFixedForeground, { height: height }] }, renderTouchableFixedForegroundProps()));
    };
    var onContainerLayout = function () {
        if (!containerRef) {
            return;
        }
        containerRef.current.measureInWindow(function (_x, y) {
            if (containerRef) {
                setPageY(y);
            }
        });
    };
    var onScroll = function (e) {
        if (onScrollProps) {
            onScrollProps(e);
        }
        scrollY.setValue(e.nativeEvent.contentOffset.y);
    };
    var ScrollViewComponent = useNativeDriver ? react_native_1.Animated.ScrollView : ScrollViewComponentProps;
    var inset = maxHeight - minHeight;
    return (react_1.default.createElement(react_native_1.View, { style: [
            styles.container,
            {
                paddingTop: minHeight,
                backgroundColor: scrollViewBackgroundColor,
            },
        ], ref: containerRef, onLayout: onContainerLayout },
        renderHeader(),
        react_1.default.createElement(ScrollViewComponent, __assign({ scrollEventThrottle: useNativeDriver ? 1 : 16, ref: scrollViewRef, overScrollMode: "never" }, scrollViewProps, { contentContainerStyle: [
                {
                    backgroundColor: scrollViewBackgroundColor,
                    marginTop: inset,
                    paddingBottom: inset,
                },
                contentContainerStyle,
                childrenStyle,
            ], style: [styles.container, style], onScroll: useNativeDriver
                ? react_native_1.Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                    useNativeDriver: true,
                })
                : onScroll })),
        renderTouchableFixedForeground(),
        renderForeground()));
});
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 100,
    },
    fixedForeground: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 101,
    },
    touchableFixedForeground: {
        zIndex: 102,
    },
});
