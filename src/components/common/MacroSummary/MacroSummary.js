
import { IngredientMacroSummaryWrapper } from './styles'
const IngredientMacroSummary = ({ protein, fat, carbohydrates, energy, ratio }) => {
    return (
        <>
            <IngredientMacroSummaryWrapper>
                <span>B: {protein} g</span>
                <span>T: {fat} g</span>
                <span>W: {carbohydrates} g</span>
            </IngredientMacroSummaryWrapper>
            {(energy && ratio) && <IngredientMacroSummaryWrapper>
            <span>Kcal: {energy} g</span>
                <span>Stosunek ketogenny {ratio} </span>
            </IngredientMacroSummaryWrapper>}
        </>
    )
}

export default IngredientMacroSummary
