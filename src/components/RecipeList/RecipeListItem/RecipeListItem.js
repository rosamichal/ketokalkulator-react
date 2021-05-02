import { RecipeListItemWrapper, RecipeListItemHeader } from './styles';
import MacroSummary from '../../common/MacroSummary';
import {Button, ButtonWrapper} from '../../common/Button';

const RecipeListItem = ({ recipe }) => {
    return (
        <RecipeListItemWrapper>
            <RecipeListItemHeader>{recipe.name}</RecipeListItemHeader>
            <MacroSummary 
                carbohydrates={recipe.carbohydrates} 
                fat={recipe.fat} 
                protein={recipe.protein} 
                energy={recipe.energy} 
                ratio={recipe.ratio} 
            />
            <ButtonWrapper>
                <Button danger>Usuń</Button>
                <Button primary>Edytuj</Button>
            </ButtonWrapper>
        </RecipeListItemWrapper>
    )
}

export default RecipeListItem
