import Search from '../../Search';
import Popup from '../Popup';
import { PopupIngredientsList } from './styles';
import PopupIngredientsListItem from './PopupIngredientsListItem';
import { addIngredientToCurrentRecipe, changeIngredientInCurrentRecipe } from '../../../../redux/recipesSlice';
import { selectIngredients, searchIngredient } from '../../../../redux/ingredientsSlice';
import { useDispatch, useSelector } from 'react-redux';

const IngredientsListPopup = ({ onClose, selectedIngredientId }) => {
    const dispatch = useDispatch();
    const { ingredientsList } = useSelector(selectIngredients);

    const selectIngredient = ingredient => {
        selectedIngredientId ?
            dispatch(changeIngredientInCurrentRecipe({ oldIngredientId: selectedIngredientId, ingredient })) :
            dispatch(addIngredientToCurrentRecipe(ingredient));
        onClose();
    }

    return (
        <Popup title="Wybierz składnik" onClose={onClose}>
            <Search onChange={e => dispatch(searchIngredient(e.target.value))} />
            <PopupIngredientsList>
                {ingredientsList.length ?
                    ingredientsList.map(ingredient =>
                        <PopupIngredientsListItem
                            key={ingredient._id}
                            ingredient={ingredient}
                            onClick={() => selectIngredient(ingredient)}
                        />) :
                    <p>Nie znaleziono składników...</p>}
            </PopupIngredientsList>
        </Popup>
    )
}

export default IngredientsListPopup
