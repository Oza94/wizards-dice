import React from 'react'
import { Switch, Route } from 'react-router'
import AppDrawer from './Drawer/Drawer'
import styles from './App.css'
import {
  PATH_GENERIC_NPCS,
  PATH_HOME,
  PATH_GENERIC_NPCNAMES,
  PATH_GENERIC_TAVERNNAMES,
} from '../../../constants/paths'
import NotFoundPage from '../../../pages/NotFound/NotFound'
import HomePage from '../../../pages/Home/Home'
import NPCGenerator from '../../../pages/Generic/NPCGenerator/NPCGenerator'
import Store from '../../../store/Store'
import Reducer from '../../../store/Reducer'
import dataReducer from '../../../store/reducers/data'
import Middleware from '../../../store/Middleware'
import fetchDataMiddleware from '../../../store/middleware/fetchData'
import NPCNamesGeneratorPage from '../../../pages/Generic/NPCNamesGenerator/NPCNamesGenerator'
import TavernNameGeneratorPage from '../../../pages/Generic/TavernNameGenerator/TavernNameGenerator'

function App() {
  return (
    <Store>
      <Middleware name="fetchData" middleware={fetchDataMiddleware} />
      <Reducer name="data" reducer={dataReducer} />
      <div className={styles.App}>
        <AppDrawer className={styles.App__drawer} />
        <main className={styles.App__main}>
          <Switch>
            <Route
              path={PATH_GENERIC_NPCNAMES}
              component={NPCNamesGeneratorPage}
            />

            <Route
              path={PATH_GENERIC_TAVERNNAMES}
              component={TavernNameGeneratorPage}
            />
            <Route path={PATH_GENERIC_NPCS} component={NPCGenerator} />
            <Route path={PATH_HOME} component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    </Store>
  )
}

export default App
