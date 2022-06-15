import { Dispatch } from "react";
import { Recipe } from "./types";

export const ADD_RECIPES = "ADD_RECIPES";
export const HANDLE_ADDER_MODAL = "HANDLE_ADDER_MODAL";
export const HANDLE_RECIPE_MODAL = "HANDLE_RECIPE_MODAL";

export const addRecipe = (recipe: Recipe) => ({
  type: ADD_RECIPES,
  recipe,
});

export const handleAdderModal = (open: boolean) => ({
  type: HANDLE_ADDER_MODAL,
  open,
});

export const handleRecipeModal = (open: boolean) => ({
  type: HANDLE_RECIPE_MODAL,
  open,
});
