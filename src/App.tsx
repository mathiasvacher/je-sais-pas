import { useMemo, useState } from 'react'
import './App.css'

type Food = {
  name: string
  emoji: string
  color: string
  caption: string
}

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
]

function shuffle(list: Food[]) {
  return [...list].sort(() => Math.random() - 0.5)
}

function pickChoices(excluded: Food[] = []) {
  const pool = foods.filter((food) => !excluded.includes(food))
  return shuffle(pool).slice(0, 3)
}

function App() {
  const initialChoices = useMemo(() => pickChoices(), [])
  const [options, setOptions] = useState(initialChoices)
  const [choices, setChoices] = useState<Food[]>([])

  const choiceInSeries = (choices.length % 5) + 1
  const series = Math.floor(choices.length / 5) + 1

  function choose(food: Food) {
    setChoices((current) => [...current, food])
    setOptions(pickChoices(options))
  }

  function skip() {
    setOptions(pickChoices(options))
  }

  function restart() {
    setOptions(pickChoices())
    setChoices([])
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={restart} aria-label="Recommencer">
          <span className="brand-mark">?</span>
          <span>je sais pas</span>
        </a>
        <div className="love-note"><span>♡</span> Le dîner, sans prise de tête</div>
      </header>

      <section id="top" className="game" aria-live="polite">
        <>
          <div className="eyebrow-row">
            <span className="eyebrow">LE GRAND CHOIX DU SOIR</span>
            <span className="round">série {series} · choix {choiceInSeries} / 5</span>
          </div>
          <div className="progress" aria-label={`Choix ${choiceInSeries} sur 5`}>
            <span style={{ width: `${((choiceInSeries - 1) / 5) * 100}%` }} />
          </div>
          <h1>Qu’est-ce qui te ferait<br /><em>vraiment</em> plaisir ?</h1>
          <p className="intro">Choisis instinctivement. On peut continuer autant que tu veux.</p>

          <div className="choices">
            {options.map((food) => (
              <button key={food.name} className={`food-card ${food.color}`} onClick={() => choose(food)}>
                <span className="food-emoji" role="img" aria-label={food.name}>{food.emoji}</span>
                <span className="food-copy"><span className="food-name">{food.name}</span><span className="food-caption">{food.caption}</span></span>
                <span className="choose" aria-hidden="true">→</span>
              </button>
            ))}
          </div>
          <button className="skip" onClick={skip}>Aucun des trois ne me donne envie <span>↻</span></button>
        </>
      </section>

      <footer>
        <span>Fait avec faim <b>♥</b></span>
        <span>Tu peux faire confiance à ton premier réflexe.</span>
      </footer>
    </main>
  )
}

export default App
