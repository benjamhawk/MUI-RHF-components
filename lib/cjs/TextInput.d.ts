/// <reference types="react" />
import { TextFieldProps } from '@material-ui/core';
declare type Props = {
    name: string;
    label?: string;
    defaultValue?: string | number;
    required?: boolean;
    useControllerProps?: {
        [key: string]: any;
    };
};
declare const TextInput: ({ name, label, defaultValue, required, useControllerProps, ...rest }: Props & TextFieldProps) => JSX.Element;
export default TextInput;
