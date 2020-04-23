import { DATA_LOAD, loadDataPending, loadDataSuccess } from '../actions/data'
import { importRolltable } from '../../helpers/rolltable'

function transform(json) {
  switch (json.type) {
    case 'rolltable':
      return importRolltable(json)
    default:
      break
  }

  return json
}
const fetchDataMiddleware = ({ dispatch }) => (next) => async (action) => {
  next(action)

  if (action.type !== DATA_LOAD) {
    return
  }

  dispatch(loadDataPending(action.payload.moduleId))
  try {
    const res = await fetch(action.payload.moduleUrl)
    let json = transform(await res.json())

    dispatch(loadDataSuccess(json))
  } catch (err) {
    console.error('Fetch data error')
    console.error(err)
  }
  //console.log('fetch middleware', action, json)
}
export default fetchDataMiddleware
