import React, { FC } from 'react'
import { FormProvider, SubmitHandler } from 'react-hook-form'

type HookFormProps = {
  onSubmit: SubmitHandler<any>
  formMethods: any
  formProps?: Object
}

const Form: FC<HookFormProps> = ({
  children,
  formMethods,
  onSubmit,
  formProps = {}
}) => {
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} {...formProps}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
