import { RecipeMacroSummary, Macro, MacroHeader, EnergyRatioWrapper } from './styles'

const CurrentRecipe = () => {
    return (
        <RecipeMacroSummary>
            <Macro>
            <MacroHeader class="summary__header">B</MacroHeader><span class="js--summary__macro--protein">0.00</span>
          </Macro>
          <Macro>
            <MacroHeader class="summary__header">T</MacroHeader><span class="js--summary__macro--fat">0.00</span>
          </Macro>
          <Macro>
            <MacroHeader class="summary__header">W</MacroHeader><span class="js--summary__macro--carbohydrates">0.00</span>
          </Macro>
          <EnergyRatioWrapper>
            <div class="summary__energy-wrapper">
              Kcal: <span class="js--summary__macro--energy">0.00</span>
            </div>
            <div class="summary__ratio-wrapper">
              Stosunek ketogenny <span class="js--summary__macro--ratio">-- : 1</span>
            </div>
          </EnergyRatioWrapper>
        </RecipeMacroSummary>
    )
};

export default CurrentRecipe;
