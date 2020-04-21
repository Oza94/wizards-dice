import React from 'react'
import { FORM_NAMEGENERATOR } from '../../../constants/form'
import { Layout, Button } from '../../atoms'
import { SelectField, RangeField } from '../../molecules'
import Form from '../Form/Form'

function NameGeneratorForm({ onSubmit, tablesOptions, initialValues }) {
  return (
    <Form
      form={FORM_NAMEGENERATOR}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      <Layout gutter>
        {tablesOptions && (
          <SelectField flex label="Type" name="table" options={tablesOptions} />
        )}
        <RangeField
          flex
          label="Combien ?"
          name="count"
          min={10}
          max={100}
          step={10}
        />
        <Layout align="end">
          <Button type="submit">Au hasard</Button>
        </Layout>
      </Layout>
    </Form>
  )
}

export default NameGeneratorForm
