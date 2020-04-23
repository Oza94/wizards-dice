import React, { useMemo, useEffect } from 'react'
import { getDependencies } from '../../../helpers/manifest'
import {
  resourcesLoadedSelector,
  resourcesStatusSelector,
} from '../../../store/selectors/data'
import useSelector from '../../../store/hooks/useSelector'
import { REQ_PENDING, REQ_SUCCESS } from '../../../constants/request'
import useActions from '../../../store/hooks/useActions'
import { loadData as loadDataAction } from '../../../store/actions/data'

const actions = [loadDataAction]

function DataLoader({ modulesIds, loader: Loader, children }) {
  const [loadData] = useActions(actions)
  const dependencies = useMemo(() => getDependencies(modulesIds), modulesIds)
  const ids = useMemo(() => dependencies.map((dep) => dep.id), dependencies)
  const isLoadedSelector = useMemo(() => resourcesLoadedSelector(ids), ids)
  const isLoaded = useSelector(isLoadedSelector)
  const statuses = useSelector(resourcesStatusSelector)

  useEffect(() => {
    if (!isLoaded) {
      dependencies.forEach((dep) => {
        const status = statuses[dep.id]
        if (status === REQ_PENDING || status === REQ_SUCCESS) {
          return
        }

        loadData(dep.id, dep.url)
      })
    }
  }, [])

  if (!isLoaded) {
    return Loader ? <Loader /> : null
  }

  return children
}

DataLoader.propTypes = {}

export default DataLoader
