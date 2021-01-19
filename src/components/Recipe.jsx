import React from "react";

export default function Recipe({recipe, ingredients, instructions, ovenTemp, categories}) {
  var keyIng = 0;
  var keyInst = 0;
  return (
    <div className="recipe">
      <h1>{recipe}</h1>
      <h2>Ingredients:</h2>
      <ul>
      {ingredients.map( (ingredient) => {
        keyIng++;
        return (
          <li key={"i" + keyIng}>{ingredient}</li> 
        )
      })}
      </ul>
      <h2>Instructions:</h2>
      <ol>
        {instructions.map( (step) => {
          keyInst++;
          return (
            <li key={"inst" + keyInst}>{step}</li>
          )
        
        }
        )}
      </ol>
      <h2>Categories</h2>
      <p>{categories.map((category) => {
        return category + " "
      })}</p>
      <h3>Temp: {ovenTemp}</h3>
    </div>
    

  )
}