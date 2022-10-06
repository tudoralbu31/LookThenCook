import {
  legacy_createStore as createStore,
  combineReducers,
  AnyAction,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Recipe } from "./types";
import RECIPES from "../constants";

const initialState = {
  recipe: [],
  recipeAdderModal: false,
  recipeModal: false,
  recipeModalState: {
    name: "",
    time: 0,
    description: "",
    difficulty: "",
    ingredients: "",
  },
};

export const recipeReducer = (
  state: Recipe[] = initialState.recipe,
  action: AnyAction
): Recipe[] => {
  if (state === undefined) {
    return initialState.recipe;
  }
  switch (action.type) {
    case "ADD_RECIPES":
      return [...state, action.recipe];
    default:
      return state;
  }
};

export const recipeAdderModalReducer = (
  state: boolean = initialState.recipeAdderModal,
  action: AnyAction
): boolean => {
  if (state === undefined) {
    return initialState.recipeAdderModal;
  }
  switch (action.type) {
    case "HANDLE_ADDER_MODAL":
      return action.open;
    default:
      return state;
  }
};

export const recipeModalReducer = (
  state: boolean = initialState.recipeModal,
  action: AnyAction
): boolean => {
  if (state === undefined) {
    return initialState.recipeModal;
  }
  switch (action.type) {
    case "HANDLE_RECIPE_MODAL":
      return action.open;
    default:
      return state;
  }
};

export const recipeModalChangeReducer = (
  state: Recipe = initialState.recipeModalState,
  action: AnyAction
): Recipe => {
  if (state === undefined) {
    return initialState.recipeModalState;
  }
  switch (action.type) {
    case "HANDLE_MODAL_VALUES_CHANGE":
      return action.recipe;
    default:
      return state;
  }
};

const reducers = combineReducers({
  recipe: recipeReducer,
  recipeAdderModal: recipeAdderModalReducer,
  recipeModal: recipeModalReducer,
  recipeModalState: recipeModalChangeReducer,
});

export const store = createStore(reducers, initialState, composeWithDevTools());
