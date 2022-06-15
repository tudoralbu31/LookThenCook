import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleRecipeModal } from '../../store/actions';
import { RecipeModal } from '../../components/RecipeModal/RecipeModal'
import { Recipe } from "../../components/Recipe/Recipe";
import { AppState } from "../../store/types";
import './Search.css'

export const Search = () => {
    const recipes = useSelector((state: AppState) => state.recipe);
    const dispatch = useDispatch();
    const [searchedValue, setSearchedValue] = useState('');

    const [recipeModal, setRecipeModal] = useState({
        name: '',
        time: 0,
        difficulty: '',
        ingredients: '',
        description: '',
    });

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
    return <div className="main">
        <h1>Search a recipe: </h1>
        <div className="search">
            <TextField
                id="outlined-basic"
                variant="standard"
                label="Search"
                fullWidth
                onChange={(e) => (setSearchedValue(e.target.value))}
            />
        </div>
        <div className="recipe-list">{recipes.map((e) => {
            if (searchedValue === e.name.toLocaleLowerCase() || searchedValue === e.ingredients) {
                return <Recipe
                    name={e.name}
                    time={e.time}
                    difficulty={e.difficulty}
                    ingredients={e.ingredients}
                    description={e.description}
                    onClick={() => openRecipeModal(e)}
                />
            }
        })}</div>
    </div>
}

