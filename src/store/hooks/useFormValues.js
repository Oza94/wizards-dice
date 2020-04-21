import { useMemo } from 'react'
import useSelector from './useSelector'
import { get } from '../../helpers/objectPath'

export default function useFormValues(formName) {
  const selector = useMemo(() => (state) =>
    get(state, `form.${formName}.values`, [formName])
  )
  return useSelector(selector)
}
