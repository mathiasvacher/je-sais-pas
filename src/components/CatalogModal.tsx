import type { Food } from '../data/foods'

type CatalogModalProps = { foods: Food[]; onClose: () => void }

export function CatalogModal({ foods, onClose }: CatalogModalProps) {
  return <div className="modal-backdrop" onClick={onClose}>
    <section className="catalog-modal" role="dialog" aria-modal="true" aria-labelledby="catalog-title" onClick={(event) => event.stopPropagation()}>
      <div className="modal-head"><div><span className="eyebrow">LA LISTE COMPLÈTE</span><h2 id="catalog-title">{foods.length} idées à tirer</h2></div><button className="modal-close" onClick={onClose} aria-label="Fermer">×</button></div>
      <p className="catalog-intro">Voici toutes les options possibles avec les filtres actuels.</p>
      <div className="catalog-list">{[...foods].sort((a, b) => a.name.localeCompare(b.name, 'fr')).map((food) => <div className={`catalog-item ${food.color}`} key={food.name}><span role="img" aria-label="">{food.emoji}</span><span>{food.name}</span></div>)}</div>
    </section>
  </div>
}
