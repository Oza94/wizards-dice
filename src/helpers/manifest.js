import manifest from '../data/manifest.json'
import { dedupe } from './array'

// eslint-disable-next-line no-undef
const dataRequire = require.context('../data', true, /\.ya?ml$/)
const cache = {}

export function getModuleDependencies(moduleId) {
  if (!cache[moduleId]) {
    const [path, subDeps] = manifest.modules[moduleId]
    let deps = [
      {
        id: moduleId,
        path,
        url: dataRequire(`./${path}`).default,
      },
    ]

    if (subDeps) {
      for (let i = 0; i < subDeps.length; i++) {
        const subDep = subDeps[i]
        deps = deps.concat(getModuleDependencies(subDep))
      }
    }

    cache[moduleId] = deps
  }

  return cache[moduleId]
  //console.log('get dependencies')
}

const multiCache = {}

export function getDependencies(modulesIds) {
  const key = modulesIds.join(':')

  if (!multiCache[key]) {
    let merged = getModuleDependencies(modulesIds[0])

    for (let i = 1; i < modulesIds.length; i++) {
      merged = merged.concat(getModuleDependencies(modulesIds[i]))
    }

    multiCache[key] = dedupe(merged)
  }

  return multiCache[key]
}
