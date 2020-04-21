import React from 'react'
import { Switch, Route } from 'react-router'
import AppDrawer from './Drawer/Drawer'
import styles from './App.css'
import {
  PATH_GENERIC_NAMES,
  PATH_GENERIC_NPCS,
  PATH_HOME,
} from '../../../constants/paths'
import NamesGeneratorPage from '../../../pages/Generic/NamesGenerator/NamesGenerator'
import NotFoundPage from '../../../pages/NotFound/NotFound'
import HomePage from '../../../pages/Home/Home'
import NPCGenerator from '../../../pages/Generic/NPCGenerator/NPCGenerator'
import Store from '../../../store/Store'

function App() {
  return (
    <div className={styles.App}>
      <Store>
        <AppDrawer className={styles.App__drawer} />
        <main className={styles.App__main}>
          <Switch>
            <Route path={PATH_GENERIC_NAMES} component={NamesGeneratorPage} />
            <Route path={PATH_GENERIC_NPCS} component={NPCGenerator} />
            <Route path={PATH_HOME} component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </Store>
    </div>
  )
}

export default App
