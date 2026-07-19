export type Food = {
  name: string
  emoji: string
  color: string
  caption: string
}

export type FoodKind = 'restaurant' | 'fast-food' | 'dessert'
export type FoodStyle = 'français' | 'asiatique' | 'italien' | 'méditerranéen' | 'du-monde' | 'végétarien'
export type FoodBudget = '€' | '€€' | '€€€'
export type FoodMoment = 'apero' | 'grignoter' | 'brunch' | 'repas'

export const SERIES_LENGTH = 8

export const foods: Food[] = [
  { name: 'Bouchon lyonnais', emoji: '🍲', color: 'peach', caption: 'Quenelle, gratin ou tablier de sapeur.' },
  { name: 'Sushi', emoji: '🍣', color: 'pink', caption: 'Frais, délicat, très joli.' },
  { name: 'Burger', emoji: '🍔', color: 'yellow', caption: 'La valeur sûre, sans discussion.' },
  { name: 'Ramen', emoji: '🍜', color: 'lavender', caption: 'Un grand bol réconfortant.' },
  { name: 'Libanais', emoji: '🧆', color: 'mint', caption: 'À partager, avec beaucoup de mezze.' },
  { name: 'Curry indien', emoji: '🍛', color: 'coral', caption: 'Parfumé, épicé juste comme il faut.' },
  { name: 'Pizza', emoji: '🍕', color: 'blue', caption: 'Bords gonflés et mozza fondante.' },
  { name: 'Coréen', emoji: '🍚', color: 'lilac', caption: 'Bibimbap, poulet frit ou kimchi.' },
  { name: 'Tacos', emoji: '🌮', color: 'peach', caption: 'Croustillant, généreux, solaire.' },
  { name: 'Pâtes', emoji: '🍝', color: 'yellow', caption: 'Fraîches, à la truffe ou bien en sauce.' },
  { name: 'Vietnamien', emoji: '🍲', color: 'mint', caption: 'Pho, bo bun ou rouleaux de printemps.' },
  { name: 'Brunch', emoji: '🥞', color: 'pink', caption: 'Œufs, pancakes et zéro pression.' },
  { name: 'Éthiopien', emoji: '🫓', color: 'coral', caption: 'Épices, injera et tout à partager.' },
  { name: 'Poké bowl', emoji: '🥗', color: 'blue', caption: 'Frais, coloré, plein de bonnes choses.' },
  { name: 'Crêperie', emoji: '🥞', color: 'lilac', caption: 'Une complète, puis une petite sucrée.' },
  { name: 'Bistrot français', emoji: '🍷', color: 'peach', caption: 'Un plat du jour et un bon verre.' },
  { name: 'Couscous', emoji: '🍲', color: 'yellow', caption: 'Généreux, parfumé et réconfortant.' },
  { name: 'Thaï', emoji: '🍜', color: 'mint', caption: 'Pad thaï, curry vert ou satay.' },
  { name: 'Tapas', emoji: '🫒', color: 'coral', caption: 'Plein de petites assiettes à picorer.' },
  { name: 'Fish & chips', emoji: '🐟', color: 'blue', caption: 'Croustillant, citronné, sans chichi.' },
  { name: 'Végétarien', emoji: '🥬', color: 'mint', caption: 'Inventif, gourmand et bien frais.' },
  { name: 'Cuisine grecque', emoji: '🫓', color: 'lilac', caption: 'Feta, pita, tzatziki et soleil.' },
  { name: 'Fried chicken', emoji: '🍗', color: 'yellow', caption: 'Ultra croustillant, sauce bien choisie.' },
  { name: 'Gyozas & dumplings', emoji: '🥟', color: 'peach', caption: 'Vapeur, poêle ou frits : tous oui.' },
  { name: 'Parrilla argentine', emoji: '🥩', color: 'coral', caption: 'Viande grillée, chimichurri, bonheur.' },
  { name: 'Glace', emoji: '🍨', color: 'pink', caption: 'Parce qu’un dîner sucré, ça arrive.' },
  { name: 'Poulet', emoji: '🍗', color: 'yellow', caption: 'Rôti, grillé ou braisé, avec de bonnes sauces.' },
  { name: 'Mafé', emoji: '🥜', color: 'peach', caption: 'Onctueux, parfumé, complètement addictif.' },
  { name: 'Bao buns', emoji: '🥟', color: 'lilac', caption: 'Tout moelleux avec une garniture surprise.' },
  { name: 'Fondue savoyarde', emoji: '🫕', color: 'yellow', caption: 'Du fromage fondu. Que demander de plus ?' },
  { name: 'Cuisine arménienne', emoji: '🍢', color: 'mint', caption: 'Grillades, herbes fraîches et pain lavash.' },
  { name: 'Burrito', emoji: '🌯', color: 'coral', caption: 'Un repas complet bien roulé.' },
  { name: 'Hot-dog gourmet', emoji: '🌭', color: 'pink', caption: 'Simple, drôle et bien chargé.' },
  { name: 'Ravioles', emoji: '🥟', color: 'blue', caption: 'Un petit classique de la région.' },
  { name: 'Paella', emoji: '🥘', color: 'yellow', caption: 'Safran, soleil et tout ce qu’on aime.' },
  { name: 'Salade composée', emoji: '🥗', color: 'mint', caption: 'Légère, croquante, mais pas triste.' },
  { name: 'Bagel', emoji: '🥯', color: 'yellow', caption: 'Saumon, pastrami ou veggie : toujours efficace.' },
  { name: 'Korean corn dog', emoji: '🌭', color: 'pink', caption: 'Fromage qui file et panure croustillante.' },
  { name: 'Focaccia garnie', emoji: '🥪', color: 'coral', caption: 'Moelleuse, généreuse et parfaite à partager.' },
  { name: 'Burrata', emoji: '🧀', color: 'mint', caption: 'Tomates, pesto, pain grillé : simple et parfait.' },
  { name: 'Loaded fries', emoji: '🍟', color: 'yellow', caption: 'Des frites, des toppings, aucun regret.' },
  { name: 'Katsu sando', emoji: '🥪', color: 'blue', caption: 'Le sandwich japonais ultra moelleux.' },
  { name: 'Halloumi grillé', emoji: '🧀', color: 'peach', caption: 'Doré, salé, avec une belle salade.' },
  { name: 'Planche à partager', emoji: '🧀', color: 'coral', caption: 'Fromages, charcuterie, et on commande après.' },
  { name: 'McDonald’s', emoji: '🍔', color: 'yellow', caption: 'Un menu simple, rapide et régressif.' },
  { name: 'KFC', emoji: '🍗', color: 'coral', caption: 'Poulet frit, tenders et bucket à partager.' },
  { name: 'Burger King', emoji: '🍔', color: 'peach', caption: 'Un Whopper et des onion rings.' },
  { name: 'Ninkasi', emoji: '🍔', color: 'lilac', caption: 'Burger, bière lyonnaise et bonne ambiance.' },
  { name: 'O’Tacos', emoji: '🌯', color: 'mint', caption: 'Une sauce fromagère, et c’est parti.' },
  { name: 'Subway', emoji: '🥪', color: 'blue', caption: 'Ton sandwich exactement comme tu le veux.' },
  { name: 'Tiramisu', emoji: '🍰', color: 'peach', caption: 'Café, mascarpone, bonheur immédiat.' },
  { name: 'Cookies chauds', emoji: '🍪', color: 'yellow', caption: 'Cœur coulant obligatoire.' },
  { name: 'Bubble tea', emoji: '🧋', color: 'lilac', caption: 'Une douceur à boire, avec plein de perles.' },
  { name: 'Praluline', emoji: '🥐', color: 'pink', caption: 'La brioche rose iconique de la région.' },
  { name: 'Cocktails & tapas', emoji: '🍸', color: 'coral', caption: 'Quelques verres, plein de petites assiettes.' },
  { name: 'Restaurant gastronomique', emoji: '🍽️', color: 'lilac', caption: 'Pour marquer le coup, tout simplement.' },
  { name: 'Raclette à deux', emoji: '🧀', color: 'yellow', caption: 'Du fromage fondu et aucune mauvaise idée.' },
  { name: 'Apéro dînatoire', emoji: '🍇', color: 'peach', caption: 'Houmous, fromages, pain frais et petites choses.' },
  { name: 'Crêpes maison', emoji: '🥞', color: 'pink', caption: 'Salées d’abord, sucrées ensuite.' },
  { name: 'Curry maison', emoji: '🍛', color: 'coral', caption: 'Un plat parfumé à préparer sans se presser.' },
  { name: 'Raclette maison', emoji: '🫕', color: 'yellow', caption: 'Fromage, pommes de terre et une longue soirée.' },
  { name: 'Pizza maison', emoji: '🍕', color: 'coral', caption: 'On choisit les toppings ensemble.' },
  { name: 'Pâtes au pesto', emoji: '🍝', color: 'mint', caption: 'Prêtes vite, avec beaucoup de parmesan.' },
  { name: 'Lasagnes', emoji: '🍝', color: 'yellow', caption: 'Le plat qui fait toujours plaisir.' },
  { name: 'Gnocchis gratinés', emoji: '🥔', color: 'peach', caption: 'Moelleux, crémeux, bien dorés.' },
  { name: 'Risotto', emoji: '🍚', color: 'lilac', caption: 'On remue doucement et on ouvre une bouteille.' },
  { name: 'Dahl de lentilles', emoji: '🥣', color: 'coral', caption: 'Épicé, simple et ultra réconfortant.' },
  { name: 'Chili con carne', emoji: '🫘', color: 'peach', caption: 'Tout mijote pendant qu’on se pose.' },
  { name: 'Wok de légumes', emoji: '🥦', color: 'mint', caption: 'Coloré, croquant et prêt en quelques minutes.' },
  { name: 'Nouilles sautées', emoji: '🍜', color: 'yellow', caption: 'Avec les légumes qui restent au frigo.' },
  { name: 'Riz sauté', emoji: '🍚', color: 'lilac', caption: 'Un classique anti-gaspi, mais délicieux.' },
  { name: 'Quesadillas', emoji: '🫓', color: 'yellow', caption: 'Du fromage qui file, c’est tout ce qu’il faut.' },
  { name: 'Fajitas', emoji: '🌮', color: 'coral', caption: 'Chacun compose la sienne, comme il veut.' },
  { name: 'Burritos maison', emoji: '🌯', color: 'mint', caption: 'On les remplit beaucoup trop, évidemment.' },
  { name: 'Burgers maison', emoji: '🍔', color: 'peach', caption: 'Steak, cheddar, oignons : à toi de jouer.' },
  { name: 'Croque-monsieur', emoji: '🥪', color: 'yellow', caption: 'Doré dehors, fondant dedans.' },
  { name: 'Quiche maison', emoji: '🥧', color: 'lilac', caption: 'Parfaite avec une salade et zéro stress.' },
  { name: 'Omelette gourmande', emoji: '🍳', color: 'peach', caption: 'Fromage, herbes, champignons : fais-toi plaisir.' },
  { name: 'Soupe & tartines', emoji: '🥣', color: 'mint', caption: 'Le dîner tout doux des soirs tranquilles.' },
  { name: 'Salade César', emoji: '🥗', color: 'yellow', caption: 'Croûtons, parmesan, poulet : la valeur sûre.' },
  { name: 'Poké bowl maison', emoji: '🥗', color: 'blue', caption: 'On compose chacun son bol préféré.' },
  { name: 'Sushis maison', emoji: '🍣', color: 'pink', caption: 'Un peu de patience, beaucoup de fierté.' },
  { name: 'Planche apéro', emoji: '🧀', color: 'coral', caption: 'Fromages, charcuterie et tout ce qu’on aime.' },
  { name: 'Fondue maison', emoji: '🫕', color: 'yellow', caption: 'Du pain, du fromage et une soirée qui dure.' },
  { name: 'Tiramisu maison', emoji: '🍰', color: 'peach', caption: 'À préparer ensemble avant de le dévorer.' },
  { name: 'Cookies maison', emoji: '🍪', color: 'pink', caption: 'Encore tièdes, avec le cœur coulant.' },
  { name: 'Crêpes party', emoji: '🥞', color: 'lilac', caption: 'Chacun sa garniture, personne ne juge.' },
]

