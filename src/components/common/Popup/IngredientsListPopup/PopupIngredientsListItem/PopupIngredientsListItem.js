import {PopupIngredientsListItemWrapper, PopupIngredientsListItemHeader} from './styles';
import MacroSummary from '../../../MacroSummary';

const PopupIngredientsListItem = ({ingredient}) => {
    return (
        <PopupIngredientsListItemWrapper>
            <PopupIngredientsListItemHeader>{ingredient.Name}</PopupIngredientsListItemHeader>
            <MacroSummary protein={ingredient.Protein} fat={ingredient.Fat} carbohydrates={ingredient.Carbohydrates} />
        </PopupIngredientsListItemWrapper>
    )
}

export default PopupIngredientsListItem
