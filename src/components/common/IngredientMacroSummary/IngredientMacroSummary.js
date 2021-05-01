
import { IngredientMacroSummaryWrapper } from './styles'
const IngredientMacroSummary = ({ ingredient }) => {
    return (
        <IngredientMacroSummaryWrapper>
            <span class="ingredients-list__macro--protein">B: {ingredient.Protein} g</span>
            <span class="ingredients-list__macro--fat">T: {ingredient.Fat} g</span>
            <span class="ingredients-list__macro--carbohydrates">W: {ingredient.Carbohydrates} g</span>
        </IngredientMacroSummaryWrapper>
    )
}

export default IngredientMacroSummary
