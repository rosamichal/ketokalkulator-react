import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentRecipe } from '../../redux/slice';
import { RecipeMacroSummary, Macro, MacroHeader, EnergyRatioWrapper, RecipeForm, ErrorLabel, HintLabel } from './styles';
import { WideInput, TextArea } from '../common/Input';
import { Button, ButtonWrapper } from '../common/Button';
import IngredientsListPopup from '../common/Popup/IngredientsListPopup';
import IngredientsList from './IngredientsList';

const ingredients = [
    {
        Id: 446,
        Name: "Majonez kielecki",
        CategoryId: 0,
        Protein: 1.9,
        Fat: 68.0,
        Carbohydrates: 2.3
    },
    {
        Id: 447,
        Name: "Masło Łaciate",
        CategoryId: 0,
        Protein: 0.6,
        Fat: 83.0,
        Carbohydrates: 0.8
    },
    {
        Id: 474,
        Name: "Parówki 100% z szynki Tarczyński naturalnie",
        CategoryId: 0,
        Protein: 14.0,
        Fat: 27.0,
        Carbohydrates: 0.5
    }
]

const CurrentRecipe = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(isOpen => !isOpen);
    }

    const currentRecipe = useSelector(selectCurrentRecipe);

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
                <WideInput type="text" placeholder="Wpisz nazwę dania" aria-label="Nazwa dania" />
                <ErrorLabel>Błąd. Nazwa jest wymagana.</ErrorLabel>
                {currentRecipe.ingredients.length ?
                    <IngredientsList ingredients={currentRecipe.ingredients} /> :
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
            {isOpen && <IngredientsListPopup onClose={togglePopup} ingredients={ingredients} />}
        </>
    )
};

export default CurrentRecipe;
