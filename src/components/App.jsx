import React from "react";
import recipes from "../recipes.json";
import Recipe from "./Recipe";

export default function App() {
  function makeRecipe(recipe) {
    const ovenTemp = recipe.ovenTemp ? recipe.ovenTemp : 0

    return <Recipe 
      key={recipe.recipe}
      recipe={recipe.recipe}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
      ovenTemp={ovenTemp}
    />
  }


  return (
    <div>
      <h1>Megan's Recipes</h1>
      {recipes.map(makeRecipe)}
    </div>
    
  )
}