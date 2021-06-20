/// <reference types="react" />
import { CheckboxProps, FormControlLabelProps, FormControlProps, FormGroupProps, FormLabelProps } from '@material-ui/core';
declare type Props = {
    options: {
        value: string | number;
        label: string;
    }[];
    name: string;
    label?: string;
    formLabelProps?: FormLabelProps;
    formGroupProps?: FormGroupProps;
    formControlProps?: FormControlProps;
    formControlLabelProps?: FormControlLabelProps;
    checkboxProps?: CheckboxProps;
    controllerProps?: {
        [key: string]: any;
    };
};
declare const CheckboxGroup: ({ options, name, label, formControlProps, formLabelProps, formGroupProps, checkboxProps, formControlLabelProps, controllerProps }: Props) => JSX.Element;
export default CheckboxGroup;
