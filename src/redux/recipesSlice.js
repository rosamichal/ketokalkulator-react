import { createSlice } from '@reduxjs/toolkit';

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
            var index = currentRecipe.ingredientsList.findIndex(ing =>ing.ingredient.id === payload);
            currentRecipe.ingredientsList.splice(index, 1);
        },
        addRecipe: ({ recipeList }, { payload }) => {
            recipeList.push(payload);
        },
    }
});

export const { addRecipe, changeCurrentRecipeName, addIngredientToCurrentRecipe, deleteIngredientFromCurrentRecipe } = slice.actions;
export const selectRecipes = state => state.recipes;
export default slice.reducer;