import Search from '../../Search';
import Popup from '../Popup';
import { PopupIngredientsList } from './styles';
import PopupIngredientsListItem from './PopupIngredientsListItem';
import { addIngredientToCurrentRecipe, changeIngredientInCurrentRecipe } from '../../../../redux/recipesSlice';
import { useDispatch } from 'react-redux';

const ingredients = [
    {
        id: 446,
        name: "Majonez kielecki",
        categoryId: 0,
        protein: 1.9,
        fat: 68.0,
        carbohydrates: 2.3
    },
    {
        id: 447,
        name: "Masło Łaciate",
        categoryId: 0,
        protein: 0.6,
        fat: 83.0,
        carbohydrates: 0.8
    },
    {
        id: 474,
        name: "Parówki 100% z szynki Tarczyński naturalnie",
        categoryId: 0,
        protein: 14.0,
        fat: 27.0,
        carbohydrates: 0.5
    }
]

const IngredientsListPopup = ({ onClose, selectedIngredientId }) => {
    const dispatch = useDispatch();

    const selectIngredient = ingredient => {
        selectedIngredientId ?
            dispatch(changeIngredientInCurrentRecipe({ oldIngredientId: selectedIngredientId, ingredient })) :
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
