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
        recipeList: [],
        isIngredientsListPopupOpen: false,
    },
    reducers: {
        changeCurrentRecipeName: ({ currentRecipe }, { payload }) => {
            currentRecipe.name = payload;
        },
        addRecipe: ({ recipeList }, { payload }) => {
            recipeList.push(payload);
        },
        toggleIngredientsListPopup: state => {
            state.isIngredientsListPopupOpen = !state.isIngredientsListPopupOpen;
        }
    }
});

export const { addRecipe, changeCurrentRecipeName, toggleIngredientsListPopup } = slice.actions;
export const selectRecipeList = state => state.recipeList;
export const selectCurrentRecipe = state => state.currentRecipe;
export const selectIngredientList = state => state.ingredientsList;
export const selectIsIngredientsListPopupOpen = state => state.isIngredientsListPopupOpen;
export default slice.reducer;