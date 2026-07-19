import { useMemo, useState } from 'react'
import { CatalogModal } from './components/CatalogModal'
import { ChoiceCard } from './components/ChoiceCard'
import { FiltersModal } from './components/FiltersModal'
import { WinnerScreen } from './components/WinnerScreen'
import { filterFoods, foods, SERIES_LENGTH, type Food, type FoodKind, type FoodMoment, type FoodStyle } from './data/foods'
import { keepChoice, pickChoices } from './lib/choices'
import { createGoogleMapsSearchUrl } from './lib/maps'
import './App.css'

function App() {
  const [selectedKinds, setSelectedKinds] = useState<FoodKind[]>([])
  const [selectedMoments, setSelectedMoments] = useState<FoodMoment[]>([])
  const [selectedStyles, setSelectedStyles] = useState<FoodStyle[]>([])
  const [dateMode, setDateMode] = useState(false)
  const [homeMode, setHomeMode] = useState(false)
  const [restaurantMode, setRestaurantMode] = useState(false)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [catalogOpen, setCatalogOpen] = useState(false)
  const filteredFoods = useMemo(() => filterFoods(selectedKinds, selectedStyles, dateMode, homeMode, restaurantMode, selectedMoments), [selectedKinds, selectedStyles, dateMode, homeMode, restaurantMode, selectedMoments])
  const [options, setOptions] = useState(() => pickChoices(foods))
  const [choices, setChoices] = useState<Food[]>([])
  const [winner, setWinner] = useState<Food | null>(null)

  const choiceInSeries = choices.length + 1
  const activeFilterCount = selectedKinds.length + selectedStyles.length + selectedMoments.length + Number(dateMode) + Number(homeMode) + Number(restaurantMode)

  function resetGame(foodList = filteredFoods) {
    setOptions(pickChoices(foodList))
    setChoices([])
    setWinner(null)
  }

  function choose(food: Food, index: number) {
    setChoices((current) => [...current, food])
    setOptions(keepChoice(food, index, options, filteredFoods))
    if (choices.length === SERIES_LENGTH - 1) setWinner(food)
  }

  function skip() { setOptions(pickChoices(filteredFoods, options)) }

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

  function toggleKind(kind: FoodKind) {
    const nextKinds = selectedKinds.includes(kind) ? selectedKinds.filter((item) => item !== kind) : [...selectedKinds, kind]
    setSelectedKinds(nextKinds)
    resetGame(filterFoods(nextKinds, selectedStyles, dateMode, homeMode, restaurantMode, selectedMoments))
  }

  function toggleStyle(style: FoodStyle) {
    const nextStyles = selectedStyles.includes(style) ? selectedStyles.filter((item) => item !== style) : [...selectedStyles, style]
    setSelectedStyles(nextStyles)
    resetGame(filterFoods(selectedKinds, nextStyles, dateMode, homeMode, restaurantMode, selectedMoments))
  }

  function toggleDateMode() {
    const nextDateMode = !dateMode
    setDateMode(nextDateMode)
    resetGame(filterFoods(selectedKinds, selectedStyles, nextDateMode, homeMode, restaurantMode, selectedMoments))
  }

  function toggleHomeMode() {
    const nextHomeMode = !homeMode
    setHomeMode(nextHomeMode)
    resetGame(filterFoods(selectedKinds, selectedStyles, dateMode, nextHomeMode, restaurantMode, selectedMoments))
  }

  function toggleRestaurantMode() {
    const nextRestaurantMode = !restaurantMode
    setRestaurantMode(nextRestaurantMode)
    resetGame(filterFoods(selectedKinds, selectedStyles, dateMode, homeMode, nextRestaurantMode, selectedMoments))
  }

  function toggleMoment(moment: FoodMoment) {
    const nextMoments = selectedMoments.includes(moment) ? selectedMoments.filter((item) => item !== moment) : [...selectedMoments, moment]
    setSelectedMoments(nextMoments)
    resetGame(filterFoods(selectedKinds, selectedStyles, dateMode, homeMode, restaurantMode, nextMoments))
  }

  function clearFilters() {
    setSelectedKinds([])
    setSelectedMoments([])
    setSelectedStyles([])
    setDateMode(false)
    setHomeMode(false)
    setRestaurantMode(false)
    resetGame(foods)
  }

  return <main className={`app-shell${dateMode ? ' date-theme' : ''}${homeMode ? ' home-theme' : ''}${restaurantMode && !homeMode ? ' restaurant-theme' : ''}${dateMode && homeMode ? ' date-home-theme' : ''}`}>
    <header className="topbar">
      <a className="brand" href="#top" onClick={clearFilters} aria-label="Recommencer"><span className="brand-mark">?</span><span>je sais pas</span></a>
      <div className="love-note"><span>♡</span> Le dîner, sans prise de tête</div>
      <div className="topbar-actions">
        <button type="button" className={`date-trigger${dateMode ? ' active' : ''}`} onClick={toggleDateMode} aria-pressed={dateMode}>♥ <span>Mode date</span></button>
        <button type="button" className={`home-trigger${homeMode ? ' active' : ''}`} onClick={toggleHomeMode} aria-pressed={homeMode}>⌂ <span>À la maison</span></button>
        <button type="button" className={`restaurant-trigger${restaurantMode ? ' active' : ''}`} onClick={toggleRestaurantMode} aria-pressed={restaurantMode}>🍽️ <span>Restaurant</span></button>
        <button type="button" className="filters-trigger" onClick={() => setFiltersOpen(true)} aria-haspopup="dialog"><span>☷</span><span className="filter-label">Filtres</span>{activeFilterCount > 0 && <b>{activeFilterCount}</b>}</button>
      </div>
    </header>

    <section id="top" className="game" aria-live="polite">
      {winner ? <WinnerScreen winner={winner} mapsUrl={createGoogleMapsSearchUrl(winner)} onContinue={continueSearching} onOpenCatalog={() => setCatalogOpen(true)} /> : <>
        <div className="eyebrow-row"><span className="eyebrow">LE GRAND CHOIX DU SOIR</span><span className="round">choix {choiceInSeries} / {SERIES_LENGTH}</span></div>
        <div className="progress" aria-label={`Choix ${choiceInSeries} sur ${SERIES_LENGTH}`}><span style={{ width: `${((choiceInSeries - 1) / SERIES_LENGTH) * 100}%` }} /></div>
        <h1>Qu’est-ce qui te ferait<br /><em>vraiment</em> plaisir ?</h1>
        <p className="intro">Ton choix reste en place, les autres changent autour.</p>
        {options.length > 0 ? <>
          <div className="choices">{options.map((food, index) => <ChoiceCard key={food.name} food={food} onChoose={() => choose(food, index)} />)}</div>
          <div className="game-actions"><button className="surprise" onClick={surprise}>✦ Surprise-moi</button><button className="skip" onClick={skip}>Aucun des trois ne me donne envie <span>↻</span></button><button className="catalog-trigger" onClick={() => setCatalogOpen(true)}>Voir les {filteredFoods.length} idées possibles <span>↗</span></button></div>
        </> : <div className="no-results"><span>🍽️</span><h2>Pas assez d’idées pour ce mélange.</h2><button onClick={clearFilters}>Réinitialiser les filtres</button></div>}
      </>}
    </section>

    <footer><span>Fait avec faim <b>♥</b></span><span>Tu peux faire confiance à ton premier réflexe.</span></footer>
    {filtersOpen && <FiltersModal dateMode={dateMode} homeMode={homeMode} restaurantMode={restaurantMode} selectedKinds={selectedKinds} selectedMoments={selectedMoments} selectedStyles={selectedStyles} onClose={() => setFiltersOpen(false)} onClear={clearFilters} onToggleDateMode={() => { toggleDateMode(); setFiltersOpen(true) }} onToggleHomeMode={() => { toggleHomeMode(); setFiltersOpen(true) }} onToggleRestaurantMode={() => { toggleRestaurantMode(); setFiltersOpen(true) }} onToggleKind={toggleKind} onToggleMoment={toggleMoment} onToggleStyle={toggleStyle} />}
    {catalogOpen && <CatalogModal foods={filteredFoods} onClose={() => setCatalogOpen(false)} />}
  </main>
}

export default App
