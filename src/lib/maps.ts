import type { Food } from '../data/foods'

export function createGoogleMapsSearchUrl(food: Food) {
  const query = `${food.name} près de moi`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}
