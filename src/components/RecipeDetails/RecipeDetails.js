import React from 'react';
import './recipeDetails.css';

const RecipeDetails = ({ recipe }) => {
  if (!recipe) return null; // Don't render if there's no recipe

  // Helper function to get all ingredients from the recipe
  const getIngredients = (recipe) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) { // Assuming there are up to 20 ingredients
      const ingredient = recipe[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      } else {
        // Break the loop if there are no more ingredients
        break;
      }
    }
    return ingredients;
  };

  const ingredients = getIngredients(recipe);

  return (
    <div className="recipe-details">
      <div className="recipe-image">
        <h2>{recipe.strMeal}</h2>
        <h4>Category: {recipe.strCategory}</h4>
        <h4>Area: {recipe.strArea} </h4>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>
      <div className="recipe-text">
       
        <h2>Ingredients:</h2> 
        <div className="ingredient-list">
        {ingredients.map((ingredient, index) => (
        <span key={index}>{ingredient}{index < ingredients.length - 1 && ', '}</span>
         ))}
        </div>

        
        <h2>Instructions:</h2>
        <ul>
           {recipe.strInstructions.split('\n').map((instruction, index) => 
           instruction && <li key={index}>{instruction}</li>
           )}
       </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;
