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
        ingredientsList: [],
        recipeList: []
    },
    reducers: {
        addRecipe: ({ recipeList }, { payload }) => {
            recipeList.push(payload);
        },
        changeCurrentRecipeName: ({currentRecipe}, {payload}) => {
            currentRecipe.name = payload;
        }
    }
});

export const { addRecipe, changeCurrentRecipeName } = slice.actions;
export const selectRecipeList = state => state.recipeList;
export const selectCurrentRecipe = state => state.currentRecipe;
export const selectIngredientList = state => state.ingredientsList;
export default slice.reducer;