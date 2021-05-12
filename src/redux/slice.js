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
            recipeList.push(payload)
        }
    }
});

export const { addRecipe } = slice.actions;
export const selectRecipe = state => state.recipeList;
export default slice.reducer;