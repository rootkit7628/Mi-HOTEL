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
exports.TriggeringView = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
exports.TriggeringView = function (_a) {
    var _b = _a.topOffset, topOffset = _b === void 0 ? 0 : _b, _c = _a.bottomOffset, bottomOffset = _c === void 0 ? 0 : _c, onDisplay = _a.onDisplay, onBeginDisplayed = _a.onBeginDisplayed, onHide = _a.onHide, onBeginHidden = _a.onBeginHidden, onTouchBottom = _a.onTouchBottom, onTouchTop = _a.onTouchTop, onLayout = _a.onLayout, children = _a.children, viewProps = __rest(_a, ["topOffset", "bottomOffset", "onDisplay", "onBeginDisplayed", "onHide", "onBeginHidden", "onTouchBottom", "onTouchTop", "onLayout", "children"]);
    var _d = react_1.useState(0), initialPageY = _d[0], setInitialPageY = _d[1];
    var ref = react_1.useRef(null).current;
    var _e = react_1.useState(false), touched = _e[0], setTouched = _e[1];
    var _f = react_1.useState(false), hidden = _f[0], setHidden = _f[1];
    var _g = react_1.useState({
        scrollPageY: 0,
        scrollY: new react_native_1.Animated.Value(0),
    }), context = _g[0], setContext = _g[1];
    var _h = react_1.useState(0), height = _h[0], setHeight = _h[1];
    react_1.useEffect(function () {
        if (!context.scrollY) {
            return;
        }
        var listenerId = context.scrollY.addListener(onScroll);
        return function () {
            context.scrollY.removeListener(listenerId);
        };
    }, []);
    var handleOnLayout = function (e) {
        if (onLayout) {
            onLayout(e);
        }
        if (!ref) {
            return;
        }
        var layout = e.nativeEvent.layout;
        setHeight(layout.height);
        ref.current.measure(function (_x, _y, _width, _height, _ageX, pageY) {
            setInitialPageY(pageY);
        });
    };
    var onScroll = function (event) {
        if (!context.scrollPageY) {
            return;
        }
        var pageY = initialPageY - event.value;
        triggerEvents(context.scrollPageY, pageY, pageY + height);
    };
    var triggerEvents = function (value, top, bottom) {
        if (!touched && value >= top + topOffset) {
            setTouched(true);
            onBeginHidden();
            onTouchTop(true);
        }
        else if (touched && value < top + topOffset) {
            setTouched(false);
            onDisplay();
            onTouchTop(false);
        }
        if (!hidden && value >= bottom + bottomOffset) {
            setHidden(true);
            onHide();
            onTouchBottom(true);
        }
        else if (hidden && value < bottom + bottomOffset) {
            setHidden(false);
            onBeginDisplayed();
            onTouchBottom(false);
        }
    };
    return (react_1.default.createElement(react_native_1.View, __assign({ ref: ref, collapsable: false }, viewProps, { onLayout: handleOnLayout }), children));
};
