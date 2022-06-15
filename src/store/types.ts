export type AppState = {
    recipe: Recipe[],
    recipeAdderModal: boolean,
    recipeModal: boolean,
}

export type Recipe = {
    name: string,
    time: number,
    description: string,
    difficulty: string,
    ingredients: string,
};
