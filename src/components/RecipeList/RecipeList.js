import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard'; // Import RecipeCard component
import './recipeList.css'; // Import the styling for the list

// This component accepts 'recipes' as a prop which is an array of recipe objects
const RecipeList = ({ recipes, onFetchDetails }) => {
  if (recipes.length === 0) {
    return <div>No recipes found. Try a different search!</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          onFetchDetails={onFetchDetails} 
        />
      ))}
    </div>
  );
};


export default RecipeList;
