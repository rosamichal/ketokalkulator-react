import { takeEvery, select, call, delay, put } from 'redux-saga/effects';
import { selectRecipes, addOrEditRecipe, deleteRecipe, selectRecipeToEdit, searchRecipe } from '../recipesSlice';
import { persistKeys, writeData } from '../../utils/persistenceUtils';
import { scrollToId, scrollToTop } from '../../utils/scrollUtils';

function* saveRecipeListHandler() {
    try {
        const recipes = yield select(selectRecipes);
        yield call(writeData, persistKeys.RECIPE_LIST, recipes.recipeList);
    } catch (error) {
        yield call(console.error, `Something bad happened! ${error}`)
    }
}

function* scrollToHandler({ payload }) {
    try {
        yield delay(50);
        if (payload) {
            yield call(scrollToId, payload);
        } else {
            yield call(scrollToTop);
        }
    } catch (error) {
        yield call(console.error, `Something bad happened! ${error}`)
    }
}

function* clearSearchRecipeHandler() {
    yield put(searchRecipe(""));
}

export function* recipeSaga() {
    yield takeEvery(addOrEditRecipe.type, saveRecipeListHandler);
    yield takeEvery(addOrEditRecipe.type, clearSearchRecipeHandler);
    yield takeEvery(addOrEditRecipe.type, scrollToHandler);
    yield takeEvery(deleteRecipe.type, saveRecipeListHandler);
    yield takeEvery(selectRecipeToEdit.type, scrollToHandler);
}