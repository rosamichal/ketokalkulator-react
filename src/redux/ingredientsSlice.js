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
        searchIngredient: (state, { payload }) => {
            state.ingredientsList = readData(persistKeys.INGREDIENT_LIST, [])
                .filter(ingredient => ingredient.name.toUpperCase().includes(payload.trim().toUpperCase()));
        },
        getIngredients: () => { },
        setIngredients: (state, { payload }) => {
            state.ingredientsList = payload;
        }
    }
});

export const { openIngredientsListPopup, closeIngredientsListPopup, getIngredients, setIngredients, searchIngredient } = slice.actions;
export const selectIngredients = state => state.ingredients;
export default slice.reducer;