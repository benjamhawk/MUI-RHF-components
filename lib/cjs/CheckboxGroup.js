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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_hook_form_1 = require("react-hook-form");
var core_1 = require("@material-ui/core");
var CheckboxGroup = function (_a) {
    var options = _a.options, name = _a.name, label = _a.label, _b = _a.formControlProps, formControlProps = _b === void 0 ? {} : _b, _c = _a.formLabelProps, formLabelProps = _c === void 0 ? {} : _c, _d = _a.formGroupProps, formGroupProps = _d === void 0 ? {} : _d, _e = _a.checkboxProps, checkboxProps = _e === void 0 ? {} : _e, formControlLabelProps = _a.formControlLabelProps, controllerProps = _a.controllerProps;
    var control = react_hook_form_1.useFormContext().control;
    return (react_1.default.createElement(core_1.FormControl, __assign({}, formControlProps),
        label && react_1.default.createElement(core_1.FormLabel, __assign({}, formLabelProps), label),
        react_1.default.createElement(core_1.FormGroup, __assign({}, formGroupProps), options.map(function (option) {
            return (react_1.default.createElement(core_1.FormControlLabel, __assign({ key: option.value, control: react_1.default.createElement(react_hook_form_1.Controller, __assign({ defaultValue: false, control: control, name: name + "." + option.value, render: function (_a) {
                        var field = _a.field;
                        return (react_1.default.createElement(core_1.Checkbox, __assign({ onChange: function (e) { return field.onChange(e.target.checked); }, checked: Boolean(field.value) }, checkboxProps)));
                    } }, controllerProps)), label: option.label }, (formControlLabelProps || {}))));
        }))));
};
exports.default = CheckboxGroup;
