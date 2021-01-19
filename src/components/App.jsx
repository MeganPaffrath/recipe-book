import React, { useState } from "react";
import recipes from "../recipes.json";
import Recipe from "./Recipe";

import "./app.css";

export default function App() {
  const [type, setType] = useState("all");

  function makeRecipe(recipe) {
    const ovenTemp = recipe.ovenTemp ? recipe.ovenTemp : 0

    return <Recipe 
      key={recipe.recipe}
      recipe={recipe.recipe}
      ingredients={recipe.ingredients}
      ingr={recipe.ingr}
      instructions={recipe.instructions}
      categories={recipe.categories}
      ovenTemp={ovenTemp}
      prepTime={recipe.prepTime}
      cookTime={recipe.cookTime}
      totalTime={recipe.totalTime}
    />
  }

  function filterRecipes(recipes, search) {
    const recipesNew = recipes.filter(function(recipe) {
      // Find by name
      if (recipe.recipe.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      // Find by Ingredient
      for (const ingredient in recipe.ingredients) {
        if (recipe.ingredients[ingredient].toLowerCase().includes(search.toLowerCase())) {
          return true;
        }
      }

      // Find by type
      for (const type in recipe.categories) {
        if (recipe.categories[type].toLowerCase().includes(search.toLowerCase())) {
          return true;
        }
      }

      // find by temp
      if (recipe.ovenTemp === search) {
        return true;
      }

      // Otherwise
      return false;
    });
    
    return recipesNew;
  }

  function handleChange(input) {
    setType(input.target.value);
  }


  return (
    <div>
      <center>
        <h1>Megan's Recipes</h1>
        <p>meganpaffrath.com</p>
      </center>
      <br/>
      <center>
      <input onChange={handleChange} type="search" id="mySearch" value={type} placeholder="Search by title/ingredient/type/temperature" size="40"/>
      </center>
      <br/>
      <center>
        <button onClick={() => setType("meal")}>meals</button>
        <button onClick={() => setType("snack")}>snacks</button>
        <button onClick={() => setType("all")}>all</button>
      </center>

      <br/>
      

      {type === "all" ? (
        recipes.map(makeRecipe)
      ) : filterRecipes(recipes, type).map(makeRecipe)}

    </div>
    
  )
}