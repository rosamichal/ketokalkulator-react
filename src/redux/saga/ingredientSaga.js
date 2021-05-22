import { takeEvery, put, call } from 'redux-saga/effects';
import { getIngredients, setIngredients } from '../ingredientsSlice';
import { persistKeys, writeData } from '../../utils/persistenceUtils';
import { getIngredientsFromApi } from '../../api/fooddb-node';
import { nameComparer } from '../../utils/sortUtils';

function* getIngredientHandler() {
    try {
        let ingredients = yield call(getIngredientsFromApi);
        ingredients = ingredients.sort(nameComparer);
        yield put(setIngredients(ingredients));
        yield call(writeData, persistKeys.INGREDIENT_LIST, ingredients);
    } catch (error) {
        yield call(console.error, `Something bad happened! ${error}`)
    }
}

export function* ingredientSaga() {
    yield takeEvery(getIngredients.type, getIngredientHandler);
}