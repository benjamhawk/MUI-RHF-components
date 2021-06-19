/// <reference types="react" />
import { UseControllerProps } from 'react-hook-form';
import { FormControlLabelProps, FormControlProps, FormLabelProps, RadioGroupProps, RadioProps } from '@material-ui/core';
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
    formControlLabelProps?: FormControlLabelProps;
    radioProps?: RadioProps;
    useControllerProps?: UseControllerProps;
};
declare const RadioButtonGroup: ({ name, label, options, defaultValue, formControlProps, formLabelProps, radioGroupProps, radioProps, formControlLabelProps, useControllerProps }: Props) => JSX.Element;
export default RadioButtonGroup;