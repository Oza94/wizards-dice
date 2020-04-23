export const DATA_LOAD = 'DATA_LOAD'
export const DATA_LOAD_PENDING = 'DATA_LOAD_PENDING'
export const DATA_LOAD_SUCCESS = 'DATA_LOAD_SUCCESS'

export const loadData = (moduleId, moduleUrl) => ({
  type: DATA_LOAD,
  payload: { moduleId, moduleUrl },
})

export const loadDataPending = (moduleId) => ({
  type: DATA_LOAD_PENDING,
  payload: { moduleId },
})

export const loadDataSuccess = (data) => ({
  type: DATA_LOAD_SUCCESS,
  payload: data,
})
