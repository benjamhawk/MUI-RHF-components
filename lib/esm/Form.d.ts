import React, { FC } from 'react';
declare type HookFormProps = {
    onSubmit: Function;
    formMethods: any;
};
declare const Form: FC<HookFormProps & React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>;
export default Form;
