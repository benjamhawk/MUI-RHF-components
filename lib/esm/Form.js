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
import { FormProvider } from 'react-hook-form';
var Form = function (_a) {
    var children = _a.children, formMethods = _a.formMethods, onSubmit = _a.onSubmit, _b = _a.formProps, formProps = _b === void 0 ? {} : _b;
    return (React.createElement(FormProvider, __assign({}, formMethods),
        React.createElement("form", __assign({ onSubmit: formMethods.handleSubmit(onSubmit) }, formProps), children)));
};
export default Form;
