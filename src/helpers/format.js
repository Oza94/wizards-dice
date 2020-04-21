export function formatCreature(creature) {
  const output = []

  output.push(`## ${creature.name}`)

  // Generate baseline
  const baseline = []

  if (creature.race) {
    baseline.push(creature.race)
  }

  // Generate baseline age / sex
  let agesex = []

  if (creature.sex) {
    agesex.push(`${creature.sex}`)
  }

  if (creature.age) {
    agesex.push(`${creature.age} ans`)
  }

  if (agesex.length) {
    baseline.push(`(${agesex.join(', ')})`)
  }

  if (baseline.length) {
    output.push(baseline.join(' '))
  }

  // Generate descripion attributes
  const description = []

  if (creature.desc_trait) {
    description.push(`${creature.desc_trait}`)
  }

  if (creature.desc_appearance) {
    description.push(`${creature.desc_appearance}`)
  }

  if (creature.desc_mania) {
    description.push(`${creature.desc_mania}`)
  }

  if (creature.desc_talent) {
    description.push(`${creature.desc_talent}`)
  }

  if (description.length) {
    output.push('### Traits')
    output.push(description.map((elem) => `* ${elem}`).join('\n'))
  }

  return output.join('\n\n')
}
