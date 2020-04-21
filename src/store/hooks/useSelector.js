import { useMemo, useContext } from 'react'
import { StateContext } from './../Store'

export default function useSelector(selector) {
  const state = useContext(StateContext)
  const value = useMemo(() => selector(state), [state])

  return value
}
