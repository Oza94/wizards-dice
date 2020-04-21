import { FORM_INITIALIZE, FORM_UNMOUNT, FORM_CHANGE } from '../actions/form'
import { set } from '../../helpers/objectPath'

export const initialInstanceState = {}

export function formInstanceReducer(state = initialInstanceState, action) {
  switch (action.type) {
    case FORM_INITIALIZE:
      return {
        ...state,
        values: action.payload.values || {},
      }
    case FORM_CHANGE:
      return {
        ...state,
        values: set(state.values, action.payload.field, action.payload.value),
      }
    default:
      return state
  }
}

export const initialState = {}

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_INITIALIZE:
      return {
        ...state,
        [action.payload.form]: formInstanceReducer(undefined, action),
      }
    case FORM_UNMOUNT: {
      if (!state[action.payload.form]) {
        console.warn(
          `Trying to unmount non-existing form: "${action.payload.form}"`
        )
      }
      const copy = { ...state }
      delete copy[action.payload.form]
      return copy
    }
    case FORM_CHANGE:
      if (!state[action.payload.form]) {
        console.warn(
          `Trying to update non-existing form: "${action.payload.form}"`
        )
      }
      return {
        ...state,
        [action.payload.form]: formInstanceReducer(
          state[action.payload.form],
          action
        ),
      }
    default:
      return state
  }
}
