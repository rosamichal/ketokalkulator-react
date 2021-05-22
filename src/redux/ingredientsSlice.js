import { createSlice } from '@reduxjs/toolkit';
import { persistKeys, readData } from '../utils/persistenceUtils';

const slice = createSlice({
    name: 'ingredients',
    initialState: {
        ingredientsList: readData(persistKeys.INGREDIENT_LIST, []),
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
        },
        getIngredients: () => { },
        setIngredients: (state, { payload }) => {
            state.ingredientsList = payload;
        }
    }
});

export const { openIngredientsListPopup, closeIngredientsListPopup, getIngredients, setIngredients } = slice.actions;
export const selectIngredients = state => state.ingredients;
export default slice.reducer;