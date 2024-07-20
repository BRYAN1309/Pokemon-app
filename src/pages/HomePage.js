import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPokemon, searchPokemon } from '../api';
import '../App.css'; // Import the updated CSS file

const HomePage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getAllPokemon();
      setPokemon(data);
    };

    fetchPokemon();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await searchPokemon(query);
    setResult(data);
  };

  return (
    <div className="home-page">
      <header className="header">
        <h1>All Pokémon</h1>
        <p>Explore the world of Pokémon and discover your favorites!</p>
      </header>
      <section className="search-section">
        <h2>Search Pokémon</h2>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter Pokémon name"
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        {result && (
          <div className="search-result">
            <div>
                <h3>Result</h3>
                <Link to={`/pokemon/${result.name}`} className="search-link">
                <img
                    src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${result.name}.gif`}
                    alt={result.name}
                    className="search-image"
                />
                {result.name}
                </Link>
            </div>
          </div>
        )}
      </section>
      <section className="pokemon-list">
        {pokemon.map((p) => (
          <div className="pokemon-card" key={p.name}>
            <Link to={`/pokemon/${p.name}`} className="pokemon-link">
              <img
                src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${p.name}.gif`}
                alt={p.name}
                className="pokemon-image"
              />
              <h2 className="pokemon-name">{p.name}</h2>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
