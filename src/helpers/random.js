export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

export function randomElementWeight(items, weightKey = 'weight') {
  const total = items.reduce((total, item) => total + item[weightKey], 0)
  let rand = randomInt(0, total + 1)
  console.log('t', total, rand, items)
  for (let i = 0; i < items.length; i++) {
    rand -= items[i][weightKey]
    if (rand < 1) {
      return items[i]
    }
  }

  return items[items.length - 1]
}
