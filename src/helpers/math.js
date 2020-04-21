// This split function takes parenthesis into account
export function mathSplit(expression, operator) {
  const result = []
  let braces = 0
  let currentChunk = ''
  for (let i = 0; i < expression.length; ++i) {
    const curCh = expression[i]
    if (curCh == '(') {
      braces++
    } else if (curCh == ')') {
      braces--
    }
    if (braces == 0 && operator == curCh) {
      result.push(currentChunk)
      currentChunk = ''
    } else currentChunk += curCh
  }
  if (currentChunk != '') {
    result.push(currentChunk)
  }
  return result
}

export function evaluateMult(str) {
  const tokens = mathSplit(str, '*')
  let result = 1

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i].trim()
    if (token[0] === '(') {
      // Sub-expression case, go recursive
      result = result * evaluateAdd(token.substr(1, token.length - 2))
    } else {
      result = result * parseInt(token, 10)
    }
  }

  return result
}

export function evaluateMinus(str) {
  const tokens = mathSplit(str, '-')
  let sum = parseInt(evaluateMult(tokens[0]), 10)

  for (let i = 1; i < tokens.length; i++) {
    sum = sum - parseInt(evaluateMult(tokens[i]), 10)
  }

  return sum
}

export function evaluateAdd(str) {
  const tokens = mathSplit(str, '+')
  let sum = 0

  for (let i = 0; i < tokens.length; i++) {
    sum = sum + parseInt(evaluateMinus(tokens[i]), 10)
  }

  return sum
}

export function evaluate(str) {
  return evaluateAdd(str)
}
