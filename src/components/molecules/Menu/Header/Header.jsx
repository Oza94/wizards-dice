import React from 'react'
import styles from './Header.css'

function MenuHeader({ children }) {
  return <li className={styles.MenuHeader}>{children}</li>
}

export default MenuHeader
