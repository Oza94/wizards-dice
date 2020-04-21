export function bem(styles, base, mods) {
  let classlist = []

  if (styles[base]) {
    classlist.push(styles[base])
  }

  if (mods) {
    if (Array.isArray(mods)) {
      for (let i = 0; i < mods.length; i++) {
        if (!mods[i]) {
          continue
        }

        const classname = styles[`${base}--${mods[i]}`]
        if (classname) {
          classlist.push(classname)
        }
      }
    } else if (typeof mods === 'object') {
      const modsKeys = Object.keys(mods)
      for (let i = 0; i < modsKeys.length; i++) {
        const modKey = modsKeys[i]

        if (!modKey) {
          continue
        }

        const classname = styles[`${base}--${modKey}`]
        if (classname && mods[modKey]) {
          classlist.push(classname)
        }
      }
    }
  }

  return classlist.join(' ')
}
