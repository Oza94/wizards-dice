export function alphabetSort(a, b) {
  if (a > b) {
    return 1
  }
  if (b > a) {
    return -1
  }
  return 0
}

export function dedupe(array) {
  const copy = []

  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (copy.indexOf(element) < 0) {
      copy.push(element)
    }
  }

  return copy
}
