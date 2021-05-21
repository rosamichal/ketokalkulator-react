import Popup from '../Popup';
import MacroSummary from '../../MacroSummary';

const RecipeDetailsPopup = ({ onClose, recipe, extraButton }) => {
    return (
        <Popup title={recipe.name} onClose={onClose} extraButton={extraButton} >
            <MacroSummary
                protein={recipe.protein}
                fat={recipe.fat}
                carbohydrates={recipe.carbohydrates}
                energy={recipe.energy}
                ratio={recipe.ratio} />
            <div>
                <h3>Składniki</h3>
                <ul>
                    {recipe.ingredientsList.map(ingredient => {
                        return <li key={ingredient.ingredient.id}>{ingredient.weight} g {ingredient.ingredient.name}</li>
                    })}
                </ul>
            </div>
            {recipe.note && <div>
                <h3>Notatka</h3>
                <p>{recipe.note}</p>
            </div>}
        </Popup>
    )
}

export default RecipeDetailsPopup