const fastFoodNames = new Set(['McDonald’s', 'KFC', 'Burger King', 'O’Tacos', 'Subway', 'Fried chicken', 'Korean corn dog', 'Loaded fries', 'Hot-dog gourmet'])
const dessertNames = new Set(['Glace', 'Tiramisu', 'Cookies chauds', 'Bubble tea', 'Praluline'])
const dateFriendlyNames = new Set(['Bouchon lyonnais', 'Libanais', 'Sushi', 'Pizza', 'Pâtes', 'Tapas', 'Cuisine grecque', 'Restaurant gastronomique', 'Cocktails & tapas', 'Raclette à deux', 'Burrata', 'Planche à partager', 'Fondue savoyarde', 'Glace', 'Tiramisu', 'Pizza maison', 'Pâtes au pesto', 'Lasagnes', 'Gnocchis gratinés', 'Risotto', 'Sushis maison', 'Planche apéro', 'Fondue maison', 'Tiramisu maison', 'Cookies maison', 'Crêpes party'])
const homeFriendlyNames = new Set(['Pizza', 'Pâtes', 'Ramen', 'Curry indien', 'Tacos', 'Poké bowl', 'Salade composée', 'Burrata', 'Planche à partager', 'Raclette à deux', 'Apéro dînatoire', 'Crêpes maison', 'Curry maison', 'Raclette maison', 'Glace', 'Cookies chauds', 'Pizza maison', 'Pâtes au pesto', 'Lasagnes', 'Gnocchis gratinés', 'Risotto', 'Dahl de lentilles', 'Chili con carne', 'Wok de légumes', 'Nouilles sautées', 'Riz sauté', 'Quesadillas', 'Fajitas', 'Burritos maison', 'Burgers maison', 'Croque-monsieur', 'Quiche maison', 'Omelette gourmande', 'Soupe & tartines', 'Salade César', 'Poké bowl maison', 'Sushis maison', 'Planche apéro', 'Fondue maison', 'Tiramisu maison', 'Cookies maison', 'Crêpes party'])
const premiumNames = new Set(['Restaurant gastronomique', 'Parrilla argentine', 'Pasta à la truffe'])
const aperoNames = new Set(['Tapas', 'Cocktails & tapas', 'Planche à partager', 'Planche apéro', 'Apéro dînatoire', 'Libanais', 'Burrata', 'Focaccia garnie', 'Halloumi grillé'])
const snackNames = new Set(['McDonald’s', 'KFC', 'Burger King', 'O’Tacos', 'Subway', 'Fried chicken', 'Hot-dog gourmet', 'Loaded fries', 'Korean corn dog', 'Bagel', 'Croque-monsieur', 'Quesadillas', 'Cookies chauds', 'Cookies maison', 'Bubble tea', 'Glace'])
const brunchNames = new Set(['Brunch', 'Crêperie', 'Crêpes maison', 'Crêpes party', 'Bagel', 'Omelette gourmande', 'Pancakes', 'Praluline'])

