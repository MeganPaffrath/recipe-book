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
        if (recipe.ingredients[ingredient].item.toLowerCase().includes(search.toLowerCase())) {
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
    <div class="content">
      <center>
        <h1>Megan's Recipes</h1>
        <p>meganpaffrath.com</p>
      </center>
      <br/>
      <center>
        <p>Search by title/ingredient/type/temperature:</p>
      <input onChange={handleChange} type="search" id="mySearch" value={type} placeholder="Search by title/ingredient/type/temperature" size="40"/>
      </center>
      <br/>
      <center className="category-btns">
        <button onClick={() => setType("all")}>all</button>
        <button onClick={() => setType("meal")}>meal</button>
        <button onClick={() => setType("breakfast")}>breakfast</button>
        <button onClick={() => setType("side")}>side</button>
        <button onClick={() => setType("salad")}>salad</button>
        <button onClick={() => setType("dessert")}>dessert</button>
        <button onClick={() => setType("hors d'oeuvre")}>hors d'oeuvre</button>
        <button onClick={() => setType("oven")}>oven</button>
        <button onClick={() => setType("blender")}>blender</button>
        <button onClick={() => setType("stove")}>stove</button>
        <button onClick={() => setType("sheet pan")}>sheet pan</button>
        {/* <button onClick={() => setType("snack")}>snacks</button> */}
        
      </center>

      <br/>
      

      {type === "all" ? (
        recipes.map(makeRecipe)
      ) : filterRecipes(recipes, type).map(makeRecipe)}

    </div>
    
  )
}