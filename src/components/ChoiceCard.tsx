import { getFoodBudget, type Food } from '../data/foods'

type ChoiceCardProps = { food: Food; onChoose: () => void }

export function ChoiceCard({ food, onChoose }: ChoiceCardProps) {
  return <button className={`food-card ${food.color}`} onClick={onChoose}>
    <span className="food-emoji" role="img" aria-label={food.name}>{food.emoji}</span>
    <span className="food-copy"><span className="food-name">{food.name}</span><span className="food-caption">{food.caption}</span><span className="food-budget" aria-label={`Budget ${getFoodBudget(food)}`}>{getFoodBudget(food)}</span></span>
    <span className="choose" aria-hidden="true">→</span>
  </button>
}
