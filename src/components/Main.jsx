import React from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";
import {getRecipeFromMistral} from "./AI";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  return (
    <main className="page-main">
      <form action={addIngredient} className="page-form">
        <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" className="form-input"></input>
        <button className="form-button">Add ingredient</button>
      </form>

      {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />}

      {recipe && <Recipe recipe={recipe} />}
    </main>
  )
}