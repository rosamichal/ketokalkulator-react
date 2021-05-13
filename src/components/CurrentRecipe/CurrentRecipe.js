import { useSelector, useDispatch } from 'react-redux';
import { selectRecipes, changeCurrentRecipeName } from '../../redux/recipesSlice';
import { selectIngredients, toggleIngredientsListPopup } from '../../redux/ingredientsSlice';
import { RecipeMacroSummary, Macro, MacroHeader, EnergyRatioWrapper, RecipeForm, ErrorLabel, HintLabel } from './styles';
import { WideInput, TextArea } from '../common/Input';
import { Button, ButtonWrapper } from '../common/Button';
import IngredientsListPopup from '../common/Popup/IngredientsListPopup';
import IngredientsList from './IngredientsList';

const ingredients = [
    {
        id: 446,
        name: "Majonez kielecki",
        categoryId: 0,
        protein: 1.9,
        fat: 68.0,
        carbohydrates: 2.3
    },
    {
        id: 447,
        name: "Masło Łaciate",
        categoryId: 0,
        protein: 0.6,
        fat: 83.0,
        carbohydrates: 0.8
    },
    {
        id: 474,
        name: "Parówki 100% z szynki Tarczyński naturalnie",
        categoryId: 0,
        protein: 14.0,
        fat: 27.0,
        carbohydrates: 0.5
    }
]

const CurrentRecipe = () => {
    const { isIngredientsListPopupOpen } = useSelector(selectIngredients);
    const { currentRecipe } = useSelector(selectRecipes);
    const dispatch = useDispatch();

    const togglePopup = () => {
        dispatch(toggleIngredientsListPopup())
    }

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
                <Button primary onClick={togglePopup}>Dodaj składnik</Button>
                <ErrorLabel as="span">Dodaj składnik</ErrorLabel>
                <TextArea rows="5" placeholder="Miejsce na notatki (opcjonalne)"></TextArea>
                <ButtonWrapper>
                    <Button danger>Wyczyść</Button>
                    <Button >Zainstaluj aplikację</Button>
                    <Button primary>Zapisz</Button>
                </ButtonWrapper>
            </RecipeForm>
            {isIngredientsListPopupOpen && <IngredientsListPopup onClose={togglePopup} ingredients={ingredients} />}
        </>
    )
};

export default CurrentRecipe;
