import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Item.css'

function MenuItem({ children, to, as: RenderComponent = NavLink }) {
  return (
    <li>
      <RenderComponent className={styles.MenuItem__link} to={to}>
        {children}
      </RenderComponent>
    </li>
  )
}

export default MenuItem
