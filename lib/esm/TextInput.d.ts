/// <reference types="react" />
import { UseControllerProps } from 'react-hook-form';
import { TextFieldProps } from '@material-ui/core';
declare type Props = {
    name: string;
    label?: string;
    defaultValue?: string | number;
    required?: boolean;
    useControllerProps?: UseControllerProps;
};
declare const TextInput: ({ name, label, defaultValue, required, useControllerProps, ...rest }: Props & TextFieldProps) => JSX.Element;
export default TextInput;
