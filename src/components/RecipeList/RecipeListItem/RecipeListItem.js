import { useDispatch } from 'react-redux';
import { deleteRecipe } from '../../../redux/recipesSlice';
import { RecipeListItemWrapper, RecipeListItemHeader } from './styles';
import MacroSummary from '../../common/MacroSummary';
import { Button, ButtonWrapper } from '../../common/Button';

const RecipeListItem = ({ recipe, onClick }) => {
    const dispatch = useDispatch();

    const onClickHandler = e => {
        e.stopPropagation();
        dispatch(deleteRecipe(recipe.name))
    }

    return (
        <RecipeListItemWrapper onClick={onClick}>
            <RecipeListItemHeader>{recipe.name}</RecipeListItemHeader>
            <MacroSummary
                carbohydrates={recipe.carbohydrates}
                fat={recipe.fat}
                protein={recipe.protein}
                energy={recipe.energy}
                ratio={recipe.ratio}
            />
            <ButtonWrapper>
                <Button danger onClick={e => onClickHandler(e)}>Usuń</Button>
                <Button primary>Edytuj</Button>
            </ButtonWrapper>
        </RecipeListItemWrapper>
    )
}

export default RecipeListItem
