import IngredientsListItem from './IngredientsListItem';
import { IngredientsListWrapper } from './styles'



const IngredientsList = ({ ingredientsList }) => {
    return (
        <IngredientsListWrapper>
            {ingredientsList.map((ingredient, i) => {
                return <IngredientsListItem
                    key={`${ingredient.ingredient._id}_${i}`}
                    ingredient={ingredient}
                    index={i}
                />
            })}
        </IngredientsListWrapper>
    )
}

export default IngredientsList
