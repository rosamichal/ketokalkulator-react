export const persistKeys = {
    RECIPE_LIST: 'recipeList',
    INGREDIENT_LIST: 'ingredientList',
}

export const writeData = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const readData = (key, initialValue) => JSON.parse(localStorage.getItem(key)) || initialValue;