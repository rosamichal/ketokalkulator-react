import { useSelector, useDispatch } from 'react-redux';
import { selectRecipes, changeCurrentRecipeName, changeCurrentRecipeNote, resetCurrentRecipe, addOrEditRecipe } from '../../redux/recipesSlice';
import { selectIngredients, openIngredientsListPopup, closeIngredientsListPopup } from '../../redux/ingredientsSlice';
import { RecipeMacroSummary, Macro, MacroHeader, EnergyRatioWrapper, RecipeForm, HintLabel } from './styles';
import { WideInput, TextArea } from '../common/Input';
import { Button, ButtonWrapper } from '../common/Button';
import IngredientsListPopup from '../common/Popup/IngredientsListPopup';
import IngredientsList from './IngredientsList';

const CurrentRecipe = () => {
    const { ingredientsListPopup } = useSelector(selectIngredients);
    const { currentRecipe } = useSelector(selectRecipes);
    const dispatch = useDispatch();

    return (
        <>
            <RecipeMacroSummary>
                <Macro>
                    <MacroHeader>B</MacroHeader>
                    <span>{currentRecipe.protein}</span>
                </Macro>
                <Macro>
                    <MacroHeader>T</MacroHeader>
                    <span>{currentRecipe.fat}</span>
                </Macro>
                <Macro>
                    <MacroHeader>W</MacroHeader>
                    <span>{currentRecipe.carbohydrates}</span>
                </Macro>
                <EnergyRatioWrapper>
                    <div>
                        Kcal: <span>{currentRecipe.energy}</span>
                    </div>
                    <div>
                        Stosunek ketogenny <span>{currentRecipe.ratio}</span>
                    </div>
                </EnergyRatioWrapper>
            </RecipeMacroSummary>
            <RecipeForm>
                <h2>Nazwa dania</h2>
                <WideInput
                    type="text"
                    placeholder="Wpisz nazwę dania"
                    value={currentRecipe.name}
                    onChange={e => dispatch(changeCurrentRecipeName(e.target.value))}
                    aria-label="Nazwa dania"
                />
                {currentRecipe.ingredientsList.length ?
                    <IngredientsList ingredientsList={currentRecipe.ingredientsList} /> :
                    <HintLabel>Kliknij "Dodaj składnik", aby rozpocząć</HintLabel>}
                <Button primary onClick={() => dispatch(openIngredientsListPopup())}>Dodaj składnik</Button>
                <TextArea
                    value={currentRecipe.note}
                    onChange={e => dispatch(changeCurrentRecipeNote(e.target.value))}
                    rows="5"
                    placeholder="Miejsce na notatki (opcjonalne)"
                />
                <ButtonWrapper>
                    <Button danger onClick={() => dispatch(resetCurrentRecipe())}> Wyczyść</Button>
                    <Button >Zainstaluj aplikację</Button>
                    <Button primary onClick={() => dispatch(addOrEditRecipe())}>Zapisz</Button>
                </ButtonWrapper>
            </RecipeForm>
            {ingredientsListPopup.isOpen && <IngredientsListPopup
                onClose={() => dispatch(closeIngredientsListPopup())}
                selectedIngredientId={ingredientsListPopup.oldIngredientId}
            />}
        </>
    )
};

export default CurrentRecipe;
