import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'ingredients',
    initialState: {
        ingredientsList: [],
        ingredientsListPopup: {
            isOpen: false,
            oldIngredientId: 0
        },
    },
    reducers: {
        openIngredientsListPopup: ({ ingredientsListPopup }, { payload }) => {
            ingredientsListPopup.isOpen = true;
            ingredientsListPopup.oldIngredientId = payload;
        },
        closeIngredientsListPopup: ({ ingredientsListPopup }) => {
            ingredientsListPopup.isOpen = false;
        }
    }
});

export const { openIngredientsListPopup, closeIngredientsListPopup } = slice.actions;
export const selectIngredients = state => state.ingredients;
export default slice.reducer;