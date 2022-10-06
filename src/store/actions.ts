import axios from "axios";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { Recipe } from "./types";
export const ADD_RECIPES = "ADD_RECIPES";
export const HANDLE_ADDER_MODAL = "HANDLE_ADDER_MODAL";
export const HANDLE_RECIPE_MODAL = "HANDLE_RECIPE_MODAL";
export const UPDATE_OPEN_MODAL_VALUES = "UPDATE_OPEN_MODAL_VALUES";

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

export const updateOpenModalValues = (recipe: Recipe) => ({
  type: UPDATE_OPEN_MODAL_VALUES,
  recipe,
});
