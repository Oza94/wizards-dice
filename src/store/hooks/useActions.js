import { useMemo } from 'react'
import useDispatch from './useDispatch'

export default function useActions(actions) {
  const dispatch = useDispatch()
  const bindActions = useMemo(
    () => actions.map((action) => (...args) => dispatch(action(...args))),
    [actions]
  )

  return bindActions
}
