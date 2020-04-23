import { DATA_LOAD_PENDING, DATA_LOAD_SUCCESS } from '../actions/data'
import { REQ_PENDING, REQ_SUCCESS } from '../../constants/request'

export const initialState = {
  resources: {},
  status: {},
}

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOAD_PENDING:
      return {
        ...state,
        status: {
          ...state.status,
          [action.payload.moduleId]: REQ_PENDING,
        },
      }
    case DATA_LOAD_SUCCESS: {
      const { type, id } = action.payload
      return {
        ...state,
        resources: {
          ...state.resources,
          [type]: {
            ...state.resources[type],
            [id]: action.payload,
          },
        },
        status: {
          ...state.status,
          [action.payload.id]: REQ_SUCCESS,
        },
      }
    }
    default:
      return state
  }
}
