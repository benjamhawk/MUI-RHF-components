/// <reference types="react" />
import { FormControlProps, FormLabelProps, RadioGroupProps, RadioProps } from '@material-ui/core';
declare type Props = {
    name: string;
    options: {
        value: string | number;
        label: string;
    }[];
    defaultValue?: string | number;
    label?: string;
    formLabelProps?: FormLabelProps;
    radioGroupProps?: RadioGroupProps;
    formControlProps?: FormControlProps;
    formControlLabelProps?: {
        [key: string]: any;
    };
    radioProps?: RadioProps;
    useControllerProps?: {
        [key: string]: any;
    };
};
declare const RadioButtonGroup: ({ name, label, options, defaultValue, formControlProps, formLabelProps, radioGroupProps, radioProps, formControlLabelProps, useControllerProps }: Props) => JSX.Element;
export default RadioButtonGroup;
