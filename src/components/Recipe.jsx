import React from "react";

export default function Recipe({recipe, image, ingredients, instructions, ovenTemp, categories, prepTime, cookTime, totalTime}) {
  // const [inList, setInList] = useState(false);
  // setInList(recipeSelected(recipe, selectedRecipes));

  let keyInst = 0;
  let categoryStr = "";
  let keyIngredient = 0;

  let i;
  if (categories.length > 1) {
    for (i = 0; i < (categories.length - 1); i++) {
      categoryStr = categoryStr + categories[i] + ", ";
    }
  }
  categoryStr = categoryStr + categories[categories.length - 1];

  let fullImage = null;
  if (image != null) {
    fullImage = require(`../imgs/${image}`);
  }

  return (
    <div className="recipe">
      <h1>{recipe}</h1>
      <center>
        {ovenTemp > 0 ? (
          <div>
            <p>Oven: {ovenTemp}˚F</p>
          </div>
          ) : null}
          <p>Prep Time: {prepTime} min, Cook Time: {cookTime} min</p>
          <p>Total Time: {totalTime} min</p>
          <p>Categories: {categoryStr}</p>
          {(fullImage != null ? (
            <img className="recipe-photo" src={fullImage.default} alt={image}/>
          ) : (null))}
      </center>
      
      <h2>Ingredients:</h2>
      <ul>
      {
        ingredients.map( (item) => {
          keyIngredient++;
          return <li key={"ingr" + keyIngredient}>
            {item.units === "count" ? (
              item.value + " " + item.item
            ): (
              item.value + " " + item.units + " " + item.item
            )}
          </li>

        })
      }
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
      {/* {
        inList ? (
          <h1>Remove from list button</h1>
        ) : (
          <button onClick={() => updateList(inList)}>Add to list</button>
        )
      } */}
    </div>
    

  )
}