import React from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { MenuItem, TextField, TextFieldProps } from '@material-ui/core'

type Props = {
  options: { value: any; label: string }[]
  name: string
  label?: string
  defaultValue?: string | number
  required?: boolean
  useControllerProps?: { [key: string]: any }
}
const SelectInput = ({
  name,
  label,
  options,
  defaultValue = '',
  required = false,
  useControllerProps,
  ...rest
}: Props & TextFieldProps) => {
  const { control, formState } = useFormContext()

  const {
    field: { ref, ...inputProps }
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
      select
      label={label}
      error={formState.errors[name] ? true : false}
      helperText={formState.errors[name]?.message}
      required={required}
      {...inputProps}
      {...rest}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default SelectInput
