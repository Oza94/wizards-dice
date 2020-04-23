import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Drawer.css'
import {
  PATH_GENERIC_NPCS,
  PATH_GENERIC_NPCNAMES,
  PATH_GENERIC_TAVERNNAMES,
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
        <Menu.Header>Générique / PNJ</Menu.Header>
        <Menu.Item to={PATH_GENERIC_NPCNAMES}>Noms</Menu.Item>
        <Menu.Item to={PATH_GENERIC_NPCS}>Personnages complets</Menu.Item>
        <Menu.Header>Générique / Taverne</Menu.Header>
        <Menu.Item to={PATH_GENERIC_TAVERNNAMES}>Noms</Menu.Item>
      </Menu>
    </div>
  )
}

export default AppDrawer
