import React from 'react'

type Props = {
  name: string
  label?: string
  defaultValue?: string | number
  required?: boolean
}

const TextInput = ({
  name,
  label,
  defaultValue = '',
  required = false,
  ...rest
}: Props) => {

  return (
    <div>Test
      </div>
  )
}

export default TextInput
