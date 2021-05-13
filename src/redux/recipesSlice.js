import { createSlice } from '@reduxjs/toolkit';

export const emptyRecipe = {
    name: '',
    ingredients: [],
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
        addRecipe: ({ recipeList }, { payload }) => {
            recipeList.push(payload);
        },
    }
});

export const { addRecipe, changeCurrentRecipeName } = slice.actions;
export const selectRecipes = state => state.recipes;
export default slice.reducer;