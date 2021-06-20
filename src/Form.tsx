import React, { FC } from 'react'
import { FormProvider } from 'react-hook-form'

type HookFormProps = {
  onSubmit: Function
  formMethods: any
}

const Form: FC<
  HookFormProps &
    React.DetailedHTMLProps<
      React.FormHTMLAttributes<HTMLFormElement>,
      HTMLFormElement
    >
> = ({ children, formMethods, onSubmit, ...rest }) => {
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} {...rest}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
