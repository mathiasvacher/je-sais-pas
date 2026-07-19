import type { Food } from '../data/foods'

export function pickChoices(foodList: Food[], excluded: Food[] = [], count = 3) {
  const pool = foodList.filter((food) => !excluded.includes(food))
  return [...(pool.length > 0 ? pool : foodList)].sort(() => Math.random() - 0.5).slice(0, count)
}

export function keepChoice(food: Food, index: number, previousOptions: Food[], foodList: Food[]) {
  const replacements = pickChoices(foodList.filter((item) => item !== food), previousOptions.filter((item) => item !== food), 2)
  let replacementIndex = 0

  return previousOptions.map((_, optionIndex) => {
    if (optionIndex === index) return food
    const replacement = replacements[replacementIndex]
    replacementIndex += 1
    return replacement
  })
}
