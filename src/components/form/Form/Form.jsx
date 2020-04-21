import React, { useCallback, useEffect } from 'react'
import FormContext from './FormContext'
import {
  initialize as initializeAction,
  unmount as unmountAction,
} from '../../../store/actions/form'
import useActions from '../../../store/hooks/useActions'
import useFormValues from '../../../store/hooks/useFormValues'

const actions = [initializeAction, unmountAction]

function Form({ form, children, onSubmit, initialValues }) {
  const [initialize, unmount] = useActions(actions)
  const values = useFormValues(form)

  useEffect(() => {
    if (!form) {
      throw new Error(`form cannot be undefined`)
    }

    initialize(form, initialValues)

    return () => unmount(form)
  }, [])

  const handleSubmit = useCallback(() => {
    event.preventDefault()
    onSubmit && onSubmit(values)
  }, [onSubmit, values])

  return (
    <FormContext.Provider value={form}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  )
}

Form.propTypes = {}

export default Form
