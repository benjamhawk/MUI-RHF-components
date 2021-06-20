import React from 'react'
import { useController, useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormControlLabel,
  FormControlProps,
  FormLabel,
  FormLabelProps,
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioProps
} from '@material-ui/core'

type Props = {
  name: string
  options: { value: string | number; label: string }[]
  defaultValue?: string | number
  label?: string
  formLabelProps?: FormLabelProps
  radioGroupProps?: RadioGroupProps
  formControlProps?: FormControlProps
  formControlLabelProps?: { [key: string]: any }
  radioProps?: RadioProps
  useControllerProps?: { [key: string]: any }
}

const RadioButtonGroup = ({
  name,
  label,
  options,
  defaultValue,
  formControlProps = {},
  formLabelProps = {},
  radioGroupProps = {},
  radioProps = {},
  formControlLabelProps,
  useControllerProps
}: Props) => {
  const { control } = useFormContext()

  const {
    field: { ...inputProps }
  } = useController({
    name,
    control,
    defaultValue: defaultValue ?? options[0].value,
    ...useControllerProps
  })

  return (
    <FormControl {...formControlProps}>
      {label && <FormLabel {...formLabelProps}>{label}</FormLabel>}
      <RadioGroup {...inputProps} {...radioGroupProps}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            label={option.label}
            control={<Radio {...radioProps} />}
            {...(formControlLabelProps || {})}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default RadioButtonGroup
