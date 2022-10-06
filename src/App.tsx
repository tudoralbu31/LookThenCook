import { useSelector } from "react-redux";
import "./App.css";
import { RecipeModal } from "./components/RecipeModal/RecipeModal";
import { Router } from "./router/Router";
import { AppState } from "./store/types";
import recipes from "./data.json";

function App() {
  localStorage.setItem("recipes", JSON.stringify(recipes));
  const open = useSelector((state: AppState) => state.recipeModal);
  const recipeModalState = useSelector(
    (state: AppState) => state.openModalValues
  );

  return (
    <div className="App">
      <Router />
      {open && (
        <RecipeModal
          name={recipeModalState.name}
          time={recipeModalState.time}
          description={recipeModalState.description}
          difficulty={recipeModalState.difficulty}
          ingredients={recipeModalState.ingredients}
        />
      )}
    </div>
  );
}

export default App;
