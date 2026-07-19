import type { FoodKind, FoodMoment, FoodStyle } from '../data/foods'

type FiltersModalProps = {
  dateMode: boolean
  homeMode: boolean
  restaurantMode: boolean
  selectedKinds: FoodKind[]
  selectedMoments: FoodMoment[]
  selectedStyles: FoodStyle[]
  onClose: () => void
  onClear: () => void
  onToggleDateMode: () => void
  onToggleHomeMode: () => void
  onToggleRestaurantMode: () => void
  onToggleKind: (kind: FoodKind) => void
  onToggleMoment: (moment: FoodMoment) => void
  onToggleStyle: (style: FoodStyle) => void
}

const kinds: Array<[FoodKind, string]> = [['restaurant', '🍽️ Restaurants'], ['fast-food', '🍟 Fast food'], ['dessert', '🍰 Desserts']]
const styles: Array<[FoodStyle, string]> = [['français', 'Français & lyonnais'], ['asiatique', 'Asiatique'], ['italien', 'Italien'], ['méditerranéen', 'Méditerranéen'], ['du-monde', 'Cuisine du monde'], ['végétarien', 'Végé']]
const moments: Array<[FoodMoment, string]> = [['apero', '🍷 Apéro'], ['grignoter', '🍟 Grignoter'], ['brunch', '🥞 Brunch'], ['repas', '🍽️ Repas complet']]

export function FiltersModal({ dateMode, homeMode, restaurantMode, selectedKinds, selectedMoments, selectedStyles, onClose, onClear, onToggleDateMode, onToggleHomeMode, onToggleRestaurantMode, onToggleKind, onToggleMoment, onToggleStyle }: FiltersModalProps) {
  return <div className="modal-backdrop" onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <section className="filters-modal" role="dialog" aria-modal="true" aria-labelledby="filters-title" onClick={(event) => event.stopPropagation()}>
      <div className="modal-head"><div><span className="eyebrow">PERSONNALISE LE JEU</span><h2 id="filters-title">Qu’est-ce qui te tente ?</h2></div><button type="button" className="modal-close" onClick={onClose} aria-label="Fermer">×</button></div>
      <div className="filter-section"><p>Type de sortie</p><div className="filter-chips">{kinds.map(([kind, label]) => <button type="button" key={kind} className={selectedKinds.includes(kind) ? 'active' : ''} onClick={() => onToggleKind(kind)}>{label}</button>)}</div></div>
      <div className="date-mode"><div><span>♥</span><strong>Mode date</strong><small>Des idées parfaites pour une sortie à deux.</small></div><button type="button" className={dateMode ? 'active' : ''} onClick={onToggleDateMode} aria-pressed={dateMode}>{dateMode ? 'Activé' : 'Activer'}</button></div>
      <div className="home-mode"><div><span>⌂</span><strong>Dîner à la maison</strong><small>Des idées faciles à préparer ou commander chez soi.</small></div><button type="button" className={homeMode ? 'active' : ''} onClick={onToggleHomeMode} aria-pressed={homeMode}>{homeMode ? 'Activé' : 'Activer'}</button></div>
      <div className="restaurant-mode"><div><span>⌖</span><strong>Au restaurant</strong><small>Des idées pour sortir manger, sans cuisine à faire.</small></div><button type="button" className={restaurantMode ? 'active' : ''} onClick={onToggleRestaurantMode} aria-pressed={restaurantMode}>{restaurantMode ? 'Activé' : 'Activer'}</button></div>
      <div className="filter-section"><p>Moment de la sortie</p><div className="filter-chips">{moments.map(([moment, label]) => <button type="button" key={moment} className={selectedMoments.includes(moment) ? 'active' : ''} onClick={() => onToggleMoment(moment)}>{label}</button>)}</div></div>
      <div className="filter-section"><p>Envie du moment</p><div className="filter-chips">{styles.map(([style, label]) => <button type="button" key={style} className={selectedStyles.includes(style) ? 'active' : ''} onClick={() => onToggleStyle(style)}>{label}</button>)}</div></div>
      <div className="modal-actions"><button type="button" className="clear-filters" onClick={onClear}>Tout effacer</button><button type="button" className="apply-filters" onClick={onClose}>Voir les choix <span>→</span></button></div>
    </section>
  </div>
}
