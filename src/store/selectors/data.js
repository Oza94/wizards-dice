import { REQ_SUCCESS } from '../../constants/request'

export const resourcesStatusSelector = (state) => state?.data?.status || {}

export const resourcesLoadedSelector = (resources) => (state) => {
  if (!state.data) {
    return false
  }

  for (let i = 0; i < resources.length; i++) {
    if (state.data.status[resources[i]] !== REQ_SUCCESS) {
      return false
    }
  }

  return true
}

export const rolltablesSelector = (state) =>
  state?.data?.resources?.rolltable || {}

export const templatesSelector = (state) =>
  state?.data?.resources?.template || {}
