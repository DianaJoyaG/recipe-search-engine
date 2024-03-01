import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import { searchByIngredient, getRecipeDetails } from './api/MealDBAPI'; // Import the API functions
import './App.css'; // Import the main styling for the app

const App = () => {
  const [recipes, setRecipes] = useState([]); // State to store the recipes
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [view, setView] = useState('list');

  // Function to handle the search logic, expects an array of ingredients
  const handleSearch = async (ingredientsArray) => {
    if (ingredientsArray.length) {
      // Join the array into a comma-separated string of ingredients
      const searchTerm = ingredientsArray.join(',');

      try {
        const results = await searchByIngredient(searchTerm); // Call the API search function with a string of ingredients
        setRecipes(results || []); // Update the recipes state with the results
      } catch (error) {
        console.error(error);
        setRecipes([]); // If an error occurs, set the recipes to an empty array
      }
    } else {
      // Optionally clear the recipes if the search term is empty
      setRecipes([]);
    }
  };

  const showDetails = async (id) => {
    const details = await getRecipeDetails(id);
    setSelectedRecipe(details);
    setView('details');
  };

  const goBackToList = () => {
    setSelectedRecipe(null);
    setView('list');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Search Engine</h1>
        {view === 'details' && <button className='ButtonGoBack' onClick={goBackToList}>Back to list</button>}
      </header>
      <SearchBar onSearch={handleSearch} />
      {view === 'list' && <RecipeList recipes={recipes} onFetchDetails={showDetails} />}
      {view === 'details' && selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
    </div>
  );
};

export default App;
