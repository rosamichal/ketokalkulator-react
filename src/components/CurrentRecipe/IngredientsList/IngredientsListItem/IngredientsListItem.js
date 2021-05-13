import { IngredientsListItemWrapper, IngredientName } from './styles';
import { Input } from '../../../common/Input';
import { Button } from '../../../common/Button';
import { ReactComponent as MinusImg } from '../../../../assets/images/minus.svg';
import { ReactComponent as PlusImg } from '../../../../assets/images/plus.svg';
import { ReactComponent as TrashImg } from '../../../../assets/images/trash.svg';
import MacroSummary from '../../../common/MacroSummary';

const IngredientsListItem = ({ ingredient }) => {
    return (
        <IngredientsListItemWrapper>
            <Button square="37" primary><MinusImg /></Button>
            <Input type="number" value={ingredient.weight} />
            <Button square="37" primary><PlusImg /></Button>
            <IngredientName data-ingredient-id="367">{ingredient.ingredient.Name}</IngredientName>
            <Button square="37" danger><TrashImg /></Button>
            <MacroSummary
                protein={ingredient.ingredient.Protein}
                fat={ingredient.ingredient.Fat}
                carbohydrates={ingredient.ingredient.Carbohydrates}
            />
        </IngredientsListItemWrapper>
    )
}

export default IngredientsListItem
