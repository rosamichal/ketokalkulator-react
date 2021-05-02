import { IngredientsListItemWrapper, IngredientName } from './styles';
import { Input } from '../../../common/Input';
import { Button } from '../../../common/Button';
import {ReactComponent as MinusImg} from './minus.svg';
import {ReactComponent as PlusImg} from './plus.svg';
import {ReactComponent as TrashImg} from './trash.svg';
import MacroSummary from '../../../common/MacroSummary';

const IngredientsListItem = ({ ingredient }) => {
    return (
        <IngredientsListItemWrapper>
            <Button square="37" primary><MinusImg /></Button>
            <Input type="number" />
            <Button square="37" primary><PlusImg /></Button>
            <IngredientName data-ingredient-id="367">{ingredient.Name}</IngredientName>
            <Button square="37" danger><TrashImg /></Button>
            <MacroSummary protein={ingredient.Protein} fat={ingredient.Fat} carbohydrates={ingredient.Carbohydrates} />
        </IngredientsListItemWrapper>
    )
}

export default IngredientsListItem
