import React from 'react'
import styles from './FormField.css'

function FormField({ children, flex, label }) {
  return (
    <div style={{ flex: typeof flex === 'boolean' ? (flex ? 1 : 0) : flex }}>
      {label && <label className={styles.FormField__label}>{label}</label>}
      {children}
    </div>
  )
}

export default FormField
