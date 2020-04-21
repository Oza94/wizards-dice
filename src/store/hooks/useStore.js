import { useContext } from 'react'
import { StoreContext } from './../Store'

export default function useStore() {
  const [, , store] = useContext(StoreContext)
  return store
}
