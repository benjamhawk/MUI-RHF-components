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
var RadioButtonGroup = function (_a) {
    var name = _a.name, label = _a.label, options = _a.options, defaultValue = _a.defaultValue, _b = _a.formControlProps, formControlProps = _b === void 0 ? {} : _b, _c = _a.formLabelProps, formLabelProps = _c === void 0 ? {} : _c, _d = _a.radioGroupProps, radioGroupProps = _d === void 0 ? {} : _d, _e = _a.radioProps, radioProps = _e === void 0 ? {} : _e, formControlLabelProps = _a.formControlLabelProps, useControllerProps = _a.useControllerProps;
    var control = react_hook_form_1.useFormContext().control;
    var inputProps = __rest(react_hook_form_1.useController(__assign({ name: name, control: control, defaultValue: defaultValue !== null && defaultValue !== void 0 ? defaultValue : options[0].value }, useControllerProps)).field, []);
    return (react_1.default.createElement(core_1.FormControl, __assign({}, formControlProps),
        label && react_1.default.createElement(core_1.FormLabel, __assign({}, formLabelProps), label),
        react_1.default.createElement(core_1.RadioGroup, __assign({}, inputProps, radioGroupProps), options.map(function (option) { return (react_1.default.createElement(core_1.FormControlLabel, __assign({ key: option.value, value: option.value, label: option.label, control: react_1.default.createElement(core_1.Radio, __assign({}, radioProps)) }, (formControlLabelProps || {})))); }))));
};
exports.default = RadioButtonGroup;
