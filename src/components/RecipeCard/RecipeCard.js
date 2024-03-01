import React from 'react';
import './recipeCard.css'; // Import the styling for the card

// This component accepts 'recipe' and 'onFetchDetails' as props
const RecipeCard = ({ recipe, onFetchDetails }) => {

  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
      <div className="recipe-info">
        <h3 className="recipe-title">{recipe.strMeal}</h3>
        <button onClick={() => onFetchDetails(recipe.idMeal)}>View Details</button>
      </div>
    </div>
  );
};

export default RecipeCard;
