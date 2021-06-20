/// <reference types="react" />
import { TextFieldProps } from '@material-ui/core';
declare type Props = {
    options: {
        value: any;
        label: string;
    }[];
    name: string;
    label?: string;
    defaultValue?: string | number;
    required?: boolean;
    useControllerProps?: {
        [key: string]: any;
    };
};
declare const SelectInput: ({ name, label, options, defaultValue, required, useControllerProps, ...rest }: Props & TextFieldProps) => JSX.Element;
export default SelectInput;
