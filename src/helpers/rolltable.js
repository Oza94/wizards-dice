import { randomInt } from './random'

const ROLLTABLE_RE = /\[t\[\s?[^\][]+\s?\]\]/gim

export function importRolltable(data) {
  const items = []

  for (let i = 0; i < data.items.length; i++) {
    const item = data.items[i]
    const base = typeof item === 'string' ? { name: item } : item
    items.push(base)
  }

  return {
    id: data.id,
    items,
  }
}

export function rolltable(table) {
  return table.items[randomInt(0, table.items.length)]
}

export function formatRolltables(str, rolltables) {
  const match = str.match(ROLLTABLE_RE)
  if (!match) {
    return str
  }

  let out = str

  for (let i = 0; i < match.length; i++) {
    const [, , tableName] = match[i].split(/\[|\]/)
    const table = rolltables[tableName]

    if (!table) {
      continue
    }

    const item = rolltable(table)

    const value =
      table.recursive || item.recursive
        ? formatRolltables(item.name, rolltables)
        : item.name
    out = out.replace(match[i], value)
  }

  return out
}
