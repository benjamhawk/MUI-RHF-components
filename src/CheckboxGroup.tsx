import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormControlProps,
  FormGroup,
  FormGroupProps,
  FormLabel,
  FormLabelProps
} from '@material-ui/core'

type Props = {
  options: { value: string | number; label: string }[]
  name: string
  label?: string
  formLabelProps?: FormLabelProps
  formGroupProps?: FormGroupProps
  formControlProps?: FormControlProps
  formControlLabelProps?: { [key: string]: any }
  checkboxProps?: CheckboxProps
  controllerProps?: { [key: string]: any }
}

const CheckboxGroup = ({
  options,
  name,
  label,
  formControlProps = {},
  formLabelProps = {},
  formGroupProps = {},
  checkboxProps = {},
  formControlLabelProps,
  controllerProps
}: Props) => {
  const { control } = useFormContext()

  return (
    <FormControl {...formControlProps}>
      {label && <FormLabel {...formLabelProps}>{label}</FormLabel>}
      <FormGroup {...formGroupProps}>
        {options.map((option) => {
          return (
            <FormControlLabel
              key={option.value}
              control={
                <Controller
                  defaultValue={false}
                  control={control}
                  name={`${name}.${option.value}`}
                  render={({ field }) => (
                    <Checkbox
                      onChange={(e) => field.onChange(e.target.checked)}
                      checked={Boolean(field.value)}
                      {...checkboxProps}
                    />
                  )}
                  {...controllerProps}
                />
              }
              label={option.label}
              {...(formControlLabelProps || {})}
            />
          )
        })}
      </FormGroup>
    </FormControl>
  )
}

export default CheckboxGroup
