import { takeEvery, select, call, delay } from 'redux-saga/effects';
import { selectRecipes, addOrEditRecipe, deleteRecipe } from '../recipesSlice';
import { persistKeys, writeData } from '../../utils/persistenceUtils';
import { scrollToId } from '../../utils/scrollUtils';

function* saveRecipeListHandler() {
    try {
        const recipes = yield select(selectRecipes);
        yield call(writeData, persistKeys.RECIPE_LIST, recipes.recipeList);
    } catch (error) {
        yield call(console.error, `Something bad happened! ${error}`)
    }
}

function* scrollToRecipeHandler({ payload }) {
    try {
        yield delay(100);
        yield call(scrollToId, payload);
    } catch (error) {
        yield call(console.error, `Something bad happened! ${error}`)
    }
}

export function* recipeSaga() {
    yield takeEvery(addOrEditRecipe.type, saveRecipeListHandler);
    yield takeEvery(addOrEditRecipe.type, scrollToRecipeHandler);
    yield takeEvery(deleteRecipe.type, saveRecipeListHandler);
}