const styleNames: Record<FoodStyle, string[]> = {
  français: ['Bouchon lyonnais', 'Bistrot français', 'Crêperie', 'Ravioles', 'Fondue savoyarde', 'Poulet', 'Praluline'],
  asiatique: ['Sushi', 'Ramen', 'Coréen', 'Vietnamien', 'Thaï', 'Gyozas & dumplings', 'Bao buns', 'Katsu sando', 'Korean corn dog', 'Bubble tea', 'Wok de légumes', 'Nouilles sautées', 'Riz sauté', 'Sushis maison', 'Poké bowl maison'],
  italien: ['Pizza', 'Pâtes', 'Focaccia garnie', 'Burrata', 'Tiramisu', 'Pizza maison', 'Pâtes au pesto', 'Lasagnes', 'Gnocchis gratinés', 'Risotto', 'Tiramisu maison'],
  méditerranéen: ['Libanais', 'Tapas', 'Cuisine grecque', 'Cuisine arménienne', 'Paella', 'Halloumi grillé'],
  'du-monde': ['Curry indien', 'Éthiopien', 'Couscous', 'Mafé', 'Burrito', 'Tacos', 'Parrilla argentine', 'Poké bowl', 'Dahl de lentilles', 'Chili con carne', 'Quesadillas', 'Fajitas', 'Burritos maison'],
  végétarien: ['Végétarien', 'Salade composée', 'Halloumi grillé', 'Burrata', 'Poké bowl', 'Dahl de lentilles', 'Wok de légumes', 'Quiche maison', 'Omelette gourmande', 'Soupe & tartines', 'Poké bowl maison'],
}

