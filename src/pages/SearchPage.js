// src/pages/SearchPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchPokemon } from '../api';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await searchPokemon(query);
    setResult(data);
  };

  return (
    <div>
      <h1>Search Pokemon</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter Pokemon name"
        />
        <button type="submit">Search</button>
      </form>
      {result && (
        <div>
          <h2>Result</h2>
          <Link to={`/pokemon/${result.name}`}>{result.name}</Link>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
