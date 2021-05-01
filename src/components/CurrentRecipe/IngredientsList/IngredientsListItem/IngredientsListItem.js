import { IngredientsListItemWrapper, IngredientName } from './styles';
import { Input } from '../../../common/Input';
import IngredientMacroSummary from '../../../common/IngredientMacroSummary'

const IngredientsListItem = ({ ingredient }) => {
    return (
        <IngredientsListItemWrapper>
            <button>-</button>
            <Input type="number" value="100" />
            <button>+</button>
            <IngredientName class="ingredients-list__ingredient" data-ingredient-id="367">{ingredient.Name}</IngredientName>
            <button>Usuń</button>
            <IngredientMacroSummary ingredient={ingredient} />
        </IngredientsListItemWrapper>
    )
}

export default IngredientsListItem
