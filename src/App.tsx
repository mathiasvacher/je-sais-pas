import { useMemo, useState } from 'react'
import './App.css'

type Food = {
  name: string
  emoji: string
  color: string
  caption: string
}

type FoodKind = 'restaurant' | 'fast-food' | 'dessert'
type FoodStyle = 'français' | 'asiatique' | 'italien' | 'méditerranéen' | 'du-monde' | 'végétarien'

const SERIES_LENGTH = 8

const foods: Food[] = [
  { name: 'Bouchon lyonnais', emoji: '🍲', color: 'peach', caption: 'Quenelle, gratin ou tablier de sapeur.' },
  { name: 'Sushi', emoji: '🍣', color: 'pink', caption: 'Frais, délicat, très joli.' },
  { name: 'Burger', emoji: '🍔', color: 'yellow', caption: 'La valeur sûre, sans discussion.' },
  { name: 'Ramen', emoji: '🍜', color: 'lavender', caption: 'Un grand bol réconfortant.' },
  { name: 'Libanais', emoji: '🧆', color: 'mint', caption: 'À partager, avec beaucoup de mezze.' },
  { name: 'Curry indien', emoji: '🍛', color: 'coral', caption: 'Parfumé, épicé juste comme il faut.' },
  { name: 'Pizza napolitaine', emoji: '🍕', color: 'blue', caption: 'Bords gonflés et mozza fondante.' },
  { name: 'Coréen', emoji: '🍚', color: 'lilac', caption: 'Bibimbap, poulet frit ou kimchi.' },
  { name: 'Tacos', emoji: '🌮', color: 'peach', caption: 'Croustillant, généreux, solaire.' },
  { name: 'Pasta fresca', emoji: '🍝', color: 'yellow', caption: 'Des pâtes fraîches et une bonne sauce.' },
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
  { name: 'Barbecue coréen', emoji: '🥩', color: 'pink', caption: 'On grille tout directement à table.' },
  { name: 'Cuisine grecque', emoji: '🫓', color: 'lilac', caption: 'Feta, pita, tzatziki et soleil.' },
  { name: 'Fried chicken', emoji: '🍗', color: 'yellow', caption: 'Ultra croustillant, sauce bien choisie.' },
  { name: 'Gyozas', emoji: '🥟', color: 'peach', caption: 'La bonne excuse pour en commander trop.' },
  { name: 'Parrilla argentine', emoji: '🥩', color: 'coral', caption: 'Viande grillée, chimichurri, bonheur.' },
  { name: 'Glacier & desserts', emoji: '🍨', color: 'pink', caption: 'Parce qu’un dîner sucré, ça arrive.' },
  { name: 'Poulet rôti', emoji: '🍗', color: 'yellow', caption: 'Doré, croustillant, avec des frites.' },
  { name: 'Poulet grillé', emoji: '🍗', color: 'mint', caption: 'Mariné, grillé à point, avec de bonnes sauces.' },
  { name: 'Poulet braisé', emoji: '🍗', color: 'coral', caption: 'Mariné, généreux et bien relevé.' },
  { name: 'Mafé', emoji: '🥜', color: 'peach', caption: 'Onctueux, parfumé, complètement addictif.' },
  { name: 'Bao buns', emoji: '🥟', color: 'lilac', caption: 'Tout moelleux avec une garniture surprise.' },
  { name: 'Fondue savoyarde', emoji: '🫕', color: 'yellow', caption: 'Du fromage fondu. Que demander de plus ?' },
  { name: 'Cuisine arménienne', emoji: '🍢', color: 'mint', caption: 'Grillades, herbes fraîches et pain lavash.' },
  { name: 'Burrito', emoji: '🌯', color: 'coral', caption: 'Un repas complet bien roulé.' },
  { name: 'Hot-dog gourmet', emoji: '🌭', color: 'pink', caption: 'Simple, drôle et bien chargé.' },
  { name: 'Ravioles', emoji: '🥟', color: 'blue', caption: 'Un petit classique de la région.' },
  { name: 'Paella', emoji: '🥘', color: 'yellow', caption: 'Safran, soleil et tout ce qu’on aime.' },
  { name: 'Salade composée', emoji: '🥗', color: 'mint', caption: 'Légère, croquante, mais pas triste.' },
  { name: 'Dumplings', emoji: '🥟', color: 'lilac', caption: 'Vapeur, poêle ou frits : tous oui.' },
  { name: 'Smash burger', emoji: '🍔', color: 'peach', caption: 'Steak bien caramélisé, cheddar qui coule.' },
  { name: 'Pinsa romana', emoji: '🍕', color: 'blue', caption: 'Une cousine légère et croustillante de la pizza.' },
  { name: 'Pasta à la truffe', emoji: '🍝', color: 'lilac', caption: 'Le petit extra qui rend le dîner chic.' },
  { name: 'Bagel', emoji: '🥯', color: 'yellow', caption: 'Saumon, pastrami ou veggie : toujours efficace.' },
  { name: 'Korean corn dog', emoji: '🌭', color: 'pink', caption: 'Fromage qui file et panure croustillante.' },
  { name: 'Focaccia garnie', emoji: '🥪', color: 'coral', caption: 'Moelleuse, généreuse et parfaite à partager.' },
  { name: 'Burrata', emoji: '🧀', color: 'mint', caption: 'Tomates, pesto, pain grillé : simple et parfait.' },
  { name: 'Loaded fries', emoji: '🍟', color: 'yellow', caption: 'Des frites, des toppings, aucun regret.' },
  { name: 'Katsu sando', emoji: '🥪', color: 'blue', caption: 'Le sandwich japonais ultra moelleux.' },
  { name: 'Chirashi', emoji: '🍣', color: 'lilac', caption: 'Le sushi bowl frais et très généreux.' },
  { name: 'Halloumi grillé', emoji: '🧀', color: 'peach', caption: 'Doré, salé, avec une belle salade.' },
  { name: 'Planche à partager', emoji: '🧀', color: 'coral', caption: 'Fromages, charcuterie, et on commande après.' },
  { name: 'McDonald’s', emoji: '🍔', color: 'yellow', caption: 'Un menu simple, rapide et régressif.' },
  { name: 'KFC', emoji: '🍗', color: 'coral', caption: 'Poulet frit, tenders et bucket à partager.' },
  { name: 'Burger King', emoji: '🍔', color: 'peach', caption: 'Un Whopper et des onion rings.' },
  { name: 'Ninkasi', emoji: '🍔', color: 'lilac', caption: 'Burger, bière lyonnaise et bonne ambiance.' },
  { name: 'O’Tacos', emoji: '🌯', color: 'mint', caption: 'Une sauce fromagère, et c’est parti.' },
  { name: 'Subway', emoji: '🥪', color: 'blue', caption: 'Ton sandwich exactement comme tu le veux.' },
  { name: 'Glace artisanale', emoji: '🍦', color: 'pink', caption: 'Deux parfums ? Allez, trois.' },
  { name: 'Tiramisu', emoji: '🍰', color: 'peach', caption: 'Café, mascarpone, bonheur immédiat.' },
  { name: 'Cookies chauds', emoji: '🍪', color: 'yellow', caption: 'Cœur coulant obligatoire.' },
  { name: 'Bubble tea', emoji: '🧋', color: 'lilac', caption: 'Une douceur à boire, avec plein de perles.' },
  { name: 'Praluline', emoji: '🥐', color: 'pink', caption: 'La brioche rose iconique de la région.' },
  { name: 'Cocktails & tapas', emoji: '🍸', color: 'coral', caption: 'Quelques verres, plein de petites assiettes.' },
  { name: 'Restaurant gastronomique', emoji: '🍽️', color: 'lilac', caption: 'Pour marquer le coup, tout simplement.' },
  { name: 'Raclette à deux', emoji: '🧀', color: 'yellow', caption: 'Du fromage fondu et aucune mauvaise idée.' },
]

