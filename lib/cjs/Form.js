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
var Form = function (_a) {
    var children = _a.children, formMethods = _a.formMethods, onSubmit = _a.onSubmit, _b = _a.formProps, formProps = _b === void 0 ? {} : _b;
    return (react_1.default.createElement(react_hook_form_1.FormProvider, __assign({}, formMethods),
        react_1.default.createElement("form", __assign({ onSubmit: formMethods.handleSubmit(onSubmit) }, formProps), children)));
};
exports.default = Form;
