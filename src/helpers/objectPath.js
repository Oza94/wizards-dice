const PATH_RE = /\]?\.|\[/g

export function get(obj, path) {
  let temp = obj
  const keys = path.split(PATH_RE)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (!temp[key]) {
      return null
    }
    temp = temp[key]
  }

  return temp
}

export function set(obj, path, value) {
  const root = { ...obj }
  let temp = root
  const keys = path.split(PATH_RE)

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]

    if (i === keys.length - 1) {
      temp[key] = value
      break
    } else {
      const tempValue = temp[key]
      temp[key] = typeof tempValue === 'object' ? { ...tempValue } : {}
    }

    temp = temp[key]
  }

  return root
}
