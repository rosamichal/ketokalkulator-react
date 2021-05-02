import IngredientsListItem from './IngredientsListItem';
import { IngredientsListWrapper } from './styles'

const ingredients = [
    {
        Id: 446,
        Name: "Majonez kielecki",
        CategoryId: 0,
        Protein: 1.9,
        Fat: 68.0,
        Carbohydrates: 2.3
    },
    {
        Id: 447,
        Name: "Masło Łaciate",
        CategoryId: 0,
        Protein: 0.6,
        Fat: 83.0,
        Carbohydrates: 0.8
    },
    {
        Id: 474,
        Name: "Parówki 100% z szynki Tarczyński naturalnie",
        CategoryId: 0,
        Protein: 14.0,
        Fat: 27.0,
        Carbohydrates: 0.5
    }
]

const IngredientsList = () => {
    return (
        <IngredientsListWrapper>
            {ingredients.map(ingredient => {
                return <IngredientsListItem key={ingredient.Id} ingredient={ingredient} />
            })}
        </IngredientsListWrapper>
    )
}

export default IngredientsList
