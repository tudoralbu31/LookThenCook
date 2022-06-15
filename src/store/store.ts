import { legacy_createStore as createStore, combineReducers, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Recipe } from './types';

const initialState = {
    recipe: [],
    recipeAdderModal: false,
    recipeModal: false,
}

export const recipeReducer = (state: Recipe[] = initialState.recipe, action: AnyAction): Recipe[] => {
    if(state === undefined){
        return initialState.recipe;
    }
    switch (action.type){
        case 'ADD_RECIPES':
            return [...state, action.recipe];
        default:
            return state;
    }
}

export const recipeAdderModalReducer = (state: boolean = initialState.recipeAdderModal, action: AnyAction): boolean => {
    if (state === undefined){
        return initialState.recipeAdderModal;
    }
    switch (action.type){
        case 'HANDLE_ADDER_MODAL':
            return action.open;
        default:
            return state;
    }
}

export const recipeModalReducer = (state: boolean = initialState.recipeModal, action: AnyAction): boolean => {
    if (state === undefined){
        return initialState.recipeModal;
    }
    switch (action.type){
        case 'HANDLE_RECIPE_MODAL':
            return action.open;
        default:
            return state;
    }
} 

const reducers = combineReducers({
    recipe: recipeReducer,
    recipeAdderModal: recipeAdderModalReducer,
    recipeModal: recipeModalReducer,
});

export const store = createStore(reducers, initialState, composeWithDevTools());
