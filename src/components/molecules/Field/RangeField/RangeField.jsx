import React from 'react'
import FormField from '../FormField/FormField'
import Field from '../../../form/Form/Field'
import { RangeInput } from '../../../atoms'

function RangeInputField({ input, options, min, max, step }) {
  return (
    <RangeInput options={options} min={min} max={max} step={step} {...input} />
  )
}

function RangeField({ label, flex, name, ...props }) {
  return (
    <FormField label={label} flex={flex}>
      <Field name={name} component={RangeInputField} {...props} />
    </FormField>
  )
}

export default RangeField
