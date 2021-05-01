
import { IngredientMacroSummaryWrapper } from './styles'
const IngredientMacroSummary = ({ ingredient }) => {
    return (
        <IngredientMacroSummaryWrapper>
            <span>B: {ingredient.Protein} g</span>
            <span>T: {ingredient.Fat} g</span>
            <span>W: {ingredient.Carbohydrates} g</span>
        </IngredientMacroSummaryWrapper>
    )
}

export default IngredientMacroSummary
