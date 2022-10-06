import { AppState } from "../../store/types";
import "./RecipesWrapper.css";
import { Recipe } from "../Recipe/Recipe";
import { useSelector, useDispatch } from "react-redux";
import {
  changeRecipeModalValues,
  handleRecipeModal,
} from "../../store/actions";
import { RecipeModal } from "../RecipeModal/RecipeModal";
import { useState } from "react";

export const RecipesWrapper = () => {
  const recipes = useSelector((state: AppState) => state.recipe);
  const dispatch = useDispatch();
  const openRecipeModal = (element: any) => {
    dispatch(handleRecipeModal(true));
    dispatch(
      changeRecipeModalValues({
        name: element.name,
        time: element.time,
        difficulty: element.difficulty,
        ingredients: element.ingredients,
        description: element.description,
      })
    );
  };

  const recipe = recipes.map((e) => (
    <Recipe
      name={e.name}
      time={e.time}
      difficulty={e.difficulty}
      ingredients={e.ingredients}
      description={e.description}
      onClick={() => openRecipeModal(e)}
    />
  ));
  return <div className="recipe-wrapper">{recipe}</div>;
};
