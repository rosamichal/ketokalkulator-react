import { useDispatch } from 'react-redux';
import { deleteRecipe, selectRecipeToEdit } from '../../../redux/recipesSlice';
import { RecipeListItemWrapper, RecipeListItemHeader } from './styles';
import MacroSummary from '../../common/MacroSummary';
import { Button, ButtonWrapper } from '../../common/Button';

const RecipeListItem = ({ recipe, onClick }) => {
    const dispatch = useDispatch();

    const deleteHandler = e => {
        e.stopPropagation();
        dispatch(deleteRecipe(recipe.name))
    }

    const selectToEditHandler = e => {
        e.stopPropagation();
        dispatch(selectRecipeToEdit(recipe))
    }

    return (
        <RecipeListItemWrapper onClick={onClick} id={recipe.name}>
            <RecipeListItemHeader>{recipe.name}</RecipeListItemHeader>
            <MacroSummary
                carbohydrates={recipe.carbohydrates}
                fat={recipe.fat}
                protein={recipe.protein}
                energy={recipe.energy}
                ratio={recipe.ratio}
            />
            <ButtonWrapper>
                <Button danger onClick={e => deleteHandler(e)}>Usuń</Button>
                <Button primary onClick={e => selectToEditHandler(e)}>Edytuj</Button>
            </ButtonWrapper>
        </RecipeListItemWrapper>
    )
}

export default RecipeListItem
