import React from 'react'
import MenuItem from './Item/Item'
import MenuHeader from './Header/Header'
import styles from './Menu.css'

function Menu({ children }) {
  return <ul className={styles.Menu}>{children}</ul>
}

Menu.Item = MenuItem
Menu.Header = MenuHeader

export default Menu
