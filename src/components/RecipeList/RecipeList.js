import Search from '../common/Search';
import RecipeListItem from './RecipeListItem';
import { RecipeListWrapper, RecipeListContainer } from './styles'

const recipes = [{
    "name": "test",
    "ingredients": [
        {
            "weight": "100",
            "ingredient": {
                "Id": 366,
                "Name": "Amarantus ugotowany",
                "CategoryId": 0,
                "Protein": 6.8,
                "Fat": 3.2,
                "Carbohydrates": 25.5
            }
        },
        {
            "weight": "43",
            "ingredient": {
                "Id": 539,
                "Name": "Burrata GustoBello Biedronka",
                "CategoryId": 0,
                "Protein": 10,
                "Fat": 23,
                "Carbohydrates": 2
            }
        }, {
            "weight": "57",
            "ingredient": {
                "Id": 450,
                "Name": "Masło Ulubione",
                "CategoryId": 0,
                "Protein": 0.7,
                "Fat": 82,
                "Carbohydrates": 0.6
            }
        }],
    "note": "",
    "protein": "11.50",
    "fat": "59.83",
    "carbohydrates": "26.70",
    "energy": "691.27",
    "ratio": "1.6 : 1"
},{
    "name": "test 2",
    "ingredients": [
        {
            "weight": "100",
            "ingredient": {
                "Id": 366,
                "Name": "Amarantus ugotowany",
                "CategoryId": 0,
                "Protein": 6.8,
                "Fat": 3.2,
                "Carbohydrates": 25.5
            }
        },
        {
            "weight": "43",
            "ingredient": {
                "Id": 539,
                "Name": "Burrata GustoBello Biedronka",
                "CategoryId": 0,
                "Protein": 10,
                "Fat": 23,
                "Carbohydrates": 2
            }
        }, {
            "weight": "57",
            "ingredient": {
                "Id": 450,
                "Name": "Masło Ulubione",
                "CategoryId": 0,
                "Protein": 0.7,
                "Fat": 82,
                "Carbohydrates": 0.6
            }
        }],
    "note": "",
    "protein": "11.50",
    "fat": "59.83",
    "carbohydrates": "26.70",
    "energy": "691.27",
    "ratio": "1.6 : 1"
},{
    "name": "test 3",
    "ingredients": [
        {
            "weight": "100",
            "ingredient": {
                "Id": 366,
                "Name": "Amarantus ugotowany",
                "CategoryId": 0,
                "Protein": 6.8,
                "Fat": 3.2,
                "Carbohydrates": 25.5
            }
        },
        {
            "weight": "43",
            "ingredient": {
                "Id": 539,
                "Name": "Burrata GustoBello Biedronka",
                "CategoryId": 0,
                "Protein": 10,
                "Fat": 23,
                "Carbohydrates": 2
            }
        }, {
            "weight": "57",
            "ingredient": {
                "Id": 450,
                "Name": "Masło Ulubione",
                "CategoryId": 0,
                "Protein": 0.7,
                "Fat": 82,
                "Carbohydrates": 0.6
            }
        }],
    "note": "",
    "protein": "11.50",
    "fat": "59.83",
    "carbohydrates": "26.70",
    "energy": "691.27",
    "ratio": "1.6 : 1"
}];

const RecipeList = () => {
    return (
        <RecipeListWrapper>
            <Search placeholder="Szukaj przepisu..." />
            <RecipeListContainer>
                {recipes.map(recipe => <RecipeListItem key={recipe.name} recipe={recipe} />)}
            </RecipeListContainer>
        </RecipeListWrapper>
    )
}

export default RecipeList
