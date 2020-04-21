import { formatRolltables } from './rolltable'
import { formatFormulas } from './dice'

export function populateTemplate(template, { rolltables }) {
  const out = {}
  const keys = Object.keys(template.template)

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    out[key] = formatFormulas(
      formatRolltables(template.template[key], rolltables)
    )
  }

  return out
}

export function populateTemplates(templatesNames, options) {
  const templates = Array.isArray(templatesNames)
    ? templatesNames
    : [templatesNames]

  let out = {}

  for (let i = 0; i < templates.length; i++) {
    out = {
      ...out,
      ...populateTemplate(options.templates[templates[i]], options),
    }
  }

  return out
}
