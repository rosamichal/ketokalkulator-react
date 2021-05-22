import { all } from 'redux-saga/effects';
import { recipeSaga } from './recipeSaga';
import { ingredientSaga } from './ingredientSaga';

export default function* rootSaga() {
    yield all([
        recipeSaga(),
        ingredientSaga(),
    ]);
}