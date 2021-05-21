import { useSelector, useDispatch } from 'react-redux';
import { selectRecipes, openRecipePopup, closeRecipePopup } from '../../redux/recipesSlice';
import Search from '../common/Search';
import RecipeListItem from './RecipeListItem';
import { RecipeListWrapper, RecipeListContainer } from './styles';
import RecipeDetailsPopup from '../common/Popup/RecipeDetailsPopup';
import { Button } from '../common/Button';

// const recipes = [{ "name": "Przepis z opisem", "ingredients": [{ "weight": "100", "ingredient": { "Id": 680, "Name": "Kabanosy Nature kraina Wędlin Biedronka", "CategoryId": 0, "Protein": 24, "Fat": 40, "Carbohydrates": 0.5 } }, { "weight": "20", "ingredient": { "Id": 368, "Name": "Majonez Winiary dekoracyjny", "CategoryId": 0, "Protein": 1.5, "Fat": 76.3, "Carbohydrates": 2.9 } }, { "weight": "150", "ingredient": { "Id": 317, "Name": "Pomidor", "CategoryId": 0, "Protein": 0.9, "Fat": 0.2, "Carbohydrates": 2.9 } }], "note": "Moje notatki jak zrobić pyszny przepis KETO!", "protein": "25.65", "fat": "55.56", "carbohydrates": "5.43", "energy": "624.36", "ratio": "1.8 : 1" }, { "name": "test", "ingredients": [{ "weight": "100", "ingredient": { "Id": 366, "Name": "Amarantus ugotowany", "CategoryId": 0, "Protein": 6.8, "Fat": 3.2, "Carbohydrates": 25.5 } }, { "weight": "43", "ingredient": { "Id": 539, "Name": "Burrata GustoBello Biedronka", "CategoryId": 0, "Protein": 10, "Fat": 23, "Carbohydrates": 2 } }, { "weight": "57", "ingredient": { "Id": 450, "Name": "Masło Ulubione", "CategoryId": 0, "Protein": 0.7, "Fat": 82, "Carbohydrates": 0.6 } }], "note": "", "protein": "11.50", "fat": "59.83", "carbohydrates": "26.70", "energy": "691.27", "ratio": "1.6 : 1" }];

const RecipeList = () => {
    const { recipeList, recipePopup } = useSelector(selectRecipes);
    const dispatch = useDispatch();

    return (
        <>
            <RecipeListWrapper>
                <Search placeholder="Szukaj przepisu..." />
                <RecipeListContainer>
                    {recipeList.length ?
                        recipeList.map(recipe => <RecipeListItem
                            key={recipe.name}
                            recipe={recipe}
                            onClick={() => dispatch(openRecipePopup(recipe))} />) :
                        <p>Nie znaleziono...</p>}
                </RecipeListContainer>
            </RecipeListWrapper>
            {recipePopup.isOpen && <RecipeDetailsPopup
                onClose={() => dispatch(closeRecipePopup())}
                recipe={recipePopup.selectedRecipe}
                extraButton={<Button primary>Edytuj przepis</Button>} />}
        </>
    )
}

export default RecipeList;
