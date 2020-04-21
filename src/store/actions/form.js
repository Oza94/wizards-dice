export const FORM_INITIALIZE = 'FORM/INIT'
export const FORM_UNMOUNT = 'FORM/UNMOUNT'
export const FORM_CHANGE = 'FORM/CHANGE'

export const initialize = (form, values) => ({
  type: FORM_INITIALIZE,
  payload: { form, values },
})

export const unmount = (form) => ({
  type: FORM_UNMOUNT,
  payload: { form },
})

export const change = (form, field, value) => ({
  type: FORM_CHANGE,
  payload: { form, field, value },
})
