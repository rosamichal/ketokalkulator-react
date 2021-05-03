import Search from '../../Search';
import Popup from '../Popup';
import { PopupIngredientsList } from './styles'
import PopupIngredientsListItem from './PopupIngredientsListItem';

const IngredientsListPopup = ({ onClose, ingredients }) => {
    return (
        <Popup title="Wybierz składnik" onClose={onClose}>
            <Search />
            <PopupIngredientsList>
                {ingredients.length ?
                    ingredients.map(ingredient => <PopupIngredientsListItem key={ingredient.Id} ingredient={ingredient} />) :
                    <p>Nie znaleziono składników...</p>}
            </PopupIngredientsList>
        </Popup>
    )
}

export default IngredientsListPopup
