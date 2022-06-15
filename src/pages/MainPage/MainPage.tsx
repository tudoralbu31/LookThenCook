import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import RecipeAdder from "../../components/RecipeAdderModal/RecipeAdderModal";
import { handleAdderModal } from "../../store/actions";
import { AppState } from "../../store/types";
import { RecipesWrapper } from "../../components/RecipesWrapper/RecipesWrapper";

export const MainPage = () => {
    const dispatch = useDispatch();
    const adderModalOpen = useSelector((state: AppState) => state.recipeAdderModal);
    const recipeModal = useSelector((state: AppState) => state.recipeModal)
    return (
        <div>
            <RecipesWrapper></RecipesWrapper>
            {adderModalOpen && <RecipeAdder />}
            {!adderModalOpen && !recipeModal && <Button onClick={() => dispatch(handleAdderModal(true))}>Add new recipe</Button>}
        </div>
    );
}