import { IngredientsListItemWrapper, IngredientName } from './styles';
import { Input } from '../../../common/Input';
import { Button } from '../../../common/Button';
import { ReactComponent as MinusImg } from '../../../../assets/images/minus.svg';
import { ReactComponent as PlusImg } from '../../../../assets/images/plus.svg';
import { ReactComponent as TrashImg } from '../../../../assets/images/trash.svg';
import MacroSummary from '../../../common/MacroSummary';
import { useDispatch } from 'react-redux';
import { deleteIngredientFromCurrentRecipe, changeIngredientWeightInCurrentRecipe } from '../../../../redux/recipesSlice';

//import { useSelector, useDispatch } from 'react-redux';
//import { selectRecipes, changeCurrentRecipeName } from '../../../../..redux/recipesSlice';
import { openIngredientsListPopup } from '../../../../redux/ingredientsSlice';

const IngredientsListItem = ({ ingredient }) => {
    const dispatch = useDispatch();

    return (
        <IngredientsListItemWrapper>
            <Button square="37" primary><MinusImg /></Button>
            <Input
                type="number"
                value={ingredient.weight}
                onChange={e => dispatch(changeIngredientWeightInCurrentRecipe({ ingredientId: ingredient.ingredient.id, newWeight: e.target.value }))} />
            <Button square="37" primary><PlusImg /></Button>
            <IngredientName onClick={() => dispatch(openIngredientsListPopup(ingredient.ingredient.id))}>
                {ingredient.ingredient.name}
            </IngredientName>
            <Button
                square="37"
                danger
                onClick={() => dispatch(deleteIngredientFromCurrentRecipe(ingredient.ingredient.id))} >
                <TrashImg />
            </Button>
            <MacroSummary
                protein={ingredient.ingredient.protein}
                fat={ingredient.ingredient.fat}
                carbohydrates={ingredient.ingredient.carbohydrates}
            />
        </IngredientsListItemWrapper>
    )
}

export default IngredientsListItem
