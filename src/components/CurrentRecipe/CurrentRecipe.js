import { useSelector, useDispatch } from 'react-redux';
import { selectRecipes, changeCurrentRecipeName, changeCurrentRecipeNote } from '../../redux/recipesSlice';
import { selectIngredients, openIngredientsListPopup, closeIngredientsListPopup } from '../../redux/ingredientsSlice';
import { RecipeMacroSummary, Macro, MacroHeader, EnergyRatioWrapper, RecipeForm, ErrorLabel, HintLabel } from './styles';
import { WideInput, TextArea } from '../common/Input';
import { Button, ButtonWrapper } from '../common/Button';
import IngredientsListPopup from '../common/Popup/IngredientsListPopup';
import IngredientsList from './IngredientsList';

const CurrentRecipe = () => {
    const { ingredientsListPopup } = useSelector(selectIngredients);
    const { currentRecipe } = useSelector(selectRecipes);
    const dispatch = useDispatch();

    // const togglePopup = () => {
    //     dispatch(toggleIngredientsListPopup())
    // }

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
                <ErrorLabel>Błąd. Nazwa jest wymagana.</ErrorLabel>
                {currentRecipe.ingredientsList.length ?
                    <IngredientsList ingredientsList={currentRecipe.ingredientsList} /> :
                    <HintLabel>Kliknij "Dodaj składnik", aby rozpocząć</HintLabel>}
                <Button primary onClick={() => dispatch(openIngredientsListPopup())}>Dodaj składnik</Button>
                <ErrorLabel as="span">Dodaj składnik</ErrorLabel>
                <TextArea
                    value={currentRecipe.note}
                    onChange={e => dispatch(changeCurrentRecipeNote(e.target.value))}
                    rows="5"
                    placeholder="Miejsce na notatki (opcjonalne)"
                />
                <ButtonWrapper>
                    <Button danger>Wyczyść</Button>
                    <Button >Zainstaluj aplikację</Button>
                    <Button primary>Zapisz</Button>
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
