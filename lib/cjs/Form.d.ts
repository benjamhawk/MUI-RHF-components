import React, { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
declare type HookFormProps = {
    onSubmit: SubmitHandler<any>;
    formMethods: any;
};
declare const Form: FC<HookFormProps & React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>;
export default Form;
