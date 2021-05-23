import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { roundNumberTo2DecimalPlaces } from '../utils/mathUtils';
import { persistKeys, readData } from '../utils/persistenceUtils';
import { scrollToTop } from '../utils/scrollUtils';

export const emptyRecipe = {
    name: '',
    ingredientsList: [],
    note: '',
    protein: '0.00',
    fat: '0.00',
    carbohydrates: '0.00',
    energy: '0.00',
    ratio: "-- : 1"
};

const updateRecipeMacro = currentRecipe => {
    let protein = 0;
    let fat = 0;
    let carbohydrates = 0;

    currentRecipe.ingredientsList.forEach(ing => {
        protein += roundNumberTo2DecimalPlaces(ing.ingredient.protein * ing.weight / 100);
        fat += roundNumberTo2DecimalPlaces(ing.ingredient.fat * ing.weight / 100);
        carbohydrates += roundNumberTo2DecimalPlaces(ing.ingredient.carbohydrates * ing.weight / 100);
    });

    currentRecipe.protein = protein.toFixed(2);
    currentRecipe.fat = fat.toFixed(2);
    currentRecipe.carbohydrates = carbohydrates.toFixed(2);
    currentRecipe.energy = getEnergy(protein, fat, carbohydrates).toFixed(2);
    const ratio = getRatio(protein, fat, carbohydrates);
    currentRecipe.ratio = `${isNaN(ratio) ? '--' : ratio.toFixed(2)} : 1`;
}

const getEnergy = (protein, fat, carbohydrates) => (protein + carbohydrates) * 4 + fat * 9;

const getRatio = (protein, fat, carbohydrates) => fat / (protein + carbohydrates);

const slice = createSlice({
    name: 'ketokalkulator',
    initialState: {
        currentRecipe: emptyRecipe,
        recipeList: readData(persistKeys.RECIPE_LIST, []),
        recipePopup: {
            isOpen: false,
            selectedRecipe: {}
        },
    },
    reducers: {
        changeCurrentRecipeName: ({ currentRecipe }, { payload }) => {
            currentRecipe.name = payload;
        },
        changeCurrentRecipeNote: ({ currentRecipe }, { payload }) => {
            currentRecipe.note = payload;
        },
        addIngredientToCurrentRecipe: ({ currentRecipe }, { payload }) => {
            currentRecipe.ingredientsList.push({ weight: 0, ingredient: payload });
        },
        deleteIngredientFromCurrentRecipe: ({ currentRecipe }, { payload }) => {
            var index = currentRecipe.ingredientsList.findIndex(ing => ing.ingredient._id === payload);
            currentRecipe.ingredientsList.splice(index, 1);

            updateRecipeMacro(currentRecipe);
        },
        changeIngredientInCurrentRecipe: ({ currentRecipe }, { payload }) => {
            var index = currentRecipe.ingredientsList.findIndex(ing => ing.ingredient._id === payload.oldIngredientId);
            currentRecipe.ingredientsList[index].ingredient = payload.ingredient;

            updateRecipeMacro(currentRecipe);
        },
        changeIngredientWeightInCurrentRecipe: ({ currentRecipe }, { payload }) => {
            const weight = payload.newWeight < 0 ? 0 : payload.newWeight;
            currentRecipe.ingredientsList[payload.index].weight = weight;

            updateRecipeMacro(currentRecipe);
        },
        addOrEditRecipe: (state, { payload }) => {
            let isValid = true;

            const name = payload.trim();
            state.currentRecipe.name = name;

            if (!name) {
                toast.error('Nazwa dania jest wymagana');
                isValid = false;
            }

            if (!+state.currentRecipe.ingredientsList.some(ingredient => ingredient.weight)) {
                toast.error('Dodaj przynajmniej 1 składnik, którego waga jest większa od 0');
                isValid = false;
            }
            if (!isValid) return;

            state.currentRecipe.ingredientsList = state.currentRecipe.ingredientsList.filter(ingredient => ingredient.weight > 0);

            const recipeIndex = state.recipeList.findIndex(recipe => recipe.name === name);
            if (recipeIndex === -1) {
                state.recipeList.push(state.currentRecipe);
                state.recipeList.sort((a, b) => a.name.localeCompare(b.name));
                toast.success(`Pomyślnie dodano przepis '${name}'`);
            } else {
                state.recipeList[recipeIndex] = state.currentRecipe;
                toast.success(`Pomyślnie zmodyfikowano przepis '${name}'`);
            }

            state.currentRecipe = emptyRecipe;
        },
        deleteRecipe: ({ recipeList }, { payload }) => {
            var index = recipeList.findIndex(recipe => recipe.name === payload);
            recipeList.splice(index, 1);
            toast.success(`Usunięto przepis '${payload}'`);
        },
        resetCurrentRecipe: (state) => {
            state.currentRecipe = emptyRecipe;
        },
        selectRecipeToEdit: (state, { payload }) => {
            state.currentRecipe = payload;
            scrollToTop();
            if (state.recipePopup.isOpen) {
                state.recipePopup.isOpen = false;
            }
        },
        openRecipePopup: ({ recipePopup }, { payload }) => {
            recipePopup.isOpen = true;
            recipePopup.selectedRecipe = payload;
        },
        closeRecipePopup: ({ recipePopup }) => {
            recipePopup.isOpen = false;
        }
    }
});

export const {
    addOrEditRecipe,
    deleteRecipe,
    resetCurrentRecipe,
    selectRecipeToEdit,
    changeCurrentRecipeName,
    changeCurrentRecipeNote,
    addIngredientToCurrentRecipe,
    deleteIngredientFromCurrentRecipe,
    changeIngredientWeightInCurrentRecipe,
    changeIngredientInCurrentRecipe,
    openRecipePopup,
    closeRecipePopup
} = slice.actions;
export const selectRecipes = state => state.recipes;
export default slice.reducer;