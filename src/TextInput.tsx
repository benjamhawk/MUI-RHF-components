import React from 'react'
import {
  UseControllerProps,
  useController,
  useFormContext
} from 'react-hook-form'

import { TextField } from '@material-ui/core'

type Props = {
  name: string
  label?: string
  defaultValue?: string | number
  required?: boolean
  useControllerProps?: UseControllerProps
}

const TextInput = ({
  name,
  label,
  defaultValue = '',
  required = false,
  useControllerProps,
  ...rest
}: Props) => {
  const { control, formState } = useFormContext()

  const {
    field: { ...inputProps }
  } = useController({
    name: name as any,
    control,
    defaultValue,
    ...(useControllerProps ?? {}),
    rules: {
      required: required ? 'Field is required' : false,
      ...(useControllerProps?.rules ?? {})
    }
  })

  return (
    <TextField
      label={label}
      defaultValue={defaultValue}
      error={formState.errors[name] ? true : false}
      helperText={formState.errors[name]?.message}
      required={required}
      {...inputProps}
      {...rest}
    />
  )
}

export default TextInput
