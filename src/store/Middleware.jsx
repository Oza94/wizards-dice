import { useEffect } from 'react'
import useStore from './hooks/useStore'

function Middleware({ name, middleware }) {
  const store = useStore()

  useEffect(() => {
    return () => store.removeMiddleware(name)
  }, [])

  if (!store.hasMiddleware(name)) {
    // Doing it in render to its immediatly available
    store.addMiddleware(name, middleware)
  }

  return null
}

export default Middleware
