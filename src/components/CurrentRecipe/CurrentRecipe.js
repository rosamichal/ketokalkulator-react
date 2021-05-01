import { RecipeMacroSummary, Macro, MacroHeader, EnergyRatioWrapper } from './styles'

const CurrentRecipe = () => {
    return (
        <>
            <RecipeMacroSummary>
                <Macro>
                    <MacroHeader>B</MacroHeader>
                    <span>0.00</span>
                </Macro>
                <Macro>
                    <MacroHeader>T</MacroHeader>
                    <span>0.00</span>
                </Macro>
                <Macro>
                    <MacroHeader>W</MacroHeader>
                    <span>0.00</span>
                </Macro>
                <EnergyRatioWrapper>
                    <div>
                        Kcal: <span>0.00</span>
                    </div>
                    <div>
                        Stosunek ketogenny <span>-- : 1</span>
                    </div>
                </EnergyRatioWrapper>
            </RecipeMacroSummary>
        </>
    )
};

export default CurrentRecipe;
