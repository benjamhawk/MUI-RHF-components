/// <reference types="react" />
import { UseControllerProps } from 'react-hook-form';
declare type Props = {
    name: string;
    label?: string;
    defaultValue?: string | number;
    required?: boolean;
    useControllerProps?: UseControllerProps;
};
declare const TextInput: ({ name, label, defaultValue, required, useControllerProps, ...rest }: Props) => JSX.Element;
export default TextInput;