const fastFoodNames = new Set(['McDonald’s', 'KFC', 'Burger King', 'O’Tacos', 'Subway', 'Smash burger', 'Fried chicken', 'Korean corn dog', 'Loaded fries', 'Hot-dog gourmet'])
const dessertNames = new Set(['Glacier & desserts', 'Glace artisanale', 'Tiramisu', 'Cookies chauds', 'Bubble tea', 'Praluline'])
const dateFriendlyNames = new Set(['Bouchon lyonnais', 'Libanais', 'Sushi', 'Pizza napolitaine', 'Pasta à la truffe', 'Tapas', 'Cuisine grecque', 'Restaurant gastronomique', 'Cocktails & tapas', 'Raclette à deux', 'Burrata', 'Pinsa romana', 'Planche à partager', 'Fondue savoyarde', 'Glace artisanale', 'Tiramisu'])
const styleNames: Record<FoodStyle, string[]> = {
  français: ['Bouchon lyonnais', 'Bistrot français', 'Crêperie', 'Ravioles', 'Fondue savoyarde', 'Poulet rôti', 'Poulet grillé', 'Poulet braisé', 'Praluline'],
  asiatique: ['Sushi', 'Ramen', 'Coréen', 'Vietnamien', 'Thaï', 'Barbecue coréen', 'Gyozas', 'Bao buns', 'Katsu sando', 'Chirashi', 'Dumplings', 'Korean corn dog', 'Bubble tea'],
  italien: ['Pizza napolitaine', 'Pasta fresca', 'Pinsa romana', 'Pasta à la truffe', 'Focaccia garnie', 'Burrata', 'Tiramisu'],
  méditerranéen: ['Libanais', 'Tapas', 'Cuisine grecque', 'Cuisine arménienne', 'Paella', 'Halloumi grillé'],
  'du-monde': ['Curry indien', 'Éthiopien', 'Couscous', 'Mafé', 'Burrito', 'Tacos', 'Parrilla argentine', 'Poké bowl'],
  végétarien: ['Végétarien', 'Salade composée', 'Halloumi grillé', 'Burrata', 'Poké bowl'],
}

