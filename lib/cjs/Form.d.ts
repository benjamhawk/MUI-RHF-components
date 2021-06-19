import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
declare type HookFormProps = {
    onSubmit: SubmitHandler<any>;
    formMethods: any;
    formProps?: Object;
};
declare const Form: FC<HookFormProps>;
export default Form;
