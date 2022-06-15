import { AppState } from "../../store/types";
import './RecipesWrapper.css';
import { Recipe } from '../Recipe/Recipe';
import { useSelector, useDispatch } from "react-redux";
import { handleRecipeModal } from '../../store/actions';
import { RecipeModal } from '../RecipeModal/RecipeModal';
import { useState } from "react";

export const RecipesWrapper = () => {
    const [recipeModal, setRecipeModal] = useState({
        name: '',
        time: 0,
        difficulty: '',
        ingredients: '',
        description: '',
    });
    const recipes = useSelector((state: AppState) => state.recipe);
    const open = useSelector((state: AppState) => state.recipeModal);
    const dispatch = useDispatch();
    const openRecipeModal = (element: any) => {
        dispatch(handleRecipeModal(true));
        setRecipeModal({
            name: element.name,
            time: element.time,
            difficulty: element.difficulty,
            ingredients: element.ingredients,
            description: element.description,
        })
    }

    const recipe = recipes.map((e, i) =>
        <Recipe
            name={e.name}
            time={e.time}
            difficulty={e.difficulty}
            ingredients={e.ingredients}
            description={e.description}
            onClick={() => openRecipeModal(e)}
        />
    )
    return (
        <div className='recipe-wrapper'>{!open ? recipe :
            <RecipeModal
                name={recipeModal.name}
                time={recipeModal.time}
                difficulty={recipeModal.difficulty}
                ingredients={recipeModal.ingredients}
                description={recipeModal.description}
            />}</div>
    );

}