function shuffle(list: Food[]) {
  return [...list].sort(() => Math.random() - 0.5)
}

function pickChoices(foodList: Food[], excluded: Food[] = [], count = 3) {
  const pool = foodList.filter((food) => !excluded.includes(food))
  return shuffle(pool.length > 0 ? pool : foodList).slice(0, count)
}

function keepChoice(food: Food, index: number, previousOptions: Food[], foodList: Food[]) {
  const replacements = pickChoices(foodList.filter((item) => item !== food), previousOptions.filter((item) => item !== food), 2)
  let replacementIndex = 0

  return previousOptions.map((_, optionIndex) => {
    if (optionIndex === index) return food
    const replacement = replacements[replacementIndex]
    replacementIndex += 1
    return replacement
  })
}

function filterFoods(kinds: FoodKind[], styles: FoodStyle[], dateMode = false) {
  return foods.filter((food) => {
    const kind: FoodKind = dessertNames.has(food.name) ? 'dessert' : fastFoodNames.has(food.name) ? 'fast-food' : 'restaurant'
    const matchesKind = kinds.length === 0 || kinds.includes(kind)
    const matchesStyle = styles.length === 0 || styles.some((style) => styleNames[style].includes(food.name))
    return matchesKind && matchesStyle && (!dateMode || dateFriendlyNames.has(food.name))
  })
}

