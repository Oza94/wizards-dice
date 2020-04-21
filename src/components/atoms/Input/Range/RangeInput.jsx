import React, { useCallback } from 'react'
import styles from './RangeInput.css'

function RangeInput({ value, onChange, min, max, step }) {
  const handleChange = useCallback(
    (event) => {
      onChange && onChange(parseInt(event.target.value, 10))
    },
    [onChange]
  )

  return (
    <div className={styles.RangeInput}>
      <input
        type="range"
        className={styles.RangeInput__input}
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
      />
      <div className={styles.RangeInput__label}>{value || '...'}</div>
    </div>
  )
}

export default RangeInput
