import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import ingredientsReducer from './ingredientsSlice';
import recipesReducer from './recipesSlice';
import rootSaga from '../redux/saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        ingredients: ingredientsReducer,
        recipes: recipesReducer
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;