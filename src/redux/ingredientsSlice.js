import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'ingredients',
    initialState: {
        ingredientsList: [],
        isIngredientsListPopupOpen: false,
    },
    reducers: {
        toggleIngredientsListPopup: state => {
            state.isIngredientsListPopupOpen = !state.isIngredientsListPopupOpen;
        }
    }
});

export const { toggleIngredientsListPopup } = slice.actions;
export const selectIngredients = state => state.ingredients;
export default slice.reducer;