import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { formatRolltables } from '../../../helpers/rolltable'
import NameGeneratorForm from '../../../components/form/NameGenerator/NameGenerator'
import { FORM_NAMEGENERATOR } from '../../../constants/form'
import { alphabetSort } from '../../../helpers/array'
import useFormValues from '../../../store/hooks/useFormValues'
import Reducer from '../../../store/Reducer'
import formReducer from '../../../store/reducers/form'
import DataLoader from '../../../components/atoms/DataLoader/DataLoader'
import useSelector from '../../../store/hooks/useSelector'
import { rolltablesSelector } from '../../../store/selectors/data'
import Loader from '../../../components/atoms/Loader/Loader'

function NameGenerator({ options, initialValues }) {
  const modules = useMemo(() => options.map((option) => option.value), [
    options,
  ])
  const [names, setNames] = useState(null)
  const values = useFormValues(FORM_NAMEGENERATOR)
  const rolltables = useSelector(rolltablesSelector)
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
    <DataLoader modulesIds={modules} loader={Loader}>
      <Reducer name="form" reducer={formReducer} />
      <NameGeneratorForm
        tablesOptions={options}
        initialValues={initialValues}
        onSubmit={generateNames}
      />
      {names && (
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      )}
    </DataLoader>
  )
}

export default NameGenerator
