export default function IngredientsList(props) {
  const ingredientsListItems = props.ingredients.map(ingredient => {
    return <li key={ingredient}>{ingredient}</li>
  })

  return (
    <section className="ingredient-section">
      <h2 className="ingredient-on-hand">Ingredients on hand:</h2>
      <ul className="ingredient-list">
        {ingredientsListItems}
      </ul>
      {props.ingredients.length > 3 && <div className="get-recipe-container">
        <div className="get-recipe-text">
          <h3 className="get-recipe-header">Ready for a recipe?</h3>
          <p className="get-recipe-description">Generate a recipe from your list of ingredients</p>
        </div>
        <button onClick={props.getRecipe} className="get-recipe-button">Get a recipe</button>
      </div>}
    </section>
  )
}