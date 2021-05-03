import Search from '../../Search';
import Popup from '../Popup';
import { PopupIngredientsList } from './styles'
import PopupIngredientsListItem from './PopupIngredientsListItem';

const IngredientsListPopup = ({ togglePopup, ingredients }) => {
    return (
        <Popup title="Wybierz składnik" onClose={togglePopup}>
            <Search />
            <PopupIngredientsList>
                {ingredients.length ?
                    ingredients.map(ingredient => <PopupIngredientsListItem key={ingredient.id} ingredient={ingredient} />) :
                    <p>Nie znaleziono składników...</p>}
            </PopupIngredientsList>
        </Popup>
    )
}

export default IngredientsListPopup
