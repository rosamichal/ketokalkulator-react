import IngredientsListItem from './IngredientsListItem';
import { IngredientsListWrapper } from './styles'

const IngredientsList = ({ ingredientsList }) => {
    return (
        <IngredientsListWrapper>
            {ingredientsList.map(ingredient => {
                return <IngredientsListItem
                    key={ingredient.ingredient.Id}
                    ingredient={ingredient}
                />
            })}
        </IngredientsListWrapper>
    )
}

export default IngredientsList
