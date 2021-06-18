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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_hook_form_1 = require("react-hook-form");
var core_1 = require("@material-ui/core");
var TextInput = function (_a) {
    var _b, _c;
    var name = _a.name, label = _a.label, _d = _a.defaultValue, defaultValue = _d === void 0 ? '' : _d, _e = _a.required, required = _e === void 0 ? false : _e, useControllerProps = _a.useControllerProps, rest = __rest(_a, ["name", "label", "defaultValue", "required", "useControllerProps"]);
    var _f = react_hook_form_1.useFormContext(), control = _f.control, formState = _f.formState;
    var inputProps = __rest(react_hook_form_1.useController(__assign(__assign({ name: name, control: control, defaultValue: defaultValue }, (useControllerProps !== null && useControllerProps !== void 0 ? useControllerProps : {})), { rules: __assign({ required: required ? 'Field is required' : false }, ((_b = useControllerProps === null || useControllerProps === void 0 ? void 0 : useControllerProps.rules) !== null && _b !== void 0 ? _b : {})) })).field, []);
    return (react_1.default.createElement(core_1.TextField, __assign({ label: label, defaultValue: defaultValue, error: formState.errors[name] ? true : false, helperText: (_c = formState.errors[name]) === null || _c === void 0 ? void 0 : _c.message, required: required }, inputProps, rest)));
};
exports.default = TextInput;
