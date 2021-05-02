import { RecipeMacroSummary, Macro, MacroHeader, EnergyRatioWrapper, RecipeForm, ErrorLabel, HintLabel } from './styles'
import { WideInput, TextArea } from '../common/Input'
import { Button, ButtonWrapper } from '../common/Button'
import IngredientsList from './IngredientsList'

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
            <RecipeForm>
                <h2>Nazwa dania</h2>
                <WideInput type="text" placeholder="Wpisz nazwę dania" aria-label="Nazwa dania" />
                <ErrorLabel>Błąd. Nazwa jest wymagana.</ErrorLabel>
                <HintLabel>Kliknij "Dodaj składnik", aby rozpocząć</HintLabel>
                <IngredientsList />
                <Button primary>Dodaj składnik</Button>
                <ErrorLabel as="span">Dodaj składnik</ErrorLabel>
                <TextArea rows="5" placeholder="Miejsce na notatki (opcjonalne)"></TextArea>
                <ButtonWrapper>
                    <Button danger>Wyczyść</Button>
                    <Button >Zainstaluj aplikację</Button>
                    <Button primary>Zapisz</Button>
                </ButtonWrapper>
            </RecipeForm>
        </>
    )
};

export default CurrentRecipe;
