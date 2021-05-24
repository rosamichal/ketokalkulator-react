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
            const query = payload.trim().toUpperCase();
            const allIngredients = readData(persistKeys.INGREDIENT_LIST, []);
            const ingredientsStartsWith = allIngredients.filter(ingredient => ingredient.name.toUpperCase().startsWith(query));
            const ingredientsIncludes = allIngredients.filter(ingredient => !ingredient.name.toUpperCase().startsWith(query)
                && ingredient.name.toUpperCase().includes(query));
            state.ingredientsList = [...ingredientsStartsWith, ...ingredientsIncludes];
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