import React from "react";

export default function Recipe({recipe, ingredients, instructions, ovenTemp, categories}) {
  let keyIng = 0;
  let keyInst = 0;
  let categoryStr = "";

  let i;
  if (categories.length > 1) {
    for (i = 0; i < (categories.length - 1); i++) {
      console.log(categories[i]);
      categoryStr = categoryStr + categories[i] + ", ";
    }
  }
  categoryStr = categoryStr + categories[categories.length - 1];

  console.log("STRING: " + categoryStr);


  return (
    <div className="recipe">
      <h1>{recipe}</h1>
      <center>
        {ovenTemp > 0 ? (
          <div>
            <p>Oven: {ovenTemp}˚F</p>
          </div>
          ) : null}
          <p>Categories: {categoryStr}</p>
      </center>
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
      
    </div>
    

  )
}