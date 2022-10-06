import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { RecipeModal } from "./components/RecipeModal/RecipeModal";
import { Router } from "./router/Router";
import { AppState } from "./store/types";

function App() {
  const open = useSelector((state: AppState) => state.recipeModal);
  const recipeModalState = useSelector(
    (state: AppState) => state.recipeModalState
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