export function getFoodBudget(food: Food): FoodBudget {
  if (premiumNames.has(food.name)) return '€€€'
  if (fastFoodNames.has(food.name) || dessertNames.has(food.name) || homeFriendlyNames.has(food.name)) return '€'
  return '€€'
}

export function filterFoods(kinds: FoodKind[], styles: FoodStyle[], dateMode = false, homeMode = false, restaurantMode = false, moments: FoodMoment[] = []) {
  return foods.filter((food) => {
    const kind: FoodKind = dessertNames.has(food.name) ? 'dessert' : fastFoodNames.has(food.name) ? 'fast-food' : 'restaurant'
    const matchesKind = kinds.length === 0 || kinds.includes(kind)
    const matchesStyle = styles.length === 0 || styles.some((style) => styleNames[style].includes(food.name))
    const matchesPlace = (homeMode && restaurantMode) || (!homeMode && !restaurantMode) || (homeMode ? homeFriendlyNames.has(food.name) : !homeFriendlyNames.has(food.name))
    const matchesMoment = moments.length === 0 || moments.some((moment) => {
      if (moment === 'apero') return aperoNames.has(food.name)
      if (moment === 'grignoter') return snackNames.has(food.name)
      if (moment === 'brunch') return brunchNames.has(food.name)
      return !dessertNames.has(food.name) && !aperoNames.has(food.name) && !snackNames.has(food.name)
    })
    return matchesKind && matchesStyle && matchesPlace && matchesMoment && (!dateMode || dateFriendlyNames.has(food.name))
  })
}
