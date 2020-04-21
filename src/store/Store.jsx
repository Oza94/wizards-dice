import React, { useMemo, useState, useEffect } from 'react'
import StoreInstance from './StoreInstance'

export const StoreContext = React.createContext(null)
export const StateContext = React.createContext(null)

function Store({ children }) {
  const store = useMemo(() => new StoreInstance(), [])
  const [state, setState] = useState(store.state)
  const contextValues = useMemo(() => [store.state, store.dispatch, store], [
    store,
  ])

  useEffect(() => {
    if (store.state !== state) {
      setState(store.state)
    }
    store.onDispatch = () => {
      setState(store.state)
    }

    return () => {
      store.onDispatch = null
    }
  }, [store])

  return (
    <StoreContext.Provider value={contextValues}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </StoreContext.Provider>
  )
}

Store.propTypes = {}

export default Store
