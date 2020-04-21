import React from 'react'
import FormField from '../FormField/FormField'
import Field from '../../../form/Form/Field'
import { SelectInput } from '../../../atoms'

function SelectInputField({ input, options }) {
  return <SelectInput options={options} {...input} />
}

function SelectField({ label, flex, name, ...props }) {
  return (
    <FormField label={label} flex={flex}>
      <Field name={name} component={SelectInputField} {...props} />
    </FormField>
  )
}

export default SelectField
