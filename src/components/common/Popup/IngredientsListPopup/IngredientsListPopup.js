import Search from '../../Search';
import Popup from '../Popup';
import { PopupIngredientsList } from './styles';
import PopupIngredientsListItem from './PopupIngredientsListItem';
import { addIngredientToCurrentRecipe, changeIngredientInCurrentRecipe } from '../../../../redux/recipesSlice';
import { selectIngredients, searchIngredient } from '../../../../redux/ingredientsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';

const IngredientsListPopup = ({ onClose, selectedIngredientId }) => {
    const dispatch = useDispatch();
    const { ingredientsList } = useSelector(selectIngredients);

    const [searchQuery, setSearchQuery] = useState('');
    const searchRef = useRef();

    useEffect(() => {
        const checkHideKeyboard = () => {
            if (searchRef.current.parentElement.scrollTop > 100) {
                searchRef.current.blur();
            }
        };
        searchRef.current?.parentElement.addEventListener('scroll', checkHideKeyboard);

        return () => searchRef.current?.parentElement.removeEventListener("scroll", checkHideKeyboard);
    }, []);

    const selectIngredient = ingredient => {
        selectedIngredientId ?
            dispatch(changeIngredientInCurrentRecipe({ oldIngredientId: selectedIngredientId, ingredient })) :
            dispatch(addIngredientToCurrentRecipe(ingredient));
        onClose();
    }

    const onChangeHandler = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        dispatch(searchIngredient(query))
    }

    return (
        <Popup title="Wybierz składnik" onClose={onClose}>
            <Search onChange={onChangeHandler} value={searchQuery} autoFocus={true} ref={searchRef} />
            <PopupIngredientsList>
                {ingredientsList.length ?
                    ingredientsList.map(ingredient =>
                        <PopupIngredientsListItem
                            key={ingredient._id}
                            ingredient={ingredient}
                            onClick={() => selectIngredient(ingredient)}
                        />) :
                    <p>{searchQuery ? 'Nie znaleziono składników...' : 'Zacznij wpisywać nazwę składnika...'}</p>}
            </PopupIngredientsList>
        </Popup>
    )
}

export default IngredientsListPopup
