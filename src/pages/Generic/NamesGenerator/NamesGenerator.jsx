import React, { useEffect, useState, useCallback } from 'react'
import { rolltables } from '../../../data/manifest'
import { formatRolltables } from '../../../helpers/rolltable'
import NameGeneratorForm from '../../../components/form/NameGenerator/NameGenerator'
import { FORM_NAMEGENERATOR } from '../../../constants/form'
import { Page } from '../../../components/molecules'
import { alphabetSort } from '../../../helpers/array'
import useFormValues from '../../../store/hooks/useFormValues'
import Reducer from '../../../store/Reducer'
import formReducer from '../../../store/reducers/form'

const TABLES_OPTIONS = [
  { label: 'Humain (M)', value: 'gen_humanmale_name' },
  { label: 'Humain (F)', value: 'gen_humanfem_name' },
  { label: 'Nain (M)', value: 'gen_dwarfmale_name' },
  { label: 'Elfe (M)', value: 'gen_elfmale_name' },
]

function NamesGeneratorPage() {
  const [names, setNames] = useState(null)
  const values = useFormValues(FORM_NAMEGENERATOR)

  const generateNames = useCallback(() => {
    if (values) {
      const template = `[t[${values.table}]]`
      const names = new Array(values.count)
        .fill(null)
        .map(() => formatRolltables(template, rolltables))
      names.sort(alphabetSort)
      setNames(names)
    }
  }, [values])

  useEffect(() => {
    generateNames()
  }, [values && values.table])

  return (
    <>
      <Reducer name="form" reducer={formReducer} />
      <Page
        description="Séléctionnez un type de personnage pour générer des noms."
        title="Noms de PNJ"
      >
        <NameGeneratorForm
          tablesOptions={TABLES_OPTIONS}
          initialValues={{ table: 'gen_humanmale_name', count: 20 }}
          onSubmit={generateNames}
        />
        {names && (
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        )}
      </Page>
    </>
  )
}

export default NamesGeneratorPage
