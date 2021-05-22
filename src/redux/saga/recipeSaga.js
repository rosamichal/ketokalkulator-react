import { takeEvery, select, call } from 'redux-saga/effects';
import { selectRecipes, addOrEditRecipe, deleteRecipe } from '../recipesSlice';
import { persistKeys, writeData } from '../../utils/persistenceUtils';

function* saveRecipeListHandler() {
    try {
        const recipes = yield select(selectRecipes);
        yield call(writeData, persistKeys.RECIPE_LIST, recipes.recipeList);
    } catch (error) {
        yield call(alert, "Nie udało się zapisać przepisów w bazie przeglądarki.")
    }
}

export function* recipeSaga() {
    yield takeEvery(addOrEditRecipe.type, saveRecipeListHandler);
    yield takeEvery(deleteRecipe.type, saveRecipeListHandler);
}