import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Drawer.css'
import {
  PATH_GENERIC_NAMES,
  PATH_GENERIC_NPCS,
} from '../../../../constants/paths'
import { Menu } from '../../../molecules'

function AppDrawer({ className }) {
  return (
    <div className={`${styles.AppDrawer} ${className}`.trim()}>
      <div className={styles.AppDrawer__header}>
        <Link to="/" className={styles.AppDrawer__title}>
          Wizard&apos;s Dices
        </Link>
      </div>
      <Menu>
        <Menu.Header>Générique</Menu.Header>
        <Menu.Item to={PATH_GENERIC_NAMES}>Noms de PNJ</Menu.Item>
        <Menu.Item to={PATH_GENERIC_NPCS}>PNJ</Menu.Item>
      </Menu>
    </div>
  )
}

export default AppDrawer
