import { useEffect } from 'react'
import useStore from './hooks/useStore'

function Reducer({ name, reducer }) {
  const store = useStore()

  useEffect(() => {
    return () => store.removeReducer(name)
  }, [])

  if (!store.hasReducer(name)) {
    // Doing it in render to its immediatly available
    store.addReducer(name, reducer)
  }

  return null
}

export default Reducer
