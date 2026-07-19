import type { Food } from '../data/foods'

type WinnerScreenProps = { winner: Food; mapsUrl: string; onContinue: () => void; onOpenCatalog: () => void }

export function WinnerScreen({ winner, mapsUrl, onContinue, onOpenCatalog }: WinnerScreenProps) {
  return <div className="result">
    <span className="eyebrow">LE VERDICT EST TOMBÉ</span>
    <div className={`winner-icon ${winner.color}`} role="img" aria-label={winner.name}>{winner.emoji}</div>
    <p className="result-kicker">Ce soir, on part sur</p>
    <h1>{winner.name} !</h1>
    <p className="intro">C’est le choix qui a survécu à toutes les hésitations.</p>
    <a className="maps-link" href={mapsUrl} target="_blank" rel="noreferrer"><span>⌖</span> Trouver autour de moi</a>
    <button className="restart" onClick={onContinue}><span>↻</span> On continue de chercher</button>
    <button className="catalog-trigger result-catalog" onClick={onOpenCatalog}>Voir toutes les idées <span>↗</span></button>
  </div>
}
