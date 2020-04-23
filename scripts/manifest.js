/* eslint-env node */
const fs = require('fs')
const path = require('path')
//const watch = require('watch')
const yaml = require('yaml')

const YAML_RE = /\.ya?ml$/
const [, , folder] = process.argv
const root = path.resolve(process.cwd(), folder)
// eslint-disable-next-line
let cache = null
function listFiles(dirpath) {
  const files = fs.readdirSync(dirpath)
  let out = []

  for (let i = 0; i < files.length; i++) {
    const file = path.resolve(dirpath, files[i])
    const stat = fs.lstatSync(file)

    if (stat.isFile() && file.match(YAML_RE)) {
      out.push(file)
    } else if (stat.isDirectory()) {
      out = out.concat(listFiles(file))
    }
  }
  return out
}

function checkManifest(manifest) {
  const errors = []

  const moduleKeys = Object.keys(manifest.modules)
  for (let i = 0; i < moduleKeys.length; i++) {
    const modKey = moduleKeys[i]
    const mod = manifest.modules[modKey]

    if (!mod[1]) {
      continue
    }

    for (let j = 0; j < mod[1].length; j++) {
      const dep = mod[1][j]
      if (!manifest.modules[dep]) {
        errors.push(`dependency "${dep}" not satisfied for module "${modKey}"`)
      }
    }
  }

  if (errors.length) {
    console.warn(
      `Manifest errors:\n${errors
        .map((err) => '  [error] ' + err)
        .join('\n')}\n`
    )
    return false
  }

  return true
}

function checkData(file, data) {
  const errors = []
  if (!data.id) {
    errors.push(`no id attribute`)
  }
  if (!data.type) {
    errors.push(`no type attribute`)
  }

  if (errors.length) {
    console.error(
      `${file}\n${errors.map((err) => `  [error] ${err}`).join('\n')}\n`
    )
    return false
  }

  return true
}

function writeManifest(folder, data) {
  const outpath = path.resolve(folder, 'manifest.json')
  fs.writeFileSync(outpath, JSON.stringify(data, null, 2), 'utf-8')
  console.log(`write: ${outpath}`)
}

function generateDepenciesTree(folder) {
  const files = listFiles(folder)
  const dependencies = { modules: {} }

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const content = fs.readFileSync(file, 'utf-8')
    const data = yaml.parse(content)

    if (!checkData(file, data)) {
      continue
    }

    dependencies.modules[data.id] = [
      file.replace(`${folder}/`, ''),
      data.dependencies || null,
    ]
  }

  if (!checkManifest(dependencies)) {
    return dependencies
  }
  writeManifest(folder, dependencies)
  return dependencies
}

/*function updateDependenciesTree(folder, file) {
  const stat = fs.lstatSync(file)
  const dependencies = JSON.parse(JSON.stringify(cache))

  if (!stat.isFile() || !file.match(YAML_RE)) {
    return
  }

  const content = fs.readFileSync(file, 'utf-8')
  const data = yaml.parse(content)

  if (!checkData(file, data)) {
    return
  }

  dependencies.modules[data.id] = [
    file.replace(`${folder}/`, ''),
    data.dependencies || null,
  ]

  cache = dependencies

  if (!checkManifest(dependencies)) {
    return
  }

  writeManifest(folder, cache)
}*/

cache = generateDepenciesTree(root)

// TODO: implement watch mode
/*
watch.watchTree(root, function (f, curr, prev) {
  if (typeof f == 'object' && prev === null && curr === null) {
    // Finished walking the tree
  } else if (prev === null) {
    // f is a new file
    console.log(f, curr)
  } else if (curr.nlink === 0) {
    // f was removed
  } else {
    // f was changed
    //console.log(f, curr)
    console.log('changed:', f, '\n')
    updateDependenciesTree(root, f)
  }
})
*/
