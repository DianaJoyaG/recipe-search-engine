import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState('');
  
    const handleInputChange = (e) => {
      setInput(e.target.value);
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      // Split the input into an array of ingredients, trimming whitespace and filtering out empty strings
      const ingredients = input.split(',').map(ingredient => ingredient.trim()).filter(ingredient => ingredient);
      onSearch(ingredients); // Pass the array of ingredients to the onSearch function
    };
  
    return (
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter ingredients separated by commas"
        />
        <button type="submit">Search</button>
      </form>
    );
};

export default SearchBar;


  