// MealDBAPI.js

const API_BASE_URL_FILTER = 'https://www.themealdb.com/api/json/v2/9973533';
const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';


// Function to search for recipes by ingredient
export const searchByIngredient = async (ingredient) => {
  try {
    const response = await fetch(`${API_BASE_URL_FILTER}/filter.php?i=${ingredient}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.meals; // Assuming the API returns an object with a 'meals' array
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error; // Re-throw the error for the caller to handle
  }
};

// Function to get the details of a single recipe by its ID
export const getRecipeDetails = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.meals[0]; 
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};


