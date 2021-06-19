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
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
var CheckboxGroup = function (_a) {
    var options = _a.options, name = _a.name, label = _a.label, _b = _a.formControlProps, formControlProps = _b === void 0 ? {} : _b, _c = _a.formLabelProps, formLabelProps = _c === void 0 ? {} : _c, _d = _a.formGroupProps, formGroupProps = _d === void 0 ? {} : _d, _e = _a.checkboxProps, checkboxProps = _e === void 0 ? {} : _e, formControlLabelProps = _a.formControlLabelProps, controllerProps = _a.controllerProps;
    var control = useFormContext().control;
    return (React.createElement(FormControl, __assign({}, formControlProps),
        label && React.createElement(FormLabel, __assign({}, formLabelProps), label),
        React.createElement(FormGroup, __assign({}, formGroupProps), options.map(function (option) {
            return (React.createElement(FormControlLabel, __assign({ key: option.value, control: React.createElement(Controller, __assign({ defaultValue: false, control: control, name: name + "." + option.value, render: function (_a) {
                        var field = _a.field;
                        return (React.createElement(Checkbox, __assign({ onChange: function (e) { return field.onChange(e.target.checked); }, checked: Boolean(field.value) }, checkboxProps)));
                    } }, controllerProps)), label: option.label }, (formControlLabelProps || {}))));
        }))));
};
export default CheckboxGroup;
