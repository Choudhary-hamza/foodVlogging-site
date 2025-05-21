import MealItem from './meal-item';
import styling from "./mealsGrid.module.css"
export default function MealsGrid({meals}){
    return (
        <ul className={styling.ul}>
            {meals.map((meal)=>{
                return <li key={meal.id} className={styling.li}>
                    <MealItem {...meal}/>
                </li>
            })}
        </ul>
    )
}