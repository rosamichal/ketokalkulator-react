import { RecipeMacroSummary, Macro, MacroHeader, EnergyRatioWrapper, RecipeForm } from './styles'
import { WideInput, TextArea } from '../common/Input'
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
                <WideInput className="input input--wide js--recipe-name" type="text" placeholder="Wpisz nazwę dania"
                    aria-label="Nazwa dania" />
                <p className="recipe__name-error js--name-error"></p>
                <h3 className="recipe__ingredients-list-empty-label js--ingredients-list-empty-label">Kliknij "Dodaj składnik", aby rozpocząć</h3>
                <IngredientsList />
                <button className="js--btn-add-ingredient">Dodaj składnik</button>
                <span className="recipe__ingredients-error js--ingredients-error"></span>
                <TextArea className="input input--recipe-note js--recipe-note" rows="5"
                    placeholder="Miejsce na notatki (opcjonalne)"></TextArea>
                <div className="buttons">
                    <button className="btn-new-recipe js--btn-new-recipe">Wyczyść</button>
                    <button className="btn-install hidden js--btn-install">Zainstaluj aplikację</button>
                    <button className="btn-save js--btn-save-recipe">Zapisz</button>
                </div>
            </RecipeForm>
        </>
    )
};

export default CurrentRecipe;
