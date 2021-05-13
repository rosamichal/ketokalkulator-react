import { IngredientsListItemWrapper, IngredientName } from './styles';
import { Input } from '../../../common/Input';
import { Button } from '../../../common/Button';
import { ReactComponent as MinusImg } from '../../../../assets/images/minus.svg';
import { ReactComponent as PlusImg } from '../../../../assets/images/plus.svg';
import { ReactComponent as TrashImg } from '../../../../assets/images/trash.svg';
import MacroSummary from '../../../common/MacroSummary';
import { useDispatch } from 'react-redux';
import { deleteIngredientFromCurrentRecipe } from '../../../../redux/recipesSlice';

const IngredientsListItem = ({ ingredient }) => {
    const dispatch = useDispatch();

    return (
        <IngredientsListItemWrapper>
            <Button square="37" primary><MinusImg /></Button>
            <Input type="number" value={ingredient.weight} />
            <Button square="37" primary><PlusImg /></Button>
            <IngredientName data-ingredient-id="367">{ingredient.ingredient.name}</IngredientName>
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
