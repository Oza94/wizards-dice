import React, { useMemo, useCallback, memo } from 'react'
import { nanoid } from 'nanoid'
import styles from './SelectInput.css'

function SelectInput({ name, value, options, placeholder, onChange, id }) {
  // Assign an id to each value. We'll use that id instead of value in the dom input
  const optionsWithId = useMemo(
    () =>
      options.map((option) => ({
        ...option,
        originalValue: option.value,
        value: nanoid(),
      })),
    [options]
  )

  // Retrieve selected option ref
  const selectedOption = useMemo(
    () => optionsWithId.find((option) => option.originalValue === value),
    [options, value]
  )

  // Value change handler
  const handleChange = useCallback(
    (event) => {
      if (!onChange) {
        return
      }

      // Lookup original value
      onChange(
        optionsWithId.find((option) => option.value === event.target.value)
          ?.originalValue
      )
    },
    [optionsWithId, onChange]
  )

  return (
    <select
      name={name}
      id={id}
      value={selectedOption?.value}
      onChange={handleChange}
      className={styles.SelectInput}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {optionsWithId.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

SelectInput.defaultProps = {
  placeholder: '-- Séléctionnez --',
}

export default memo(SelectInput)
