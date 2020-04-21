//import { evaluate } from 'mathjs'
import { randomInt } from './random'
import { evaluate } from './math'

const FORMULA_RE = /\[\[\s?[^\][]+\s?\]\]/gim

export function roll(count, faces) {
  const rolls = []
  let total = 0

  for (let i = 0; i < count; i++) {
    const r = randomInt(0, faces) + 1
    rolls.push(r)
    total += i
  }

  return {
    rolls,
    srolls: rolls.join(' + '),
    total,
  }
}

export function formatRoll(str) {
  const [count, faces] = str.split(/d/i)
  return roll(parseInt(count, 10), parseInt(faces, 10))
}

export function formatRolls(str) {
  const matches = str.match(/[0-9]+d[0-9]+/gi)

  if (!matches) {
    return str
  }

  let rolledStr = str
  for (let i = 0; i < matches.length; i++) {
    const dice = matches[i]
    const roll = formatRoll(dice)
    rolledStr = rolledStr.replace(dice, `(${roll.srolls})`)
  }
  return rolledStr
}

export function evaluateFormula(formula) {
  const rolledFormula = formatRolls(formula)
  const result = evaluate(rolledFormula)

  return {
    rolledFormula,
    result,
  }
}

export function formatFormulas(input, rolltables, { markdown = false } = {}) {
  let output = input

  const match = input.match(FORMULA_RE)

  if (!match) {
    return output
  }

  for (let i = 0; i < match.length; i++) {
    const str = match[i].replace(/(\[\[\s+|\s?\]\])/gi, '')
    const { result } = evaluateFormula(str)

    output = output.replace(match[i], markdown ? `**${result}**` : result)
  }
  return output
}
