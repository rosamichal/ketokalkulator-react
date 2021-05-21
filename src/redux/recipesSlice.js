import { createSlice } from '@reduxjs/toolkit';
import { roundNumberTo2DecimalPlaces } from '../utils/mathUtils';

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
        recipeList: [],
    },
    reducers: {
        changeCurrentRecipeName: ({ currentRecipe }, { payload }) => {
            currentRecipe.name = payload;
        },
        addIngredientToCurrentRecipe: ({ currentRecipe }, { payload }) => {
            currentRecipe.ingredientsList.push({ weight: 0, ingredient: payload });
        },
        deleteIngredientFromCurrentRecipe: ({ currentRecipe }, { payload }) => {
            var index = currentRecipe.ingredientsList.findIndex(ing => ing.ingredient.id === payload);
            currentRecipe.ingredientsList.splice(index, 1);

            updateRecipeMacro(currentRecipe);
        },
        changeIngredientInCurrentRecipe: ({ currentRecipe }, { payload }) => {
            var index = currentRecipe.ingredientsList.findIndex(ing => ing.ingredient.id === payload.oldIngredientId);
            currentRecipe.ingredientsList[index].ingredient = payload.ingredient;

            updateRecipeMacro(currentRecipe);
        },
        changeIngredientWeightInCurrentRecipe: ({ currentRecipe }, { payload }) => {
            var index = currentRecipe.ingredientsList.findIndex(ing => ing.ingredient.id === payload.ingredientId);
            const weight = payload.newWeight < 0 ? 0 : payload.newWeight;
            currentRecipe.ingredientsList[index].weight = weight;

            updateRecipeMacro(currentRecipe);
        },
        addRecipe: ({ recipeList }, { payload }) => {
            recipeList.push(payload);
        },
    }
});

export const {
    addRecipe,
    changeCurrentRecipeName,
    addIngredientToCurrentRecipe,
    deleteIngredientFromCurrentRecipe,
    changeIngredientWeightInCurrentRecipe,
    changeIngredientInCurrentRecipe
} = slice.actions;
export const selectRecipes = state => state.recipes;
export default slice.reducer;