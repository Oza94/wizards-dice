import React from 'react'
import { Switch, Route } from 'react-router'
import AppDrawer from './Drawer/Drawer'
import styles from './App.css'
import {
  PATH_GENERIC_NPCS,
  PATH_HOME,
  PATH_GENERIC_NPCNAMES,
  PATH_GENERIC_TAVERNNAMES,
  PATH_GENERIC_TAVERNMENUS,
} from '../../../constants/paths'
import NotFoundPage from '../../../pages/NotFound/NotFound'
import LazyHomePage from '../../../pages/Home/LazyHome'
import Store from '../../../store/Store'
import Reducer from '../../../store/Reducer'
import dataReducer from '../../../store/reducers/data'
import Middleware from '../../../store/Middleware'
import fetchDataMiddleware from '../../../store/middleware/fetchData'
import LazyNPCGeneratorPage from '../../../pages/Generic/NPCGenerator/LazyNPCGenerator'
import LazyNPCNamesGeneratorPage from '../../../pages/Generic/NPCNamesGenerator/LazyNPCNamesGenerator'
import LazyTavernNameGeneratorPage from '../../../pages/Generic/TavernNameGenerator/LazyTavernNameGenerator'
import LazyTavernMenuGeneratorPage from '../../../pages/Generic/TavernMenuGenerator/LazyTavernMenuGenerator'

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
              component={LazyNPCNamesGeneratorPage}
            />
            <Route
              path={PATH_GENERIC_TAVERNMENUS}
              component={LazyTavernMenuGeneratorPage}
            />

            <Route
              path={PATH_GENERIC_TAVERNNAMES}
              component={LazyTavernNameGeneratorPage}
            />
            <Route path={PATH_GENERIC_NPCS} component={LazyNPCGeneratorPage} />
            <Route path={PATH_HOME} component={LazyHomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    </Store>
  )
}

export default App
