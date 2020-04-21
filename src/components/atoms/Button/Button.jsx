import React from 'react'
import styles from './Button.css'

function Button({ children, type = 'button', onClick }) {
  return (
    <button onClick={onClick} type={type} className={styles.Button}>
      {children}
    </button>
  )
}

export default Button
