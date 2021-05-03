import IngredientsListItem from './IngredientsListItem';
import { IngredientsListWrapper } from './styles'

const IngredientsList = ({ ingredients }) => {
    return (
        <IngredientsListWrapper>
            {ingredients.map(ingredient => {
                return <IngredientsListItem key={ingredient.Id} ingredient={ingredient} />
            })}
        </IngredientsListWrapper>
    )
}

export default IngredientsList
