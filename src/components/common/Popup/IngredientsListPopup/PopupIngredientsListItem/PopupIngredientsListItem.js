import { PopupIngredientsListItemWrapper, PopupIngredientsListItemHeader } from './styles';
import MacroSummary from '../../../MacroSummary';

const PopupIngredientsListItem = ({ ingredient, onClick }) => {
    return (
        <PopupIngredientsListItemWrapper onClick={onClick}>
            <PopupIngredientsListItemHeader>{ingredient.name}</PopupIngredientsListItemHeader>
            <MacroSummary protein={ingredient.protein} fat={ingredient.fat} carbohydrates={ingredient.carbohydrates} />
        </PopupIngredientsListItemWrapper>
    )
}

export default PopupIngredientsListItem
