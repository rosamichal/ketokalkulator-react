import Search from '../../Search';
import Popup from '../Popup';
import { PopupIngredientsList } from './styles';
import PopupIngredientsListItem from './PopupIngredientsListItem';
import { addIngredientToCurrentRecipe } from '../../../../redux/recipesSlice';
import { useDispatch } from 'react-redux';

const IngredientsListPopup = ({ onClose, ingredients }) => {
    const dispatch = useDispatch();

    const selectIngredient = ingredient => {
        dispatch(addIngredientToCurrentRecipe(ingredient));
        onClose();
    }

    return (
        <Popup title="Wybierz składnik" onClose={onClose}>
            <Search />
            <PopupIngredientsList>
                {ingredients.length ?
                    ingredients.map(ingredient =>
                        <PopupIngredientsListItem
                            key={ingredient.id}
                            ingredient={ingredient}
                            onClick={() => selectIngredient(ingredient)}
                        />) :
                    <p>Nie znaleziono składników...</p>}
            </PopupIngredientsList>
        </Popup>
    )
}

export default IngredientsListPopup
