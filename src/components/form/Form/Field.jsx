import React, { useContext, useMemo } from 'react'
import FormContext from './FormContext'
import { change } from '../../../store/actions/form'
import useActions from '../../../store/hooks/useActions'
import useSelector from '../../../store/hooks/useSelector'
import { get } from '../../../helpers/objectPath'

const actions = [change]

function FormField({ name, component: FieldComponent, ...props }) {
  const form = useContext(FormContext)
  const [change] = useActions(actions)
  const valueSelector = useMemo(
    () => (state) => get(state, `form.${form}.values.${name}`),
    [form, name]
  )
  const value = useSelector(valueSelector)
  const input = useMemo(
    () => ({
      name,
      value,
      onChange: (event) =>
        change(form, name, event instanceof Event ? event.target.value : event),
    }),
    [form, name, value, change]
  )
  return <FieldComponent input={input} {...props} />
}

FormField.propTypes = {}

export default FormField
