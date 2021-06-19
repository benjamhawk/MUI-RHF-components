import React from 'react'
import { PropsWithChildren } from 'react'
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form'

type HookFormProps<FormData> = {
  onSubmit: SubmitHandler<FormData>
  formMethods: UseFormReturn<FormData>
  formProps?: Object
}

function HookForm<FormData>({
  children,
  formMethods,
  onSubmit,
  formProps = {}
}: PropsWithChildren<HookFormProps<FormData>>) {
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} {...formProps}>
        {children}
      </form>
    </FormProvider>
  )
}

export default HookForm
