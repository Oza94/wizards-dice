import React from 'react'
import { FORM_NPCGENERATOR } from '../../../constants/form'
import { Layout, Button } from '../../atoms'
import { SelectField } from '../../molecules'
import Form from '../Form/Form'

function NPCGeneratorForm({ onSubmit, racesOptions, initialValues }) {
  return (
    <Form
      form={FORM_NPCGENERATOR}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      <Layout gutter>
        {racesOptions && (
          <SelectField flex label="Race" name="race" options={racesOptions} />
        )}
        <Layout align="end">
          <Button type="submit">Au hasard</Button>
        </Layout>
      </Layout>
    </Form>
  )
}

export default NPCGeneratorForm