function App() {
  const [selectedKinds, setSelectedKinds] = useState<FoodKind[]>([])
  const [selectedStyles, setSelectedStyles] = useState<FoodStyle[]>([])
  const [dateMode, setDateMode] = useState(false)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [catalogOpen, setCatalogOpen] = useState(false)
  const filteredFoods = useMemo(() => filterFoods(selectedKinds, selectedStyles, dateMode), [selectedKinds, selectedStyles, dateMode])
  const initialChoices = useMemo(() => pickChoices(foods), [])
  const [options, setOptions] = useState(initialChoices)
  const [choices, setChoices] = useState<Food[]>([])
  const [winner, setWinner] = useState<Food | null>(null)
  const activeFilterCount = selectedKinds.length + selectedStyles.length

  const choiceInSeries = choices.length + 1

  function choose(food: Food, index: number) {
    const isFinalChoice = choices.length === SERIES_LENGTH - 1
    setChoices((current) => [...current, food])
    setOptions(keepChoice(food, index, options, filteredFoods))
    if (isFinalChoice) setWinner(food)
  }

  function skip() {
    setOptions(pickChoices(filteredFoods, options))
  }

  function restart() {
    setOptions(pickChoices(filteredFoods))
    setChoices([])
    setWinner(null)
  }

  function continueSearching() {
    if (!winner) return
    setOptions([winner, ...pickChoices(filteredFoods, [winner], 2)])
    setChoices([])
    setWinner(null)
  }

  function surprise() {
    const surpriseWinner = pickChoices(filteredFoods, [], 1)[0]
    if (surpriseWinner) setWinner(surpriseWinner)
  }

  function resetGame(foodList: Food[]) {
    setOptions(pickChoices(foodList))
    setChoices([])
    setWinner(null)
  }

  function toggleKind(kind: FoodKind) {
    const nextKinds = selectedKinds.includes(kind) ? selectedKinds.filter((item) => item !== kind) : [...selectedKinds, kind]
    setSelectedKinds(nextKinds)
    resetGame(filterFoods(nextKinds, selectedStyles, dateMode))
  }

  function toggleStyle(style: FoodStyle) {
    const nextStyles = selectedStyles.includes(style) ? selectedStyles.filter((item) => item !== style) : [...selectedStyles, style]
    setSelectedStyles(nextStyles)
    resetGame(filterFoods(selectedKinds, nextStyles, dateMode))
  }

  function toggleDateMode() {
    const nextDateMode = !dateMode
    setDateMode(nextDateMode)
    resetGame(filterFoods(selectedKinds, selectedStyles, nextDateMode))
  }

  function clearFilters() {
    setSelectedKinds([])
    setSelectedStyles([])
    setDateMode(false)
    resetGame(foods)
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={restart} aria-label="Recommencer">
          <span className="brand-mark">?</span>
          <span>je sais pas</span>
        </a>
        <div className="love-note"><span>♡</span> Le dîner, sans prise de tête</div>
        <button className="filters-trigger" onClick={() => setFiltersOpen(true)} aria-haspopup="dialog">
          <span>☷</span> Filtres{activeFilterCount + (dateMode ? 1 : 0) > 0 && <b>{activeFilterCount + (dateMode ? 1 : 0)}</b>}
        </button>
      </header>

      <section id="top" className="game" aria-live="polite">
        {!winner ? <>
          <div className="eyebrow-row">
            <span className="eyebrow">LE GRAND CHOIX DU SOIR</span>
            <span className="round">choix {choiceInSeries} / {SERIES_LENGTH}</span>
          </div>
          <div className="progress" aria-label={`Choix ${choiceInSeries} sur ${SERIES_LENGTH}`}>
            <span style={{ width: `${((choiceInSeries - 1) / SERIES_LENGTH) * 100}%` }} />
          </div>
          <h1>Qu’est-ce qui te ferait<br /><em>vraiment</em> plaisir ?</h1>
          <p className="intro">Ton choix reste en place, les autres changent autour.</p>

          {options.length > 0 ? <div className="choices">
            {options.map((food, index) => (
              <button key={food.name} className={`food-card ${food.color}`} onClick={() => choose(food, index)}>
                <span className="food-emoji" role="img" aria-label={food.name}>{food.emoji}</span>
                <span className="food-copy"><span className="food-name">{food.name}</span><span className="food-caption">{food.caption}</span></span>
                <span className="choose" aria-hidden="true">→</span>
              </button>
            ))}
          </div> : <div className="no-results"><span>🍽️</span><h2>Pas assez d’idées pour ce mélange.</h2><button onClick={clearFilters}>Réinitialiser les filtres</button></div>}
          {options.length > 0 && <div className="game-actions"><button className="surprise" onClick={surprise}>✦ Surprise-moi</button><button className="skip" onClick={skip}>Aucun des trois ne me donne envie <span>↻</span></button><button className="catalog-trigger" onClick={() => setCatalogOpen(true)}>Voir les {filteredFoods.length} idées possibles <span>↗</span></button></div>}
        </> : (
          <div className="result">
            <span className="eyebrow">LE VERDICT EST TOMBÉ</span>
            <div className={`winner-icon ${winner.color}`} role="img" aria-label={winner.name}>{winner.emoji}</div>
            <p className="result-kicker">Ce soir, on part sur</p>
            <h1>{winner.name} !</h1>
            <p className="intro">C’est le choix qui a survécu à toutes les hésitations.</p>
            <button className="restart" onClick={continueSearching}><span>↻</span> On continue de chercher</button>
            <button className="catalog-trigger result-catalog" onClick={() => setCatalogOpen(true)}>Voir toutes les idées <span>↗</span></button>
          </div>
        )}
      </section>

      <footer>
        <span>Fait avec faim <b>♥</b></span>
        <span>Tu peux faire confiance à ton premier réflexe.</span>
      </footer>

      {filtersOpen && <div className="modal-backdrop" onClick={() => setFiltersOpen(false)}>
        <section className="filters-modal" role="dialog" aria-modal="true" aria-labelledby="filters-title" onClick={(event) => event.stopPropagation()}>
          <div className="modal-head"><div><span className="eyebrow">PERSONNALISE LE JEU</span><h2 id="filters-title">Qu’est-ce qui te tente ?</h2></div><button className="modal-close" onClick={() => setFiltersOpen(false)} aria-label="Fermer">×</button></div>
          <div className="filter-section"><p>Type de sortie</p><div className="filter-chips">{([['restaurant', '🍽️ Restaurants'], ['fast-food', '🍟 Fast food'], ['dessert', '🍰 Desserts']] as const).map(([kind, label]) => <button key={kind} className={selectedKinds.includes(kind) ? 'active' : ''} onClick={() => toggleKind(kind)}>{label}</button>)}</div></div>
          <div className="date-mode"><div><span>♥</span><strong>Mode date</strong><small>Des idées parfaites pour une sortie à deux.</small></div><button className={dateMode ? 'active' : ''} onClick={toggleDateMode} aria-pressed={dateMode}>{dateMode ? 'Activé' : 'Activer'}</button></div>
          <div className="filter-section"><p>Envie du moment</p><div className="filter-chips">{([['français', 'Français & lyonnais'], ['asiatique', 'Asiatique'], ['italien', 'Italien'], ['méditerranéen', 'Méditerranéen'], ['du-monde', 'Cuisine du monde'], ['végétarien', 'Végé']] as const).map(([style, label]) => <button key={style} className={selectedStyles.includes(style) ? 'active' : ''} onClick={() => toggleStyle(style)}>{label}</button>)}</div></div>
          <div className="modal-actions"><button className="clear-filters" onClick={clearFilters}>Tout effacer</button><button className="apply-filters" onClick={() => setFiltersOpen(false)}>Voir les choix <span>→</span></button></div>
        </section>
      </div>}

      {catalogOpen && <div className="modal-backdrop" onClick={() => setCatalogOpen(false)}>
        <section className="catalog-modal" role="dialog" aria-modal="true" aria-labelledby="catalog-title" onClick={(event) => event.stopPropagation()}>
          <div className="modal-head"><div><span className="eyebrow">LA LISTE COMPLÈTE</span><h2 id="catalog-title">{filteredFoods.length} idées à tirer</h2></div><button className="modal-close" onClick={() => setCatalogOpen(false)} aria-label="Fermer">×</button></div>
          <p className="catalog-intro">Voici toutes les options possibles avec les filtres actuels.</p>
          <div className="catalog-list">{[...filteredFoods].sort((a, b) => a.name.localeCompare(b.name, 'fr')).map((food) => <div className={`catalog-item ${food.color}`} key={food.name}><span role="img" aria-label="">{food.emoji}</span><span>{food.name}</span></div>)}</div>
        </section>
      </div>}
    </main>
  )
}

export default App
